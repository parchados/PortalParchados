"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { SidebarToggle } from "@/components/sidebar-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar autenticación
    try {
      const storedUser = localStorage.getItem("parchados_user")

      if (!storedUser) {
        router.push("/login")
      } else {
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error("Error al verificar autenticación:", error)
      router.push("/login")
    } finally {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-light-bg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-btn"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // No renderizar nada mientras redirige
  }

  return (
    <div className="flex min-h-screen bg-light-bg">
      <Sidebar />
      <SidebarToggle />
      <main className="flex-1 ml-64 md:ml-64 overflow-auto">{children}</main>
    </div>
  )
}

