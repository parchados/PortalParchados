"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ReservationsChart({ month, year }) {
  // Datos de ejemplo para reservas por día
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }

  const generateDailyData = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year)
    const data = []

    for (let day = 1; day <= daysInMonth; day++) {
      // Generar datos aleatorios para el ejemplo
      const futbol = Math.floor(Math.random() * 15) + 5
      const tenis = Math.floor(Math.random() * 10) + 3
      const baloncesto = Math.floor(Math.random() * 8) + 2
      const otros = Math.floor(Math.random() * 5) + 1

      data.push({
        day: day,
        futbol,
        tenis,
        baloncesto,
        otros,
        total: futbol + tenis + baloncesto + otros,
      })
    }

    return data
  }

  const data = generateDailyData(month, year)

  return (
    <ChartContainer
      config={{
        futbol: {
          label: "Fútbol",
          color: "hsl(var(--chart-1, 214, 90%, 52%))",
        },
        tenis: {
          label: "Tenis",
          color: "hsl(var(--chart-2, 120, 100%, 30%))",
        },
        baloncesto: {
          label: "Baloncesto",
          color: "hsl(var(--chart-3, 30, 100%, 50%))",
        },
        otros: {
          label: "Otros",
          color: "hsl(var(--chart-4, 271, 100%, 50%))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="futbol" fill="var(--color-futbol)" stackId="a" />
          <Bar dataKey="tenis" fill="var(--color-tenis)" stackId="a" />
          <Bar dataKey="baloncesto" fill="var(--color-baloncesto)" stackId="a" />
          <Bar dataKey="otros" fill="var(--color-otros)" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

