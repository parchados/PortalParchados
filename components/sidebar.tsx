"use client"

import Link from "next/link"
import Image from "next/image"
import { LayoutGrid, Calendar, MapPin, Users, Trophy, BarChart3, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const { logout, user } = useAuth()
  const pathname = usePathname()

  // Cerrar el sidebar en móviles cuando se hace clic en un enlace
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector("aside.fixed")
      if (sidebar) {
        sidebar.classList.remove("open")
      }
    }
  }

  // Asegurarnos de que los enlaces apunten a las rutas correctas dentro del grupo (dashboard)

  const navItems = [
    { name: "Inicio", href: "/dashboard", icon: LayoutGrid },
    { name: "Calendario", href: "/calendario", icon: Calendar },
    { name: "Reservas", href: "/reservas", icon: Calendar },
    { name: "Centros Deportivos", href: "/centros", icon: MapPin },
    { name: "Usuarios", href: "/usuarios", icon: Users },
    { name: "Torneos y Eventos", href: "/torneos", icon: Trophy },
    { name: "Reportes", href: "/reportes", icon: BarChart3 },
    { name: "Configuración", href: "/configuracion", icon: Settings },
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#003F5C] text-white flex flex-col h-screen z-50 transform md:transform-none transition-transform duration-300 ease-in-out">
      {/* Logo y título */}
      <div className="flex items-center p-4 border-b border-[#2F4B7C]/30">
        <div className="relative h-12 w-12 mr-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZqwvUCymNquWRFiR1lAkY6309rsvu.png"
            alt="Parchados Logo"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#EAC67A]">Parchados</h1>
          <p className="text-xs text-gray-300">Panel de Administración</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 text-white hover:bg-[#2F4B7C]/40 transition-colors duration-200 ${
                  pathname === item.href ? "bg-[#2F4B7C]/40" : ""
                }`}
                onClick={handleLinkClick}
              >
                <item.icon className="h-5 w-5 mr-3 text-[#A5C8E1]" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Perfil de usuario */}
      <div className="p-4 border-t border-[#2F4B7C]/30">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-[#2F4B7C] flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">admin</p>
            <p className="text-xs text-gray-300">admin@parchados.com</p>
          </div>
          <button
            onClick={logout}
            className="p-2 rounded-full hover:bg-[#2F4B7C]/40 transition-colors"
            title="Cerrar sesión"
          >
            <LogOut className="h-5 w-5 text-[#EAC67A]" />
          </button>
        </div>
      </div>
    </aside>
  )
}

