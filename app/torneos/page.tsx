import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TournamentsList } from "@/components/tournaments-list"

export default function TournamentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Torneos y Eventos</h1>
          <p className="text-highlight mt-1">Gestiona los torneos y eventos deportivos</p>
        </div>

        <Button>Crear Torneo</Button>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <TournamentsList />
        </div>
      </Card>
    </div>
  )
}

