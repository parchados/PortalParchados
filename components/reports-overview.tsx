"use client"

import { useState } from "react"
import { Download, Calendar, BarChart3, PieChart, TrendingUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReservationsChart } from "@/components/reports/reservations-chart"
import { RevenueChart } from "@/components/reports/revenue-chart"
import { SportDistributionChart } from "@/components/reports/sport-distribution-chart"
import { UserGrowthChart } from "@/components/reports/user-growth-chart"

export function ReportsOverview() {
  const [selectedYear, setSelectedYear] = useState("2023")
  const [selectedMonth, setSelectedMonth] = useState("6") // Junio

  const months = [
    { value: "1", label: "Enero" },
    { value: "2", label: "Febrero" },
    { value: "3", label: "Marzo" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Mayo" },
    { value: "6", label: "Junio" },
    { value: "7", label: "Julio" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ]

  const years = ["2023", "2022", "2021"]

  const handleDownloadReport = () => {
    alert(`Descargando reporte para ${months.find((m) => m.value === selectedMonth).label} de ${selectedYear}`)
    // Aquí iría la lógica para descargar el reporte
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-xl font-display font-bold text-highlight">Estadísticas y Métricas</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Seleccionar mes" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Seleccionar año" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleDownloadReport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Descargar Reporte
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Resumen</span>
          </TabsTrigger>
          <TabsTrigger value="reservations" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Reservas</span>
          </TabsTrigger>
          <TabsTrigger value="revenue" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Ingresos</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Usuarios</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-4">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Reservas por Día</h3>
              <div className="h-80">
                <ReservationsChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Ingresos Mensuales</h3>
              <div className="h-80">
                <RevenueChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Distribución por Deporte</h3>
              <div className="h-80">
                <SportDistributionChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Crecimiento de Usuarios</h3>
              <div className="h-80">
                <UserGrowthChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-display font-semibold text-highlight">Reportes Disponibles</h3>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar Todo
              </Button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Reporte de Reservas", icon: Calendar, description: "Detalles de todas las reservas del mes" },
                { name: "Reporte de Ingresos", icon: TrendingUp, description: "Ingresos y transacciones financieras" },
                { name: "Reporte de Usuarios", icon: PieChart, description: "Estadísticas de usuarios y registros" },
                { name: "Reporte de Ocupación", icon: BarChart3, description: "Tasas de ocupación de instalaciones" },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-secondary/10 mr-4">
                      <report.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{report.name}</h4>
                      <p className="text-sm text-gray-500">{report.description}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Descargar
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reservations" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-display font-semibold text-highlight mb-4">Reservas por Día</h3>
            <div className="h-96">
              <ReservationsChart month={selectedMonth} year={selectedYear} />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-display font-semibold text-highlight mb-4">Ingresos Mensuales</h3>
            <div className="h-96">
              <RevenueChart month={selectedMonth} year={selectedYear} />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Distribución por Deporte</h3>
              <div className="h-80">
                <SportDistributionChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-display font-semibold text-highlight mb-4">Crecimiento de Usuarios</h3>
              <div className="h-80">
                <UserGrowthChart month={selectedMonth} year={selectedYear} />
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

