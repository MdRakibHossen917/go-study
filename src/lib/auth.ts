// Simple authentication utility using localStorage
// In production, this would be replaced with proper authentication (JWT, sessions, etc.)

const AUTH_KEY = "bideshstudy_auth"
const AUTH_USER_KEY = "bideshstudy_user"

export interface User {
  email: string
  name?: string
}

export const auth = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === "undefined") return false
    const authData = localStorage.getItem(AUTH_KEY)
    return authData === "true"
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

  // Login user
  login: (user: User): void => {
    if (typeof window === "undefined") return
    localStorage.setItem(AUTH_KEY, "true")
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
  },

  // Logout user
  logout: (): void => {
    if (typeof window === "undefined") return
    localStorage.removeItem(AUTH_KEY)
    localStorage.removeItem(AUTH_USER_KEY)
  },
}

