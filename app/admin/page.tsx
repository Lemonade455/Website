"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Chrome } from "lucide-react"

export default function AdminPage() {
  const { user, isLoading, signInWithGoogle } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-red-600">Mora China Admin</CardTitle>
            <CardDescription>Logga in för att komma åt adminpanelen</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={signInWithGoogle} className="w-full bg-red-600 hover:bg-red-700" size="lg">
              <Chrome className="mr-2 h-5 w-5" />
              Logga in med Google
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <AdminDashboard />
}
