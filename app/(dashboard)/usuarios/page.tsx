import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsersList } from "@/components/users-list"

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Gestión de Usuarios</h1>
          <p className="text-highlight mt-1">Administra los usuarios registrados en la plataforma</p>
        </div>

        <Button>Agregar Usuario</Button>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <UsersList />
        </div>
      </Card>
    </div>
  )
}

