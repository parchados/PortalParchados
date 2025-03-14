"use client"

import { useState } from "react"
import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Reserva Confirmada",
      message: "La reserva de Fútbol 5 para hoy a las 18:00 ha sido confirmada.",
      time: "10 minutos",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "Reserva Cancelada",
      message: "La reserva de Tenis para mañana a las 10:00 ha sido cancelada por el usuario.",
      time: "30 minutos",
      type: "error",
      read: false,
    },
    {
      id: 3,
      title: "Alerta de Clima",
      message: "Posibles lluvias fuertes para esta tarde. Algunas canchas podrían verse afectadas.",
      time: "1 hora",
      type: "warning",
      read: false,
    },
    {
      id: 4,
      title: "Nuevo Usuario Registrado",
      message: "El usuario Laura Martínez se ha registrado en la plataforma.",
      time: "2 horas",
      type: "info",
      read: true,
    },
    {
      id: 5,
      title: "Mantenimiento Programado",
      message: "La cancha de Baloncesto 2 estará en mantenimiento el próximo lunes.",
      time: "3 horas",
      type: "warning",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />
      case "error":
        return <Bell className="h-5 w-5 text-error" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />
      case "info":
        return <Info className="h-5 w-5 text-secondary" />
      default:
        return <Bell className="h-5 w-5 text-secondary" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative p-2 rounded-full">
          <Bell className="h-5 w-5 text-highlight" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 bg-error rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notificaciones</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="text-xs h-7" onClick={markAllAsRead}>
              Marcar todas como leídas
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.length > 0 ? (
          <div className="max-h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`flex items-start p-3 cursor-pointer ${notification.read ? "opacity-70" : "bg-secondary/5"}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex-shrink-0 mt-0.5 mr-3">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">Hace {notification.time}</p>
                </div>
                {!notification.read && <div className="w-2 h-2 bg-primary-btn rounded-full mt-1"></div>}
              </DropdownMenuItem>
            ))}
          </div>
        ) : (
          <div className="py-6 text-center">
            <Bell className="h-8 w-8 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">No hay notificaciones</p>
          </div>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center">
          <Button variant="ghost" size="sm" className="w-full">
            Ver todas las notificaciones
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

