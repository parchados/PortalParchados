import type React from "react"
import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
})

export const metadata = {
  title: "Parchados - Dashboard de Administración",
  description: "Panel de administración para la plataforma Parchados",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <div className="flex h-screen bg-light-bg">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'