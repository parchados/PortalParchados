import { Card } from "@/components/ui/card"
import { ReportsOverview } from "@/components/reports-overview"

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Reportes y Estadísticas</h1>
          <p className="text-highlight mt-1">Visualiza y descarga reportes de la plataforma</p>
        </div>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <ReportsOverview />
        </div>
      </Card>
    </div>
  )
}

