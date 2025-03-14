"use client"

import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function UserGrowthChart({ month, year }) {
  // Datos de ejemplo para crecimiento de usuarios
  const generateMonthlyData = () => {
    const data = []
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

    let totalUsers = 500 // Usuarios iniciales
    let premiumUsers = 50 // Usuarios premium iniciales

    for (let i = 0; i < 12; i++) {
      const newUsers = Math.floor(Math.random() * 100) + 50
      const newPremiumUsers = Math.floor(Math.random() * 30) + 10

      totalUsers += newUsers
      premiumUsers += newPremiumUsers

      data.push({
        name: months[i],
        total: totalUsers,
        premium: premiumUsers,
        nuevos: newUsers,
      })
    }

    return data
  }

  const data = generateMonthlyData()

  return (
    <ChartContainer
      config={{
        total: {
          label: "Usuarios Totales",
          color: "hsl(var(--chart-1, 214, 90%, 52%))",
        },
        premium: {
          label: "Usuarios Premium",
          color: "hsl(var(--chart-2, 120, 100%, 30%))",
        },
        nuevos: {
          label: "Nuevos Usuarios",
          color: "hsl(var(--chart-3, 30, 100%, 50%))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="total"
            stackId="1"
            stroke="var(--color-total)"
            fill="var(--color-total)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="premium"
            stackId="2"
            stroke="var(--color-premium)"
            fill="var(--color-premium)"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="nuevos"
            stackId="3"
            stroke="var(--color-nuevos)"
            fill="var(--color-nuevos)"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

