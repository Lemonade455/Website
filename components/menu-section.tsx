"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"

interface MenuItem {
  id: string
  name: string
  price: string
  description?: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  const { dispatch } = useCart()
  const [addingItems, setAddingItems] = useState<Set<string>>(new Set())

  const parsePrice = (priceString: string) => {
    // Parse "165kr / 145kr" format - normal price / takeaway price
    const prices = priceString.split(" / ").map((p) => Number.parseInt(p.replace("kr", "")))
    return { normal: prices[0], takeaway: prices[1] || prices[0] }
  }

  const addToCart = async (item: MenuItem, size: "takeaway" | "normal") => {
    const prices = parsePrice(item.price)
    const price = prices[size]

    setAddingItems((prev) => new Set(prev).add(`${item.id}-${size}`))

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: `${item.id}-${size}`,
        name: item.name,
        price,
        size,
        category: title,
      },
    })

    // Show feedback
    setTimeout(() => {
      setAddingItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(`${item.id}-${size}`)
        return newSet
      })
    }, 500)

    dispatch({ type: "OPEN_CART" })
  }

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-red-600 text-white px-6 py-4">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="p-6">
        <div className="grid gap-4">
          {items.map((item, index) => {
            const prices = parsePrice(item.price)
            return (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                    {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {prices.takeaway && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Takeaway pris: {prices.takeaway}kr</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(item, "takeaway")}
                          disabled={addingItems.has(`${item.id}-takeaway`)}
                          className="h-8 px-2"
                        >
                          {addingItems.has(`${item.id}-takeaway`) ? (
                            "Tillagd!"
                          ) : (
                            <>
                              <Plus className="h-3 w-3 mr-1" />
                              Lägg till
                            </>
                          )}
                        </Button>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Pris: {prices.normal}kr</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCart(item, "normal")}
                        disabled={addingItems.has(`${item.id}-normal`)}
                        className="h-8 px-2"
                      >
                        {addingItems.has(`${item.id}-normal`) ? (
                          "Tillagd!"
                        ) : (
                          <>
                            <Plus className="h-3 w-3 mr-1" />
                            Lägg till
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
