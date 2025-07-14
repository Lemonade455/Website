"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const bestSellingData = [
  { name: "Kyckling med cashewnötter", value: 145, color: "#dc2626" },
  { name: "Nötkött med broccoli", value: 132, color: "#ea580c" },
  { name: "Räkor med curry", value: 98, color: "#d97706" },
  { name: "Fläsk med söttsur sås", value: 87, color: "#ca8a04" },
  { name: "Tofu med grönsaker", value: 76, color: "#65a30d" },
]

const monthlyEarnings = [
  { month: "Jan", earnings: 18500 },
  { month: "Feb", earnings: 22300 },
  { month: "Mar", earnings: 19800 },
  { month: "Apr", earnings: 25600 },
  { month: "Maj", earnings: 28900 },
  { month: "Jun", earnings: 31200 },
  { month: "Jul", earnings: 29800 },
  { month: "Aug", earnings: 33500 },
  { month: "Sep", earnings: 30200 },
  { month: "Okt", earnings: 35800 },
  { month: "Nov", earnings: 38200 },
  { month: "Dec", earnings: 42100 },
]

const dailyOrders = [
  { day: "Mån", orders: 45 },
  { day: "Tis", orders: 52 },
  { day: "Ons", orders: 48 },
  { day: "Tor", orders: 61 },
  { day: "Fre", orders: 78 },
  { day: "Lör", orders: 85 },
  { day: "Sön", orders: 67 },
]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Best Selling Items */}
        <Card>
          <CardHeader>
            <CardTitle>Bäst säljande rätter (senaste månaden)</CardTitle>
            <CardDescription>Antal beställningar per rätt</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bestSellingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {bestSellingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Daily Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Beställningar per dag</CardTitle>
            <CardDescription>Genomsnitt för senaste veckan</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyOrders}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Earnings */}
      <Card>
        <CardHeader>
          <CardTitle>Månadsintäkter 2024</CardTitle>
          <CardDescription>Intäkter i kronor per månad</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} kr`, "Intäkter"]} />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#dc2626" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Populäraste tiden</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">18:00 - 20:00</div>
            <p className="text-sm text-gray-600">35% av alla beställningar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Genomsnittlig leveranstid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">28 min</div>
            <p className="text-sm text-gray-600">2 min snabbare än förra månaden</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Kundnöjdhet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">4.7/5</div>
            <p className="text-sm text-gray-600">Baserat på 234 recensioner</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
