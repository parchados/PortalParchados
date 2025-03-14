"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { NotificationDropdown } from "@/components/notification-dropdown"

export function DashboardHeader() {
  const [date] = useState(new Date())

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-display font-bold text-highlight">Dashboard de Administración</h1>
        <p className="text-text-color flex items-center mt-1">
          <Calendar className="h-4 w-4 mr-2" />
          {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
        </p>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            type="search"
            placeholder="Buscar..."
            className="pl-10 bg-white border-secondary focus:border-accent"
          />
        </div>

        <NotificationDropdown />
      </div>
    </div>
  )
}

