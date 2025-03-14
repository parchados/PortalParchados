"use client"

import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

export function SportDistributionChart({ month, year }) {
  // Datos de ejemplo para distribución por deporte
  const data = [
    { name: "Fútbol", value: 45 },
    { name: "Tenis", value: 20 },
    { name: "Baloncesto", value: 15 },
    { name: "Voleibol", value: 10 },
    { name: "Otros", value: 10 },
  ]

  const COLORS = ["#D67D20", "#00857C", "#933023", "#234930", "#8884d8"]

  return (
    <ChartContainer
      config={{
        futbol: {
          label: "Fútbol",
          color: "#D67D20",
        },
        tenis: {
          label: "Tenis",
          color: "#00857C",
        },
        baloncesto: {
          label: "Baloncesto",
          color: "#933023",
        },
        voleibol: {
          label: "Voleibol",
          color: "#234930",
        },
        otros: {
          label: "Otros",
          color: "#8884d8",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

