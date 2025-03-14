"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, CalendarDays, MapPin, Users, Trophy, BarChart3, Settings, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Inicio", href: "/", icon: LayoutDashboard },
    { name: "Reservas", href: "/reservas", icon: CalendarDays },
    { name: "Centros Deportivos", href: "/centros", icon: MapPin },
    { name: "Usuarios", href: "/usuarios", icon: Users },
    { name: "Torneos y Eventos", href: "/torneos", icon: Trophy },
    { name: "Reportes", href: "/reportes", icon: BarChart3 },
    { name: "Configuración", href: "/configuracion", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-background text-light-bg p-2 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-highlight text-light-bg w-64 flex-shrink-0 flex flex-col h-screen transition-all duration-300 ease-in-out",
          "fixed md:static z-40",
          isOpen ? "left-0" : "-left-64 md:left-0",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b border-secondary/30">
          <div className="relative h-16 w-16 mr-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZqwvUCymNquWRFiR1lAkY6309rsvu.png"
              alt="Parchados Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-accent">Parchados</h1>
            <p className="text-xs text-detail-color">Panel de Administración</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 text-light-bg hover:bg-secondary/20 rounded-md transition-colors duration-200 group"
                >
                  <item.icon className="h-5 w-5 mr-3 text-accent group-hover:text-detail-color transition-colors duration-200" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-secondary/30">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-light-bg font-bold">
              AD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin Deportivo</p>
              <p className="text-xs text-detail-color">admin@parchados.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

