import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SportsCenterList } from "@/components/sports-center-list"

export default function SportsCentersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Gestión de Centros Deportivos</h1>
          <p className="text-highlight mt-1">Administra los centros deportivos y sus instalaciones</p>
        </div>

        <Button>Agregar Centro Deportivo</Button>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <SportsCenterList />
        </div>
      </Card>
    </div>
  )
}

