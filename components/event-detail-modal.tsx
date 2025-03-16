"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Info } from "lucide-react"

interface EventDetailModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    id: string
    title: string
    start: Date
    end: Date
    location?: string
    type: string
    description?: string
  }
}

export function EventDetailModal({ isOpen, onClose, event }: EventDetailModalProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">{formatDate(event.start)}</p>
              <p className="text-sm text-gray-600">
                {formatTime(event.start)} - {formatTime(event.end)}
              </p>
            </div>
          </div>

          {event.location && (
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <p>{event.location}</p>
            </div>
          )}

          {event.description && (
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-gray-500 mt-0.5" />
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
          <Button>Editar Reserva</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

