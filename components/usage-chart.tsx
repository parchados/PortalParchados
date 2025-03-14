"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function UsageChart() {
  // Datos de ejemplo para el uso de espacios deportivos
  const data = [
    { name: "Lunes", futbol: 85, tenis: 45, baloncesto: 60, voleibol: 30 },
    { name: "Martes", futbol: 70, tenis: 65, baloncesto: 45, voleibol: 25 },
    { name: "Miércoles", futbol: 90, tenis: 55, baloncesto: 75, voleibol: 40 },
    { name: "Jueves", futbol: 65, tenis: 70, baloncesto: 50, voleibol: 35 },
    { name: "Viernes", futbol: 95, tenis: 60, baloncesto: 80, voleibol: 45 },
    { name: "Sábado", futbol: 100, tenis: 90, baloncesto: 85, voleibol: 60 },
    { name: "Domingo", futbol: 75, tenis: 80, baloncesto: 70, voleibol: 50 },
  ]

  return (
    <div className="h-80">
      <ChartContainer
        config={{
          futbol: {
            label: "Fútbol",
            color: "hsl(212, 100%, 18%)", // #003F5C
          },
          tenis: {
            label: "Tenis",
            color: "hsl(221, 47%, 33%)", // #2F4B7C
          },
          baloncesto: {
            label: "Baloncesto",
            color: "hsl(39, 70%, 70%)", // #EAC67A
          },
          voleibol: {
            label: "Voleibol",
            color: "hsl(203, 52%, 76%)", // #A5C8E1
          },
        }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="futbol" fill="var(--color-futbol)" />
            <Bar dataKey="tenis" fill="var(--color-tenis)" />
            <Bar dataKey="baloncesto" fill="var(--color-baloncesto)" />
            <Bar dataKey="voleibol" fill="var(--color-voleibol)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

