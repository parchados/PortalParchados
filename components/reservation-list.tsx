"use client"

import { useState } from "react"
import { Calendar, Search, ChevronDown, ChevronUp, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ReservationList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("desc")
  const [sortField, setSortField] = useState("date")

  // Datos de ejemplo para reservas
  const reservations = [
    {
      id: 1,
      user: "Carlos Rodríguez",
      center: "Complejo Deportivo El Campín",
      facility: "Cancha de Fútbol 5",
      date: "2023-06-15",
      time: "18:00 - 19:30",
      status: "confirmed",
      payment: "completed",
    },
    {
      id: 2,
      user: "María López",
      center: "Centro Deportivo Simón Bolívar",
      facility: "Cancha de Voleibol",
      date: "2023-06-16",
      time: "10:00 - 11:30",
      status: "pending",
      payment: "pending",
    },
    {
      id: 3,
      user: "Juan Pérez",
      center: "Polideportivo El Salitre",
      facility: "Cancha de Baloncesto",
      date: "2023-06-15",
      time: "16:00 - 17:30",
      status: "cancelled",
      payment: "refunded",
    },
    {
      id: 4,
      user: "Ana Gómez",
      center: "Complejo Deportivo El Campín",
      facility: "Cancha de Tenis",
      date: "2023-06-17",
      time: "09:00 - 10:30",
      status: "confirmed",
      payment: "completed",
    },
    {
      id: 5,
      user: "Pedro Sánchez",
      center: "Centro Deportivo La Felicidad",
      facility: "Cancha de Fútbol 7",
      date: "2023-06-18",
      time: "19:00 - 20:30",
      status: "confirmed",
      payment: "completed",
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

  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.center.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.facility.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedReservations = [...filteredReservations].sort((a, b) => {
    if (sortField === "date") {
      return sortDirection === "asc"
        ? new Date(a.date + "T" + a.time.split(" - ")[0]) - new Date(b.date + "T" + b.time.split(" - ")[0])
        : new Date(b.date + "T" + b.time.split(" - ")[0]) - new Date(a.date + "T" + a.time.split(" - ")[0])
    }

    return sortDirection === "asc" ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-success"
      case "pending":
        return "bg-warning"
      case "cancelled":
        return "bg-error"
      default:
        return "bg-gray-200"
    }
  }

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-success"
      case "pending":
        return "bg-warning"
      case "refunded":
        return "bg-error"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar por usuario, centro deportivo o instalación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("user")}>
                  Usuario
                  {sortField === "user" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("center")}>
                  Centro Deportivo
                  {sortField === "center" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("facility")}>
                  Instalación
                  {sortField === "facility" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("date")}>
                  Fecha y Hora
                  {sortField === "date" &&
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
                <button className="flex items-center" onClick={() => handleSort("payment")}>
                  Pago
                  {sortField === "payment" &&
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
            {sortedReservations.map((reservation) => (
              <tr key={reservation.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-4 text-sm font-medium">{reservation.user}</td>
                <td className="px-4 py-4 text-sm">{reservation.center}</td>
                <td className="px-4 py-4 text-sm">{reservation.facility}</td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-highlight" />
                    <span>
                      {new Date(reservation.date).toLocaleDateString("es-ES")} <br />
                      {reservation.time}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(reservation.status)} text-white`}
                  >
                    {reservation.status === "confirmed"
                      ? "Confirmada"
                      : reservation.status === "pending"
                        ? "Pendiente"
                        : "Cancelada"}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentStatusColor(reservation.payment)} text-white`}
                  >
                    {reservation.payment === "completed"
                      ? "Completado"
                      : reservation.payment === "pending"
                        ? "Pendiente"
                        : "Reembolsado"}
                  </span>
                </td>
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
      </div>
    </div>
  )
}

