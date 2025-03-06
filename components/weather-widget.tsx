"use client"

import { Cloud, CloudRain, Sun, Wind } from "lucide-react"

export function WeatherWidget() {
  // Datos de ejemplo para el clima
  const weatherData = {
    location: "Bogotá, Colombia",
    current: {
      temp: 18,
      condition: "Parcialmente nublado",
      icon: "cloudy",
      humidity: 65,
      wind: 12,
      feelsLike: 16,
    },
    forecast: [
      { day: "Hoy", temp: 18, icon: "cloudy" },
      { day: "Mañana", temp: 20, icon: "sunny" },
      { day: "Miércoles", temp: 17, icon: "rainy" },
      { day: "Jueves", temp: 19, icon: "windy" },
    ],
  }

  const getWeatherIcon = (icon) => {
    switch (icon) {
      case "sunny":
        return <Sun className="h-8 w-8 text-warning" />
      case "cloudy":
        return <Cloud className="h-8 w-8 text-secondary" />
      case "rainy":
        return <CloudRain className="h-8 w-8 text-secondary" />
      case "windy":
        return <Wind className="h-8 w-8 text-secondary" />
      default:
        return <Sun className="h-8 w-8 text-warning" />
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{weatherData.location}</h3>
          <p className="text-sm text-gray-500">{weatherData.current.condition}</p>
        </div>
        {getWeatherIcon(weatherData.current.icon)}
      </div>

      <div className="mt-4">
        <div className="text-4xl font-bold">{weatherData.current.temp}°C</div>
        <p className="text-sm text-gray-500">Sensación térmica: {weatherData.current.feelsLike}°C</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-gray-100 p-2 rounded">
          <p className="text-xs text-gray-500">Humedad</p>
          <p className="text-sm font-medium">{weatherData.current.humidity}%</p>
        </div>
        <div className="bg-gray-100 p-2 rounded">
          <p className="text-xs text-gray-500">Viento</p>
          <p className="text-sm font-medium">{weatherData.current.wind} km/h</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Pronóstico</h4>
        <div className="grid grid-cols-4 gap-2">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-xs">{day.day}</p>
              <div className="my-1">{getWeatherIcon(day.icon)}</div>
              <p className="text-sm font-medium">{day.temp}°</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-center text-gray-500">
        <p>Última actualización: Hoy, 14:30</p>
      </div>
    </div>
  )
}

