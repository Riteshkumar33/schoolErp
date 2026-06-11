"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { StatusBadge } from "~/components/status-badge"
import { Download, Bus, Route, Users, Fuel } from "lucide-react"
import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

const routePerformance = [
  { route: "R-01", onTime: 92, delayed: 6, missed: 2 },
  { route: "R-02", onTime: 88, delayed: 8, missed: 4 },
  { route: "R-03", onTime: 95, delayed: 4, missed: 1 },
  { route: "R-04", onTime: 90, delayed: 7, missed: 3 },
  { route: "R-05", onTime: 85, delayed: 10, missed: 5 },
  { route: "R-06", onTime: 93, delayed: 5, missed: 2 },
]

const vehicles = [
  { no: "KA-01-AB-1234", type: "Bus", capacity: 50, assigned: 45, driver: "Ravi Kumar", status: "Active" },
  { no: "KA-01-CD-5678", type: "Bus", capacity: 50, assigned: 48, driver: "Suresh M.", status: "Active" },
  { no: "KA-01-EF-9012", type: "Van", capacity: 15, assigned: 12, driver: "Mohan L.", status: "Active" },
  { no: "KA-01-GH-3456", type: "Bus", capacity: 50, assigned: 42, driver: "Anil P.", status: "Maintenance" },
  { no: "KA-01-IJ-7890", type: "Van", capacity: 15, assigned: 14, driver: "Deepak S.", status: "Active" },
  { no: "KA-01-KL-1357", type: "Bus", capacity: 50, assigned: 47, driver: "Vinod K.", status: "Active" },
]

const fuelCost = [
  { month: "Jan", cost: 45000 }, { month: "Feb", cost: 42000 },
  { month: "Mar", cost: 48000 }, { month: "Apr", cost: 44000 },
  { month: "May", cost: 50000 }, { month: "Jun", cost: 46000 },
]

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function TransportReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Transport Reports" description="Fleet performance, route analytics, and cost tracking.">
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Vehicles" value="6" icon={Bus} accentColor="text-blue-500" />
        <StatCard title="Active Routes" value="6" icon={Route} accentColor="text-emerald-500" />
        <StatCard title="Students Transported" value="208" icon={Users} accentColor="text-violet-500" />
        <StatCard title="Monthly Fuel Cost" value="₹46K" icon={Fuel} accentColor="text-amber-500" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Route Punctuality</CardTitle>
            <CardDescription>On-time vs delayed vs missed trips per route</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={routePerformance} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="route" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Bar dataKey="onTime" name="On Time %" fill="hsl(170, 55%, 45%)" stackId="a" />
                  <Bar dataKey="delayed" name="Delayed %" fill="hsl(35, 90%, 55%)" stackId="a" />
                  <Bar dataKey="missed" name="Missed %" fill="hsl(0, 70%, 55%)" stackId="a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Fuel Cost</CardTitle>
            <CardDescription>Fuel expenditure trend</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fuelCost} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" tickFormatter={(v) => `₹${v / 1000}K`} />
                  <Tooltip contentStyle={tt} formatter={(v: number) => [`₹${v.toLocaleString("en-IN")}`, ""]} />
                  <Bar dataKey="cost" name="Fuel Cost" fill="hsl(250, 65%, 60%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Vehicle Fleet</CardTitle>
          <CardDescription>Current status of all school vehicles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Vehicle No.</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Driver</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Occupancy</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v) => (
                  <tr key={v.no} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs font-bold">{v.no}</td>
                    <td className="px-4 py-3">{v.type}</td>
                    <td className="px-4 py-3">{v.driver}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-violet-500" style={{ width: `${(v.assigned / v.capacity) * 100}%` }} />
                        </div>
                        <span className="text-xs font-medium">{v.assigned}/{v.capacity}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={v.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
