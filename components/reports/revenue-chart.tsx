"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function RevenueChart({ month, year }) {
  // Datos de ejemplo para ingresos por día
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }

  const generateDailyData = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year)
    const data = []

    let cumulativeRevenue = 0

    for (let day = 1; day <= daysInMonth; day++) {
      // Generar datos aleatorios para el ejemplo
      const dailyRevenue = Math.floor(Math.random() * 500000) + 100000
      cumulativeRevenue += dailyRevenue

      data.push({
        day: day,
        ingresos: dailyRevenue,
        acumulado: cumulativeRevenue,
      })
    }

    return data
  }

  const data = generateDailyData(month, year)

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value)
  }

  return (
    <ChartContainer
      config={{
        ingresos: {
          label: "Ingresos Diarios",
          color: "hsl(var(--chart-1, 214, 90%, 52%))",
        },
        acumulado: {
          label: "Ingresos Acumulados",
          color: "hsl(var(--chart-2, 120, 100%, 30%))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" tickFormatter={(value) => formatCurrency(value).replace("COP", "")} />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => formatCurrency(value).replace("COP", "")}
          />
          <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(value)} />} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="ingresos" stroke="var(--color-ingresos)" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="acumulado" stroke="var(--color-acumulado)" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

