import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { UsageChart } from "@/components/usage-chart"
import { RecentUsers } from "@/components/recent-users"
import { NotificationPanel } from "@/components/notification-panel"
import { WeatherWidget } from "@/components/weather-widget"
import { QuickStats } from "@/components/quick-stats"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />

      <QuickStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="parchados-card lg:col-span-2">
          <div className="p-6">
            <h2 className="parchados-heading text-xl mb-4">Uso de Espacios Deportivos</h2>
            <UsageChart />
          </div>
        </Card>

        <Card className="parchados-card">
          <div className="p-6">
            <h2 className="parchados-heading text-xl mb-4">Notificaciones</h2>
            <NotificationPanel />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="parchados-card lg:col-span-2">
          <div className="p-6">
            <h2 className="parchados-heading text-xl mb-4">Usuarios Recientes</h2>
            <RecentUsers />
          </div>
        </Card>

        <Card className="parchados-card">
          <div className="p-6">
            <h2 className="parchados-heading text-xl mb-4">Clima</h2>
            <WeatherWidget />
          </div>
        </Card>
      </div>
    </div>
  )
}

