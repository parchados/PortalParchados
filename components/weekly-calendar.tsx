"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Plus, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Event {
  id: string
  title: string
  start: Date
  end: Date
  location?: string
  type: "futbol" | "tenis" | "baloncesto" | "voleibol" | "otro"
  description?: string
}

export function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>(generateSampleEvents())
  const [selectedView, setSelectedView] = useState<"week" | "day">("week")
  const containerRef = useRef<HTMLDivElement>(null)

  // Configuración de la cuadrícula de tiempo
  const hourHeight = 60 // Altura en píxeles para cada hora
  const startHour = 6 // Hora de inicio (6 AM)
  const endHour = 22 // Hora de fin (10 PM)
  const totalHours = endHour - startHour

  // Obtener el primer día de la semana actual (domingo)
  const getWeekStart = (date: Date) => {
    const start = new Date(date)
    start.setDate(date.getDate() - date.getDay())
    return start
  }

  // Generar días de la semana
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(getWeekStart(currentDate))
    date.setDate(date.getDate() + i)
    return date
  })

  // Generar horas del día
  const hours = Array.from({ length: totalHours }, (_, i) => {
    const hour = startHour + i
    return `${hour}:00`
  })

  // Navegar a la semana anterior/siguiente
  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7))
    setCurrentDate(newDate)
  }

  // Formatear fecha para el encabezado
  const formatDate = (date: Date) => {
    const dayNames = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"]
    const day = date.getDate()
    const month = date.toLocaleString("es-ES", { month: "short" })

    return `${dayNames[date.getDay()]}, ${day} ${month}`
  }

  // Obtener el color según el tipo de evento
  const getEventColor = (type: Event["type"]) => {
    switch (type) {
      case "futbol":
        return "bg-primary-btn text-light-bg"
      case "tenis":
        return "bg-secondary text-light-bg"
      case "baloncesto":
        return "bg-accent text-text-color"
      case "voleibol":
        return "bg-detail-color text-text-color"
      default:
        return "bg-highlight text-light-bg"
    }
  }

  // Calcular la posición y altura del evento en la cuadrícula
  const getEventStyle = (event: Event) => {
    const startHourDecimal = event.start.getHours() + event.start.getMinutes() / 60
    const endHourDecimal = event.end.getHours() + event.end.getMinutes() / 60
    const top = (startHourDecimal - startHour) * hourHeight
    const height = (endHourDecimal - startHourDecimal) * hourHeight
    const dayIndex = event.start.getDay()

    return {
      top: `${top}px`,
      height: `${height}px`,
      left: `calc(${(dayIndex * 100) / 7}% + 1px)`,
      width: `calc(${100 / 7}% - 2px)`,
    }
  }

  // Formatear hora para mostrar en eventos
  const formatEventTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  return (
    <div className="flex flex-col h-[800px]">
      {/* Controles del calendario */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("prev")}
            className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("next")}
            className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <span className="text-lg font-semibold ml-2">
            {new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(currentDate)}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Select value={selectedView} onValueChange={(value: "week" | "day") => setSelectedView(value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Semana" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Semana</SelectItem>
              <SelectItem value="day">Día</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2 bg-primary-btn">
            <Plus className="h-4 w-4" />
            Nueva Reserva
          </Button>
        </div>
      </div>

      {/* Cabecera del calendario */}
      <div className="grid grid-cols-8 border-b border-gray-200">
        <div className="sticky left-0 w-16"></div>
        {weekDays.map((date, i) => (
          <div
            key={i}
            className={cn("text-center py-2", date.toDateString() === new Date().toDateString() && "bg-accent/10")}
          >
            <div className="text-sm font-medium">{formatDate(date)}</div>
          </div>
        ))}
      </div>

      {/* Contenedor del calendario */}
      <div className="flex-1 overflow-y-auto" ref={containerRef}>
        <div className="relative grid grid-cols-8 h-full" style={{ height: `${totalHours * hourHeight}px` }}>
          {/* Columna de horas */}
          <div className="sticky left-0 w-16 bg-light-bg z-10">
            {hours.map((hour, i) => (
              <div key={i} className="border-b border-r border-gray-200 text-xs" style={{ height: `${hourHeight}px` }}>
                <span className="absolute -top-2 right-2 text-gray-500">{hour}</span>
              </div>
            ))}
          </div>

          {/* Cuadrícula y eventos */}
          <div className="col-span-7 relative">
            {/* Líneas horizontales de la cuadrícula */}
            {hours.map((_, i) => (
              <div key={i} className="border-b border-gray-200" style={{ height: `${hourHeight}px` }} />
            ))}

            {/* Líneas verticales de la cuadrícula */}
            <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-r border-gray-200 h-full" />
              ))}
            </div>

            {/* Eventos */}
            {events.map((event) => (
              <div
                key={event.id}
                className={cn(
                  "absolute rounded-md p-2 overflow-hidden cursor-pointer transition-opacity hover:opacity-90",
                  getEventColor(event.type),
                )}
                style={getEventStyle(event)}
              >
                <div className="text-sm font-semibold truncate">{event.title}</div>
                {event.location && (
                  <div className="text-xs truncate flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1 inline-block" />
                    {event.location}
                  </div>
                )}
                <div className="text-xs mt-1">
                  {formatEventTime(event.start)} - {formatEventTime(event.end)}
                </div>
              </div>
            ))}

            {/* Línea de hora actual */}
            <div
              className="absolute left-0 right-0 border-t-2 border-primary-btn z-10"
              style={{
                top: `${(new Date().getHours() - startHour + new Date().getMinutes() / 60) * hourHeight}px`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Función auxiliar para generar eventos de ejemplo
function generateSampleEvents(): Event[] {
  const today = new Date()
  const weekStart = new Date(today)
  weekStart.setDate(today.getDate() - today.getDay())

  return [
    {
      id: "1",
      title: "Fútbol 5 - Partido",
      start: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 1, 9, 0),
      end: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 1, 11, 0),
      location: "Cancha 2",
      type: "futbol",
      description: "Partido amistoso de fútbol 5",
    },
    {
      id: "2",
      title: "Tenis - Cancha 1",
      start: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 2, 14, 0),
      end: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 2, 16, 0),
      location: "Cancha 1",
      type: "tenis",
      description: "Clase de tenis",
    },
    {
      id: "3",
      title: "Baloncesto - Torneo",
      start: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 3, 16, 0),
      end: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 3, 18, 0),
      location: "Cancha Principal",
      type: "baloncesto",
      description: "Torneo interno de baloncesto",
    },
    {
      id: "4",
      title: "Voleibol - Entrenamiento",
      start: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 4, 10, 0),
      end: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 4, 12, 0),
      location: "Cancha 3",
      type: "voleibol",
      description: "Entrenamiento del equipo de voleibol",
    },
    {
      id: "5",
      title: "Fútbol 7 - Torneo",
      start: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 5, 15, 0),
      end: new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 5, 17, 0),
      location: "Campo Principal",
      type: "futbol",
      description: "Torneo empresarial de fútbol 7",
    },
  ]
}

