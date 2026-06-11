"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Download, IndianRupee, TrendingUp, AlertCircle, Wallet } from "lucide-react"
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"

const monthlyRevenue = [
  { month: "Jul", collected: 820000, pending: 180000 },
  { month: "Aug", collected: 780000, pending: 220000 },
  { month: "Sep", collected: 850000, pending: 150000 },
  { month: "Oct", collected: 900000, pending: 100000 },
  { month: "Nov", collected: 760000, pending: 240000 },
  { month: "Dec", collected: 830000, pending: 170000 },
  { month: "Jan", collected: 870000, pending: 130000 },
  { month: "Feb", collected: 910000, pending: 90000 },
  { month: "Mar", collected: 880000, pending: 120000 },
  { month: "Apr", collected: 840000, pending: 160000 },
  { month: "May", collected: 920000, pending: 80000 },
  { month: "Jun", collected: 860000, pending: 140000 },
]

const feeBreakdown = [
  { name: "Tuition", value: 6200000, color: "hsl(250, 65%, 60%)" },
  { name: "Transport", value: 1800000, color: "hsl(170, 55%, 45%)" },
  { name: "Library", value: 450000, color: "hsl(35, 90%, 55%)" },
  { name: "Lab", value: 680000, color: "hsl(340, 65%, 55%)" },
  { name: "Sports", value: 320000, color: "hsl(210, 65%, 55%)" },
  { name: "Other", value: 550000, color: "hsl(0, 0%, 60%)" },
]

const expenseCategories = [
  { category: "Salaries", amount: 4500000, pct: 45 },
  { category: "Infrastructure", amount: 1200000, pct: 12 },
  { category: "Transport", amount: 800000, pct: 8 },
  { category: "Utilities", amount: 600000, pct: 6 },
  { category: "Supplies", amount: 500000, pct: 5 },
  { category: "Technology", amount: 400000, pct: 4 },
  { category: "Events", amount: 300000, pct: 3 },
  { category: "Miscellaneous", amount: 700000, pct: 7 },
]

const fmt = (n: number) => n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${n.toLocaleString("en-IN")}`
const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function FinanceReportsPage() {
  const totalCollected = monthlyRevenue.reduce((s, m) => s + m.collected, 0)
  const totalPending = monthlyRevenue.reduce((s, m) => s + m.pending, 0)
  const recoveryRate = Math.round((totalCollected / (totalCollected + totalPending)) * 100 * 10) / 10

  return (
    <div className="space-y-6">
      <PageHeader title="Finance Reports" description="Revenue analytics, fee collection trends, and expense breakdown.">
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Collected" value={fmt(totalCollected)} icon={IndianRupee} trend={{ value: 8.3, label: "vs last year" }} accentColor="text-emerald-500" />
        <StatCard title="Total Pending" value={fmt(totalPending)} icon={AlertCircle} accentColor="text-red-500" />
        <StatCard title="Recovery Rate" value={`${recoveryRate}%`} icon={TrendingUp} accentColor="text-blue-500" />
        <StatCard title="Avg. Monthly" value={fmt(Math.round(totalCollected / 12))} icon={Wallet} accentColor="text-violet-500" />
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Collection vs Pending</CardTitle>
            <CardDescription>Fee collection trend over the academic year</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`} />
                  <Tooltip contentStyle={tt} formatter={(v: number) => [fmt(v), ""]} />
                  <Legend />
                  <Bar dataKey="collected" name="Collected" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" name="Pending" fill="hsl(35, 90%, 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Revenue by Fee Type</CardTitle>
            <CardDescription>Breakdown of fee categories</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={feeBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={95} innerRadius={55} paddingAngle={3} label={({ name, value }: any) => `${name}: ${fmt(value)}`}>
                    {feeBreakdown.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={tt} formatter={(v: number) => [fmt(v), ""]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Expense Breakdown</CardTitle>
          <CardDescription>Expenditure by category with visual proportions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {expenseCategories.map((e) => (
              <div key={e.category} className="flex items-center gap-4">
                <span className="w-28 text-sm font-medium shrink-0">{e.category}</span>
                <div className="flex-1 h-6 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all" style={{ width: `${e.pct * 2}%` }} />
                </div>
                <span className="w-20 text-sm font-bold text-right">{fmt(e.amount)}</span>
                <span className="w-10 text-xs text-muted-foreground text-right">{e.pct}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
