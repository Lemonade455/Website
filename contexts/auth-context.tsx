"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  picture: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      const savedUser = localStorage.getItem("admin-user")
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [])

  const signInWithGoogle = async () => {
    setIsLoading(true)
    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "admin-123",
      name: "Admin User",
      email: "admin@morachina.se",
      picture: "/placeholder.svg?height=40&width=40",
    }

    setUser(mockUser)
    localStorage.setItem("admin-user", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem("admin-user")
  }

  return <AuthContext.Provider value={{ user, isLoading, signInWithGoogle, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
