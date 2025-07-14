"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import type { CartItem } from "@/contexts/cart-context"

interface CheckoutFormProps {
  items: CartItem[]
  total: number
  onBack: () => void
}

export function CheckoutForm({ items, total, onBack }: CheckoutFormProps) {
  const [orderType, setOrderType] = useState<"takeaway" | "delivery">("takeaway")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  })

  const deliveryFee = orderType === "delivery" ? 49 : 0
  const finalTotal = total + deliveryFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const orderNum = Math.random().toString(36).substr(2, 9).toUpperCase()
    setOrderNumber(orderNum)
    setOrderComplete(true)
    setIsSubmitting(false)
  }

  if (orderComplete) {
    return (
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Beställning Mottagen!</h3>
        <p className="text-gray-600 mb-4">Tack för din beställning. Vi har skickat en bekräftelse till din e-post.</p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="font-semibold">Ordernummer: {orderNumber}</p>
          <p className="text-sm text-gray-600 mt-1">
            {orderType === "takeaway" ? "Hämtning om ca 20-30 minuter" : "Leverans om ca 45-60 minuter"}
          </p>
        </div>
        <Button onClick={() => window.location.reload()} className="w-full">
          Stäng
        </Button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Tillbaka till Varukorg
      </Button>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Type */}
        <div>
          <h3 className="font-semibold mb-3">Välj leveranssätt</h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setOrderType("takeaway")}
              className={`p-3 rounded-lg border text-center ${
                orderType === "takeaway"
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">Hämta</div>
              <div className="text-sm text-gray-600">Gratis</div>
            </button>
            <button
              type="button"
              onClick={() => setOrderType("delivery")}
              className={`p-3 rounded-lg border text-center ${
                orderType === "delivery"
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium">Hemleverans</div>
              <div className="text-sm text-gray-600">49kr</div>
            </button>
          </div>
        </div>

        {/* Customer Info */}
        <div>
          <h3 className="font-semibold mb-3">Kontaktuppgifter</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Namn *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <input
              type="tel"
              placeholder="Telefonnummer *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <input
              type="email"
              placeholder="E-post"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        {/* Delivery Address */}
        {orderType === "delivery" && (
          <div>
            <h3 className="font-semibold mb-3">Leveransadress</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Adress *"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Stad *"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <input
                  type="text"
                  placeholder="Postnummer *"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Special Instructions */}
        <div>
          <h3 className="font-semibold mb-3">Särskilda önskemål</h3>
          <textarea
            placeholder="T.ex. allergier, extra stark, portalkod..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold mb-3">Ordersammanfattning</h3>
          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.quantity}x {item.name} ({item.size})
                </span>
                <span>{item.price * item.quantity}kr</span>
              </div>
            ))}
            {deliveryFee > 0 && (
              <div className="flex justify-between">
                <span>Leveransavgift</span>
                <span>{deliveryFee}kr</span>
              </div>
            )}
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Totalt</span>
              <span>{finalTotal}kr</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700">
          {isSubmitting ? "Skickar beställning..." : `Beställ för ${finalTotal}kr`}
        </Button>
      </form>
    </div>
  )
}
