"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  username: string
  role: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar
    try {
      const storedUser = localStorage.getItem("parchados_user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error("Error al cargar usuario:", error)
    }
  }, [])

  const login = (username: string, password: string): boolean => {
    // Verificar credenciales
    if (username === "admin" && password === "admin") {
      const userData = { username: "admin", role: "admin" }
      setUser(userData)
      try {
        localStorage.setItem("parchados_user", JSON.stringify(userData))
      } catch (error) {
        console.error("Error al guardar usuario:", error)
      }
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem("parchados_user")
    } catch (error) {
      console.error("Error al eliminar usuario:", error)
    }
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

