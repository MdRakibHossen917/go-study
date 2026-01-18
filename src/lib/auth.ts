// Authentication utility with backend API integration

const AUTH_KEY = "bideshstudy_auth"
const AUTH_USER_KEY = "bideshstudy_user"
const AUTH_TOKEN_KEY = "bideshstudy_token"
const API_BASE_URL = "https://go-study-backend.vercel.app"

export interface User {
  email: string
  name?: string
  id?: string
}

export interface LoginResponse {
  success: boolean
  message?: string
  user?: User
  token?: string
}

export interface RegisterResponse {
  success: boolean
  message?: string
  user?: User
  token?: string
}

export const auth = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === "undefined") return false
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    return !!token
  },

  // Get current user
  getUser: (): User | null => {
    if (typeof window === "undefined") return null
    const userData = localStorage.getItem(AUTH_USER_KEY)
    if (!userData) return null
    try {
      return JSON.parse(userData)
    } catch {
      return null
    }
  },

  // Get auth token
  getToken: (): string | null => {
    if (typeof window === "undefined") return null
    return localStorage.getItem(AUTH_TOKEN_KEY)
  },

  // Login user via API
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Login failed. Please check your credentials.",
        }
      }

      if (data.success && data.user) {
        // Store authentication data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_KEY, "true")
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
          if (data.token) {
            localStorage.setItem(AUTH_TOKEN_KEY, data.token)
          }
        }
      }

      return {
        success: data.success || false,
        message: data.message,
        user: data.user,
        token: data.token,
      }
    } catch (error) {
      console.error("Login error:", error)
      return {
        success: false,
        message: "Network error. Please try again later.",
      }
    }
  },

  // Register user via API
  register: async (
    name: string,
    email: string,
    password: string
  ): Promise<RegisterResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Registration failed. Please try again.",
        }
      }

      if (data.success && data.user) {
        // Store authentication data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_KEY, "true")
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
          if (data.token) {
            localStorage.setItem(AUTH_TOKEN_KEY, data.token)
          }
        }
      }

      return {
        success: data.success || false,
        message: data.message,
        user: data.user,
        token: data.token,
      }
    } catch (error) {
      console.error("Registration error:", error)
      return {
        success: false,
        message: "Network error. Please try again later.",
      }
    }
  },

  // Get current user from API
  getMe: async (): Promise<User | null> => {
    try {
      const token = auth.getToken()
      if (!token) return null

      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        // Token might be invalid, clear auth
        auth.logout()
        return null
      }

      const data = await response.json()
      if (data.success && data.user) {
        // Update stored user data
        if (typeof window !== "undefined") {
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user))
        }
        return data.user
      }

      return null
    } catch (error) {
      console.error("Get me error:", error)
      return null
    }
  },

  // Logout user
  logout: (): void => {
    if (typeof window === "undefined") return
    localStorage.removeItem(AUTH_KEY)
    localStorage.removeItem(AUTH_USER_KEY)
    localStorage.removeItem(AUTH_TOKEN_KEY)
  },
}

