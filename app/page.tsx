"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Verificar si hay un usuario en localStorage
    try {
      const storedUser = localStorage.getItem("parchados_user")

      if (storedUser) {
        // Si hay un usuario, redirigir al dashboard
        router.push("/dashboard")
      } else {
        // Si no hay usuario, redirigir al login
        router.push("/login")
      }
    } catch (error) {
      console.error("Error al verificar autenticación:", error)
      router.push("/login")
    }
  }, [router])

  // Mostrar un indicador de carga mientras se redirecciona
  return (
    <div className="flex items-center justify-center h-screen bg-light-bg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-btn"></div>
    </div>
  )
}

