"use client"

import { useState } from "react"
import { Search, Calendar, Users, Trophy, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export function TournamentsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [sortField, setSortField] = useState("startDate")

  // Datos de ejemplo para torneos
  const tournaments = [
    {
      id: 1,
      name: "Copa Parchados de Fútbol 5",
      sport: "Fútbol 5",
      location: "Complejo Deportivo El Campín",
      startDate: "2023-07-15",
      endDate: "2023-07-30",
      status: "upcoming",
      participants: 12,
      maxParticipants: 16,
      description: "Torneo de fútbol 5 para equipos amateur. Premios para los tres primeros lugares.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      name: "Torneo Relámpago de Tenis",
      sport: "Tenis",
      location: "Club Deportivo Los Arrayanes",
      startDate: "2023-06-25",
      endDate: "2023-06-26",
      status: "active",
      participants: 16,
      maxParticipants: 16,
      description: "Torneo relámpago de tenis en modalidad individual. Duración de un fin de semana.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      name: "Liga de Baloncesto 3x3",
      sport: "Baloncesto",
      location: "Polideportivo El Salitre",
      startDate: "2023-08-05",
      endDate: "2023-09-10",
      status: "upcoming",
      participants: 8,
      maxParticipants: 20,
      description: "Liga de baloncesto 3x3 con duración de un mes. Partidos todos los fines de semana.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 4,
      name: "Torneo de Voleibol Mixto",
      sport: "Voleibol",
      location: "Centro Deportivo Simón Bolívar",
      startDate: "2023-06-10",
      endDate: "2023-06-20",
      status: "completed",
      participants: 10,
      maxParticipants: 10,
      description: "Torneo de voleibol para equipos mixtos. Mínimo 2 mujeres por equipo en cancha.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 5,
      name: "Maratón Parchados 10K",
      sport: "Atletismo",
      location: "Parque Simón Bolívar",
      startDate: "2023-09-15",
      endDate: "2023-09-15",
      status: "upcoming",
      participants: 150,
      maxParticipants: 500,
      description: "Carrera de 10 kilómetros por las principales vías del parque Simón Bolívar.",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 6,
      name: "Campeonato de Fútbol 7",
      sport: "Fútbol 7",
      location: "Centro Deportivo La Felicidad",
      startDate: "2023-06-01",
      endDate: "2023-06-15",
      status: "completed",
      participants: 8,
      maxParticipants: 8,
      description: "Campeonato de fútbol 7 para equipos corporativos. Partidos en horario nocturno.",
      image: "/placeholder.svg?height=100&width=200",
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

  const filteredTournaments = tournaments.filter(
    (tournament) =>
      tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedTournaments = [...filteredTournaments].sort((a, b) => {
    if (sortField === "startDate" || sortField === "endDate") {
      return sortDirection === "asc"
        ? new Date(a[sortField]) - new Date(b[sortField])
        : new Date(b[sortField]) - new Date(a[sortField])
    }

    if (sortField === "participants") {
      return sortDirection === "asc" ? a.participants - b.participants : b.participants - a.participants
    }

    return sortDirection === "asc"
      ? String(a[sortField]).localeCompare(String(b[sortField]))
      : String(b[sortField]).localeCompare(String(a[sortField]))
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-success"
      case "upcoming":
        return "bg-warning"
      case "completed":
        return "bg-secondary"
      default:
        return "bg-gray-200"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "En curso"
      case "upcoming":
        return "Próximo"
      case "completed":
        return "Finalizado"
      default:
        return "Desconocido"
    }
  }

  const activeTournaments = sortedTournaments.filter((t) => t.status === "active")
  const upcomingTournaments = sortedTournaments.filter((t) => t.status === "upcoming")
  const completedTournaments = sortedTournaments.filter((t) => t.status === "completed")

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar por nombre, deporte o ubicación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">En curso</TabsTrigger>
          <TabsTrigger value="upcoming">Próximos</TabsTrigger>
          <TabsTrigger value="completed">Finalizados</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          {activeTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Trophy className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No hay torneos en curso</h3>
              <p className="mt-2 text-sm text-gray-500">Actualmente no hay torneos o eventos en curso.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Calendar className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No hay torneos próximos</h3>
              <p className="mt-2 text-sm text-gray-500">No hay torneos o eventos programados para fechas futuras.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          {completedTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Trophy className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No hay torneos finalizados</h3>
              <p className="mt-2 text-sm text-gray-500">No hay torneos o eventos que hayan finalizado.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TournamentCard({ tournament }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-success"
      case "upcoming":
        return "bg-warning"
      case "completed":
        return "bg-secondary"
      default:
        return "bg-gray-200"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "En curso"
      case "upcoming":
        return "Próximo"
      case "completed":
        return "Finalizado"
      default:
        return "Desconocido"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <img
          src={tournament.image || "/placeholder.svg"}
          alt={tournament.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(tournament.status)} text-white`}
          >
            {getStatusText(tournament.status)}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-lg text-highlight">{tournament.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{tournament.description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm">
            <Trophy className="h-4 w-4 mr-2 text-primary-btn" />
            <span>{tournament.sport}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary-btn" />
            <span>{tournament.location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-primary-btn" />
            <span>
              {formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-primary-btn" />
            <span>
              {tournament.participants} / {tournament.maxParticipants} participantes
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <Button variant="outline" size="sm" className="text-xs">
            Ver detalles
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Editar
          </Button>
        </div>
      </div>
    </Card>
  )
}

