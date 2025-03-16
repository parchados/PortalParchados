"use client"

import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    const sidebar = document.querySelector("aside.fixed")
    if (sidebar) {
      sidebar.classList.toggle("open")
      setIsOpen(!isOpen)
    }
  }

  // Cerrar el sidebar cuando se cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.querySelector("aside.fixed")
      if (window.innerWidth > 768 && sidebar) {
        sidebar.classList.remove("open")
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <button className="sidebar-toggle md:hidden bg-[#003F5C] text-white p-2 rounded-md" onClick={toggleSidebar}>
      <Menu size={24} />
    </button>
  )
}

