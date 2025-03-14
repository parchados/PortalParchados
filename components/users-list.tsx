"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp, Eye, Edit, Trash2, UserPlus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UsersList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("desc")
  const [sortField, setSortField] = useState("registrationDate")
  const [filter, setFilter] = useState("all")

  // Datos de ejemplo para usuarios
  const users = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      email: "carlos@example.com",
      phone: "+57 300 123 4567",
      role: "Usuario",
      status: "active",
      registrationDate: "2023-01-15",
      reservations: 12,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "María López",
      email: "maria@example.com",
      phone: "+57 310 987 6543",
      role: "Administrador",
      status: "active",
      registrationDate: "2022-11-20",
      reservations: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Juan Pérez",
      email: "juan@example.com",
      phone: "+57 320 456 7890",
      role: "Usuario",
      status: "inactive",
      registrationDate: "2023-02-05",
      reservations: 8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Ana Gómez",
      email: "ana@example.com",
      phone: "+57 315 789 0123",
      role: "Usuario Premium",
      status: "active",
      registrationDate: "2023-03-10",
      reservations: 20,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Pedro Sánchez",
      email: "pedro@example.com",
      phone: "+57 305 234 5678",
      role: "Usuario",
      status: "active",
      registrationDate: "2023-01-25",
      reservations: 15,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Laura Martínez",
      email: "laura@example.com",
      phone: "+57 318 345 6789",
      role: "Usuario Premium",
      status: "active",
      registrationDate: "2023-04-05",
      reservations: 18,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Roberto Díaz",
      email: "roberto@example.com",
      phone: "+57 301 456 7890",
      role: "Usuario",
      status: "inactive",
      registrationDate: "2022-12-15",
      reservations: 3,
      avatar: "/placeholder.svg?height=40&width=40",
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

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filter === "all" ||
        (filter === "active" && user.status === "active") ||
        (filter === "inactive" && user.status === "inactive") ||
        (filter === "admin" && user.role === "Administrador") ||
        (filter === "premium" && user.role === "Usuario Premium")),
  )

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortField === "registrationDate") {
      return sortDirection === "asc"
        ? new Date(a.registrationDate) - new Date(b.registrationDate)
        : new Date(b.registrationDate) - new Date(a.registrationDate)
    }

    if (sortField === "reservations") {
      return sortDirection === "asc" ? a.reservations - b.reservations : b.reservations - a.reservations
    }

    return sortDirection === "asc"
      ? String(a[sortField]).localeCompare(String(b[sortField]))
      : String(b[sortField]).localeCompare(String(a[sortField]))
  })

  const getStatusColor = (status) => {
    return status === "active" ? "bg-success" : "bg-error"
  }

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "Administrador":
        return "bg-accent text-light-bg"
      case "Usuario Premium":
        return "bg-primary-btn text-light-bg"
      default:
        return "bg-secondary text-light-bg"
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Buscar por nombre, email o teléfono..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrar
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filtrar por estado</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setFilter("all")} className={filter === "all" ? "bg-secondary/20" : ""}>
              Todos los usuarios
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFilter("active")}
              className={filter === "active" ? "bg-secondary/20" : ""}
            >
              Usuarios activos
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFilter("inactive")}
              className={filter === "inactive" ? "bg-secondary/20" : ""}
            >
              Usuarios inactivos
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filtrar por rol</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setFilter("admin")}
              className={filter === "admin" ? "bg-secondary/20" : ""}
            >
              Administradores
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setFilter("premium")}
              className={filter === "premium" ? "bg-secondary/20" : ""}
            >
              Usuarios Premium
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Nuevo Usuario
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("name")}>
                  Usuario
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
                  Contacto
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
                <button className="flex items-center" onClick={() => handleSort("registrationDate")}>
                  Registro
                  {sortField === "registrationDate" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("reservations")}>
                  Reservas
                  {sortField === "reservations" &&
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
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="h-10 w-10 rounded-full mr-3 bg-gray-200"
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">ID: {user.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">
                  <p>{user.email}</p>
                  <p className="text-xs text-gray-500">{user.phone}</p>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)} text-white`}
                  >
                    {user.status === "active" ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">{new Date(user.registrationDate).toLocaleDateString("es-ES")}</td>
                <td className="px-4 py-4 text-sm font-medium">{user.reservations}</td>
                <td className="px-4 py-4 text-sm text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Mostrando {sortedUsers.length} de {users.length} usuarios
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="outline" size="sm" className="bg-secondary text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

