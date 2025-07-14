"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuSection } from "./menu-section"

interface MenuItem {
  id: string
  name: string
  price: string
  description?: string
}

interface MenuData {
  [key: string]: {
    title: string
    items: MenuItem[]
  }
}

interface SearchMenuProps {
  menuData: MenuData
}

export function SearchMenu({ menuData }: SearchMenuProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearchActive, setIsSearchActive] = useState(false)

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return null

    const results: { [key: string]: { title: string; items: MenuItem[] } } = {}

    Object.entries(menuData).forEach(([key, section]) => {
      const filteredItems = section.items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

      if (filteredItems.length > 0) {
        results[key] = {
          title: section.title,
          items: filteredItems,
        }
      }
    })

    return Object.keys(results).length > 0 ? results : {}
  }, [searchTerm, menuData])

  const clearSearch = () => {
    setSearchTerm("")
    setIsSearchActive(false)
  }

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Sök i menyn..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsSearchActive(e.target.value.length > 0)
            }}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
          />
          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {isSearchActive && (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          {filteredResults && Object.keys(filteredResults).length > 0 ? (
            <div className="space-y-8">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Sökresultat för "{searchTerm}"</h3>
                <p className="text-gray-600">
                  {Object.values(filteredResults).reduce((sum, section) => sum + section.items.length, 0)} rätter
                  hittades
                </p>
              </div>
              {Object.entries(filteredResults).map(([key, section]) => (
                <MenuSection key={key} title={section.title} items={section.items} />
              ))}
            </div>
          ) : searchTerm ? (
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inga resultat hittades</h3>
              <p className="text-gray-600">Försök med andra sökord eller bläddra i menyn nedan.</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
