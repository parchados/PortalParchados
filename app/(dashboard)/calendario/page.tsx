import { Card } from "@/components/ui/card"
import { WeeklyCalendar } from "@/components/weekly-calendar"

export default function CalendarPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-highlight">Calendario de Reservas</h1>
          <p className="text-text-color mt-1">Vista detallada de reservas y eventos deportivos</p>
        </div>
      </div>

      <Card className="parchados-card">
        <div className="p-4">
          <WeeklyCalendar />
        </div>
      </Card>
    </div>
  )
}

