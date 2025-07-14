"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { CheckoutForm } from "./checkout-form"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => dispatch({ type: "CLOSE_CART" })} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Din Beställning ({totalItems})
          </h2>
          <Button variant="ghost" size="sm" onClick={() => dispatch({ type: "CLOSE_CART" })}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {showCheckout ? (
            <CheckoutForm items={state.items} total={totalPrice} onBack={() => setShowCheckout(false)} />
          ) : (
            <>
              {state.items.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Din varukorg är tom</p>
                  <p className="text-sm mt-2">Lägg till rätter från menyn för att börja beställa</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600 capitalize">
                            {item.size === "normal" ? "Pris" : "Takeaway pris"}
                          </p>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-semibold">{item.price * item.quantity}kr</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && !showCheckout && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Totalt:</span>
              <span>{totalPrice}kr</span>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => setShowCheckout(true)}>
              Gå till Kassan
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              Töm Varukorg
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
