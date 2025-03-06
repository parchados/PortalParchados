"use client"

import { Bell, Calendar, AlertTriangle, CheckCircle } from "lucide-react"

export function NotificationPanel() {
  // Datos de ejemplo para notificaciones
  const notifications = [
    {
      id: 1,
      title: "Reserva Confirmada",
      message: "La reserva de Fútbol 5 para hoy a las 18:00 ha sido confirmada.",
      time: "10 minutos",
      type: "success",
    },
    {
      id: 2,
      title: "Reserva Cancelada",
      message: "La reserva de Tenis para mañana a las 10:00 ha sido cancelada por el usuario.",
      time: "30 minutos",
      type: "error",
    },
    {
      id: 3,
      title: "Alerta de Clima",
      message: "Posibles lluvias fuertes para esta tarde. Algunas canchas podrían verse afectadas.",
      time: "1 hora",
      type: "warning",
    },
    {
      id: 4,
      title: "Nuevo Usuario Registrado",
      message: "El usuario Laura Martínez se ha registrado en la plataforma.",
      time: "2 horas",
      type: "info",
    },
    {
      id: 5,
      title: "Mantenimiento Programado",
      message: "La cancha de Baloncesto 2 estará en mantenimiento el próximo lunes.",
      time: "3 horas",
      type: "warning",
    },
  ]

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />
      case "error":
        return <Bell className="h-5 w-5 text-error" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />
      case "info":
        return <Calendar className="h-5 w-5 text-secondary" />
      default:
        return <Bell className="h-5 w-5 text-secondary" />
    }
  }

  const getNotificationBorder = (type) => {
    switch (type) {
      case "success":
        return "border-l-success"
      case "error":
        return "border-l-error"
      case "warning":
        return "border-l-warning"
      case "info":
        return "border-l-secondary"
      default:
        return "border-l-gray-300"
    }
  }

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-3 bg-white rounded-lg border-l-4 ${getNotificationBorder(notification.type)} shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">{getNotificationIcon(notification.type)}</div>
            <div className="ml-3 flex-1">
              <h4 className="text-sm font-medium text-highlight">{notification.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">Hace {notification.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

