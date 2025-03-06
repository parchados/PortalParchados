"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReservationCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Datos de ejemplo para reservas
  const reservations = [
    { day: 5, status: "confirmed", title: "Fútbol 5 - Cancha 2", time: "18:00 - 19:30" },
    { day: 8, status: "pending", title: "Tenis - Cancha 1", time: "10:00 - 11:30" },
    { day: 12, status: "cancelled", title: "Baloncesto - Cancha 3", time: "16:00 - 17:30" },
    { day: 15, status: "confirmed", title: "Fútbol 7 - Cancha 1", time: "19:00 - 20:30" },
    { day: 18, status: "confirmed", title: "Voleibol - Cancha 4", time: "17:00 - 18:30" },
    { day: 22, status: "pending", title: "Tenis - Cancha 2", time: "09:00 - 10:30" },
    { day: 25, status: "confirmed", title: "Fútbol 5 - Cancha 3", time: "20:00 - 21:30" },
  ]

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

  const monthName = currentMonth.toLocaleString("es-ES", { month: "long" })
  const year = currentMonth.getFullYear()

  const days = []
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  // Agregar días vacíos para alinear con el día de la semana
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50/50"></div>)
  }

  // Agregar los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    const dayReservations = reservations.filter((r) => r.day === day)

    days.push(
      <div key={day} className="h-24 border border-gray-200 p-1 relative">
        <div className="text-sm font-medium">{day}</div>
        <div className="mt-1 space-y-1">
          {dayReservations.map((reservation, idx) => (
            <div
              key={idx}
              className={`${getStatusColor(reservation.status)} text-white text-xs p-1 rounded truncate`}
              title={`${reservation.title} - ${reservation.time}`}
            >
              {reservation.title}
            </div>
          ))}
        </div>
      </div>,
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold capitalize">
          {monthName} {year}
        </h3>
        <div className="flex space-x-2">
          <Button onClick={prevMonth} variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={nextMonth} variant="outline" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px">
        {dayNames.map((day) => (
          <div key={day} className="text-center py-2 font-medium text-sm bg-secondary text-light-bg">
            {day}
          </div>
        ))}
        {days}
      </div>

      <div className="mt-4 flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
          <span className="text-xs">Confirmada</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
          <span className="text-xs">Pendiente</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-error mr-2"></div>
          <span className="text-xs">Cancelada</span>
        </div>
      </div>
    </div>
  )
}

