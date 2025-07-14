"use client"

import { useState } from "react"
import { Menu, X, Phone, MapPin, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "./cart-sidebar"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { state, dispatch } = useCart()
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const navigation = [
    { name: "Start", href: "#" },
    { name: "Dagens Lunch", href: "#lunch" },
    { name: "Meny", href: "#meny" },
    { name: "Specialerbjudande", href: "#erbjudanden" },
    { name: "Bilder", href: "#bilder" },
    { name: "Kontakt & Info", href: "#kontakt" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">Mora China</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            {/* Cart Button */}
            <Button variant="ghost" size="sm" onClick={() => dispatch({ type: "TOGGLE_CART" })} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>0250-123 45</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Mora</span>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  dispatch({ type: "TOGGLE_CART" })
                  setIsMenuOpen(false)
                }}
                className="mx-4 mb-2 relative justify-start"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Varukorg
                {totalItems > 0 && (
                  <span className="ml-auto bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              <div className="px-4 py-2 border-t border-gray-200 mt-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>0250-123 45</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Mora, Sverige</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <CartSidebar />
      </div>
    </header>
  )
}
