"use client"

import { useState } from "react"
import { MapPin, Edit, Trash2, ChevronDown, ChevronUp, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SportsCenterList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [sortField, setSortField] = useState("name")

  // Datos de ejemplo para centros deportivos
  const centers = [
    {
      id: 1,
      name: "Complejo Deportivo El Campín",
      address: "Calle 57 #30-80, Bogotá",
      facilities: ["Fútbol", "Tenis", "Baloncesto"],
      status: "active",
      totalCourts: 12,
    },
    {
      id: 2,
      name: "Centro Deportivo Simón Bolívar",
      address: "Av. 68 #55-30, Bogotá",
      facilities: ["Fútbol", "Voleibol", "Atletismo"],
      status: "active",
      totalCourts: 8,
    },
    {
      id: 3,
      name: "Club Deportivo Los Arrayanes",
      address: "Autopista Norte Km 21, Bogotá",
      facilities: ["Tenis", "Golf", "Natación"],
      status: "inactive",
      totalCourts: 15,
    },
    {
      id: 4,
      name: "Polideportivo El Salitre",
      address: "Av. 68 #63-45, Bogotá",
      facilities: ["Fútbol", "Baloncesto", "Voleibol", "Tenis"],
      status: "active",
      totalCourts: 20,
    },
    {
      id: 5,
      name: "Centro Deportivo La Felicidad",
      address: "Av. Boyacá #13-50, Bogotá",
      facilities: ["Fútbol", "Tenis", "Baloncesto"],
      status: "active",
      totalCourts: 10,
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

  const filteredCenters = centers.filter(
    (center) =>
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.facilities.some((facility) => facility.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const sortedCenters = [...filteredCenters].sort((a, b) => {
    if (sortField === "totalCourts") {
      return sortDirection === "asc" ? a.totalCourts - b.totalCourts : b.totalCourts - a.totalCourts
    }

    return sortDirection === "asc" ? a[sortField].localeCompare(b[sortField]) : b[sortField].localeCompare(a[sortField])
  })

  const getStatusColor = (status) => {
    return status === "active" ? "bg-success" : "bg-error"
  }

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar por nombre, dirección o instalación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>
      </div>

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
                <button className="flex items-center" onClick={() => handleSort("address")}>
                  Dirección
                  {sortField === "address" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">Instalaciones</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-highlight">
                <button className="flex items-center" onClick={() => handleSort("totalCourts")}>
                  Canchas
                  {sortField === "totalCourts" &&
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
              <th className="px-4 py-3 text-right text-sm font-medium text-highlight">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sortedCenters.map((center) => (
              <tr key={center.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-4 text-sm font-medium">{center.name}</td>
                <td className="px-4 py-4 text-sm">{center.address}</td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-wrap gap-1">
                    {center.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-white"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">{center.totalCourts}</td>
                <td className="px-4 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(center.status)} text-white`}
                  >
                    {center.status === "active" ? "Activo" : "Inactivo"}
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

