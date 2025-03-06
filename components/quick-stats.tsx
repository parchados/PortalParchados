"use client"

import { Users, Calendar, MapPin, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

export function QuickStats() {
  const stats = [
    {
      title: "Usuarios Activos",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "bg-secondary",
    },
    {
      title: "Reservas Hoy",
      value: "48",
      change: "+8.2%",
      icon: Calendar,
      color: "bg-primary-btn",
    },
    {
      title: "Centros Deportivos",
      value: "32",
      change: "+2",
      icon: MapPin,
      color: "bg-highlight",
    },
    {
      title: "Torneos Activos",
      value: "7",
      change: "+1",
      icon: Trophy,
      color: "bg-accent",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="parchados-card">
          <div className="p-6 flex items-start justify-between">
            <div>
              <p className="text-highlight text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-display font-bold mt-2">{stat.value}</p>
              <p className="text-xs mt-1 text-secondary font-medium">{stat.change} vs. mes anterior</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-light-bg" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

