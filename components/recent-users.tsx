"use client"

import { useState } from "react"
import { MoreHorizontal, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentUsers() {
  const [sortDirection, setSortDirection] = useState("desc")
  const [sortField, setSortField] = useState("lastActive")

  // Datos de ejemplo para usuarios recientes
  const users = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      email: "carlos@example.com",
      role: "Usuario",
      status: "active",
      lastActive: "2023-06-15T14:30:00",
    },
    {
      id: 2,
      name: "María López",
      email: "maria@example.com",
      role: "Administrador",
      status: "active",
      lastActive: "2023-06-15T16:45:00",
    },
    {
      id: 3,
      name: "Juan Pérez",
      email: "juan@example.com",
      role: "Usuario",
      status: "inactive",
      lastActive: "2023-06-14T09:15:00",
    },
    {
      id: 4,
      name: "Ana Gómez",
      email: "ana@example.com",
      role: "Usuario",
      status: "active",
      lastActive: "2023-06-15T11:20:00",
    },
    {
      id: 5,
      name: "Pedro Sánchez",
      email: "pedro@example.com",
      role: "Usuario",
      status: "active",
      lastActive: "2023-06-15T13:10:00",
    },
  ]

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    if (sortField === "lastActive") {
      return sortDirection === "asc"
        ? new Date(a.lastActive) - new Date(b.lastActive)
        : new Date(b.lastActive) - new Date(a.lastActive)
    }

    return sortDirection === "asc" ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusColor = (status) => {
    return status === "active" ? "bg-success" : "bg-error"
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
              <button className="flex items-center" onClick={() => handleSort("name")}>
                Nombre
                {sortField === "name" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
              <button className="flex items-center" onClick={() => handleSort("email")}>
                Email
                {sortField === "email" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
              <button className="flex items-center" onClick={() => handleSort("role")}>
                Rol
                {sortField === "role" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
              <button className="flex items-center" onClick={() => handleSort("status")}>
                Estado
                {sortField === "status" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
              <button className="flex items-center" onClick={() => handleSort("lastActive")}>
                Última Actividad
                {sortField === "lastActive" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-highlight">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-4 text-sm">{user.name}</td>
              <td className="px-4 py-4 text-sm">{user.email}</td>
              <td className="px-4 py-4 text-sm">{user.role}</td>
              <td className="px-4 py-4 text-sm">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)} text-white`}
                >
                  {user.status === "active" ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="px-4 py-4 text-sm">{formatDate(user.lastActive)}</td>
              <td className="px-4 py-4 text-sm text-right">
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

