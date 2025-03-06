import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReservationList } from "@/components/reservation-list"

export default function ReservationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Gestión de Reservas</h1>
          <p className="text-highlight mt-1">Administra las reservas de espacios deportivos</p>
        </div>

        <Button>Nueva Reserva</Button>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <ReservationList />
        </div>
      </Card>
    </div>
  )
}

