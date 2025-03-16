import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-accent">Configuración</h1>
          <p className="text-highlight mt-1">Administra la configuración de la plataforma</p>
        </div>

        <Button>Guardar Cambios</Button>
      </div>

      <Card className="parchados-card">
        <div className="p-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
              <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
              <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Configuración General</h2>
                <p className="text-gray-600">Configura los ajustes generales de la plataforma.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre de la Plataforma</label>
                    <input type="text" className="w-full p-2 border rounded-md" defaultValue="Parchados" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Zona Horaria</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>America/Bogota</option>
                      <option>America/Mexico_City</option>
                      <option>America/New_York</option>
                    </select>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notificaciones" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Configuración de Notificaciones</h2>
                <p className="text-gray-600">Configura cómo se envían las notificaciones.</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notificaciones por Email</h3>
                      <p className="text-sm text-gray-500">Enviar notificaciones por correo electrónico</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-200 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notificaciones Push</h3>
                      <p className="text-sm text-gray-500">Enviar notificaciones push al navegador</p>
                    </div>
                    <div className="h-6 w-11 bg-primary-btn rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="seguridad" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Configuración de Seguridad</h2>
                <p className="text-gray-600">Configura los ajustes de seguridad de la plataforma.</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Cambiar Contraseña</label>
                    <input type="password" className="w-full p-2 border rounded-md" placeholder="Contraseña actual" />
                    <input type="password" className="w-full p-2 border rounded-md" placeholder="Nueva contraseña" />
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Confirmar nueva contraseña"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="avanzado" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Configuración Avanzada</h2>
                <p className="text-gray-600">Configura ajustes avanzados de la plataforma.</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Modo Mantenimiento</h3>
                      <p className="text-sm text-gray-500">Activar modo mantenimiento</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-200 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Depuración</h3>
                      <p className="text-sm text-gray-500">Activar modo de depuración</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-200 rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}

