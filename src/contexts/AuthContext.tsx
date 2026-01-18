"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { auth, User } from "@/lib/auth"

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (user: User, token: string) => void
  logout: () => void
  updateUser: (user: User) => void
  refreshAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  // Check authentication status on mount and when needed
  const refreshAuth = () => {
    const authenticated = auth.isAuthenticated()
    const currentUser = auth.getUser()
    setIsAuthenticated(authenticated)
    setUser(currentUser)
  }

  useEffect(() => {
    refreshAuth()
    
    // Listen for storage changes (for logout from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "bideshstudy_token" || e.key === "bideshstudy_user") {
        refreshAuth()
      }
    }
    
    window.addEventListener("storage", handleStorageChange)
    
    // Check auth status periodically
    const interval = setInterval(refreshAuth, 2000)
    
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const login = (userData: User, token: string) => {
    // Store user and token in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("bideshstudy_auth", "true")
      localStorage.setItem("bideshstudy_user", JSON.stringify(userData))
      localStorage.setItem("bideshstudy_token", token)
    }
    setIsAuthenticated(true)
    setUser(userData)
  }

  const logout = () => {
    auth.logout()
    setIsAuthenticated(false)
    setUser(null)
  }

  const updateUser = (userData: User) => {
    setUser(userData)
    if (typeof window !== "undefined") {
      localStorage.setItem("bideshstudy_user", JSON.stringify(userData))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        updateUser,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

