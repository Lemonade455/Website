"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Save, Plus, Trash2 } from "lucide-react"

// Mock menu data for editing
const initialMenuData = {
  dagensLunch: {
    title: "Dagens Lunch",
    items: [
      { id: "dl1", name: "Kyckling med cashewnötter + ris", price: "89kr / 79kr" },
      { id: "dl2", name: "Nötkött med broccoli + ris", price: "95kr / 85kr" },
    ],
  },
  forratter: {
    title: "Förrätter",
    items: [
      { id: "f1", name: "Grönsakssoppa", price: "68kr / 62kr" },
      { id: "f2", name: "Kyckling & champinjonsoppa", price: "82kr / 72kr" },
    ],
  },
}

export function MenuEditor() {
  const [menuData, setMenuData] = useState(initialMenuData)
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ name: "", price: "" })

  const startEdit = (sectionKey: string, itemId: string) => {
    const section = menuData[sectionKey as keyof typeof menuData]
    const item = section.items.find((i) => i.id === itemId)
    if (item) {
      setEditForm({ name: item.name, price: item.price })
      setEditingItem(`${sectionKey}-${itemId}`)
    }
  }

  const saveEdit = (sectionKey: string, itemId: string) => {
    setMenuData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey as keyof typeof prev],
        items: prev[sectionKey as keyof typeof prev].items.map((item) =>
          item.id === itemId ? { ...item, name: editForm.name, price: editForm.price } : item,
        ),
      },
    }))
    setEditingItem(null)
    setEditForm({ name: "", price: "" })
  }

  const addNewItem = (sectionKey: string) => {
    const newId = `new-${Date.now()}`
    setMenuData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey as keyof typeof prev],
        items: [...prev[sectionKey as keyof typeof prev].items, { id: newId, name: "Ny rätt", price: "0kr / 0kr" }],
      },
    }))
    startEdit(sectionKey, newId)
  }

  const deleteItem = (sectionKey: string, itemId: string) => {
    setMenuData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey as keyof typeof prev],
        items: prev[sectionKey as keyof typeof prev].items.filter((item) => item.id !== itemId),
      },
    }))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Meny Editor</CardTitle>
          <CardDescription>Redigera menyn enkelt genom att klicka på rätterna nedan</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="dagensLunch" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dagensLunch">Dagens Lunch</TabsTrigger>
          <TabsTrigger value="forratter">Förrätter</TabsTrigger>
        </TabsList>

        {Object.entries(menuData).map(([sectionKey, section]) => (
          <TabsContent key={sectionKey} value={sectionKey}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.items.length} rätter</CardDescription>
                </div>
                <Button onClick={() => addNewItem(sectionKey)} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Lägg till rätt
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.items.map((item) => {
                    const isEditing = editingItem === `${sectionKey}-${item.id}`
                    return (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        {isEditing ? (
                          <div className="flex-1 grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor={`name-${item.id}`}>Namn</Label>
                              <Input
                                id={`name-${item.id}`}
                                value={editForm.name}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`price-${item.id}`}>Pris</Label>
                              <Input
                                id={`price-${item.id}`}
                                value={editForm.price}
                                onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                                placeholder="ex: 165kr / 145kr"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.price}</p>
                          </div>
                        )}

                        <div className="flex items-center space-x-2">
                          {isEditing ? (
                            <>
                              <Button size="sm" onClick={() => saveEdit(sectionKey, item.id)}>
                                <Save className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingItem(null)}>
                                Avbryt
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button size="sm" variant="outline" onClick={() => startEdit(sectionKey, item.id)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteItem(sectionKey, item.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
