"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { ChevronLeft, Download, TrendingUp, TrendingDown, Users, Calendar } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const monthlyTrend = [
  { month: "Jan", rate: 93.1, students: 1250 },
  { month: "Feb", rate: 94.5, students: 1250 },
  { month: "Mar", rate: 92.8, students: 1248 },
  { month: "Apr", rate: 91.2, students: 1245 },
  { month: "May", rate: 94.8, students: 1250 },
  { month: "Jun", rate: 94.2, students: 1250 },
]

const dayWise = [
  { day: "Mon", rate: 95.6 },
  { day: "Tue", rate: 94.5 },
  { day: "Wed", rate: 96.0 },
  { day: "Thu", rate: 93.6 },
  { day: "Fri", rate: 91.2 },
  { day: "Sat", rate: 88.5 },
]

const statusBreakdown = [
  { name: "Present", value: 1178, color: "hsl(170, 55%, 45%)" },
  { name: "Absent", value: 47, color: "hsl(0, 70%, 55%)" },
  { name: "Late", value: 25, color: "hsl(35, 90%, 55%)" },
]

const classWiseData = [
  { class: "1", present: 96.2, absent: 2.5, late: 1.3 },
  { class: "2", present: 95.8, absent: 2.8, late: 1.4 },
  { class: "3", present: 93.5, absent: 4.5, late: 2.0 },
  { class: "4", present: 94.1, absent: 3.9, late: 2.0 },
  { class: "5", present: 97.0, absent: 2.0, late: 1.0 },
  { class: "6", present: 92.3, absent: 5.2, late: 2.5 },
  { class: "7", present: 93.8, absent: 4.2, late: 2.0 },
  { class: "8", present: 94.5, absent: 3.5, late: 2.0 },
  { class: "9", present: 91.2, absent: 6.3, late: 2.5 },
  { class: "10", present: 94.2, absent: 3.8, late: 2.0 },
]

const lowAttendanceStudents = [
  { name: "Kabir Khan", class: "7-A", rate: 72, totalDays: 120, present: 86 },
  { name: "Rohan Das", class: "10-A", rate: 76, totalDays: 120, present: 91 },
  { name: "Vivaan Mehta", class: "6-B", rate: 78, totalDays: 120, present: 94 },
  { name: "Priya Patel", class: "9-A", rate: 80, totalDays: 120, present: 96 },
  { name: "Arjun Singh", class: "5-A", rate: 82, totalDays: 120, present: 98 },
  { name: "Diya Reddy", class: "8-A", rate: 83, totalDays: 120, present: 100 },
  { name: "Meera Nair", class: "4-B", rate: 84, totalDays: 120, present: 101 },
  { name: "Saanvi Joshi", class: "3-A", rate: 85, totalDays: 120, present: 102 },
]

const tooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
}

export default function AttendanceReportsPage() {
  const [dateRange, setDateRange] = React.useState({
    from: "2026-01-01",
    to: "2026-06-11",
  })

  return (
    <div className="space-y-6">
      <PageHeader title="Attendance Reports" description="Comprehensive analytics on student attendance patterns.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/attendance">
            <ChevronLeft className="mr-1 size-4" /> Back
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" /> Export Report
        </Button>
      </PageHeader>

      {/* Date Range Filter */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">From</label>
          <Input
            type="date"
            value={dateRange.from}
            onChange={(e) => setDateRange((p) => ({ ...p, from: e.target.value }))}
            className="h-9 w-auto"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">To</label>
          <Input
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange((p) => ({ ...p, to: e.target.value }))}
            className="h-9 w-auto"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Avg. Attendance</p>
                <p className="mt-1 text-2xl font-bold">94.2%</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <TrendingUp className="size-5 text-emerald-500" />
              </div>
            </div>
            <p className="mt-2 text-xs text-emerald-500 font-medium">↑ 1.5% from last term</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Avg. Daily Absent</p>
                <p className="mt-1 text-2xl font-bold">47</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-red-500/10">
                <TrendingDown className="size-5 text-red-500" />
              </div>
            </div>
            <p className="mt-2 text-xs text-red-500 font-medium">↑ 5 more than last term</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Best Day</p>
                <p className="mt-1 text-2xl font-bold">Wednesday</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10">
                <Calendar className="size-5 text-blue-500" />
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">96.0% avg attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Below 85%</p>
                <p className="mt-1 text-2xl font-bold">8 students</p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
                <Users className="size-5 text-amber-500" />
              </div>
            </div>
            <p className="mt-2 text-xs text-amber-500 font-medium">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Monthly Trend */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Attendance Trend</CardTitle>
            <CardDescription>Average attendance rate per month</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrend}>
                  <defs>
                    <linearGradient id="attendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(250, 65%, 60%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(250, 65%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis domain={[88, 98]} className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(250, 65%, 60%)"
                    fillOpacity={1}
                    fill="url(#attendGrad)"
                    strokeWidth={2}
                    name="Attendance %"
                    dot={{ r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Today's Breakdown Pie */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Today&apos;s Breakdown</CardTitle>
            <CardDescription>Present vs Absent vs Late</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusBreakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={55}
                    paddingAngle={4}
                    label={({ name, value }: { name: string; value: number }) => `${name}: ${value}`}
                  >
                    {statusBreakdown.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Day-wise Pattern */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Day-wise Attendance Pattern</CardTitle>
            <CardDescription>Average attendance rate by day of week</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dayWise} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="day" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis domain={[85, 100]} className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="rate" name="Attendance %" fill="hsl(170, 55%, 45%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Class-wise Comparison */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Class-wise Comparison</CardTitle>
            <CardDescription>Attendance breakdown per class</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classWiseData} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="class" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `Cl.${v}`} />
                  <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Legend />
                  <Bar dataKey="present" name="Present %" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} stackId="a" />
                  <Bar dataKey="late" name="Late %" fill="hsl(35, 90%, 55%)" radius={[0, 0, 0, 0]} stackId="a" />
                  <Bar dataKey="absent" name="Absent %" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Low Attendance Students */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Students Below 85% Attendance</CardTitle>
          <CardDescription>These students require intervention. Sorted by attendance rate (lowest first).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Student</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Class</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Present</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Total Days</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Rate</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {lowAttendanceStudents.map((s) => (
                  <tr key={s.name} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-500">
                          {s.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="font-medium">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{s.class}</td>
                    <td className="px-4 py-3 text-center font-mono">{s.present}</td>
                    <td className="px-4 py-3 text-center font-mono">{s.totalDays}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${s.rate}%`,
                              backgroundColor: s.rate < 75 ? "hsl(0, 70%, 55%)" : s.rate < 85 ? "hsl(35, 90%, 55%)" : "hsl(170, 55%, 45%)",
                            }}
                          />
                        </div>
                        <span className={cn("text-xs font-bold", s.rate < 75 ? "text-red-500" : "text-amber-500")}>{s.rate}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                          s.rate < 75 ? "bg-red-500/10 text-red-600" : "bg-amber-500/10 text-amber-600"
                        )}
                      >
                        {s.rate < 75 ? "Critical" : "Warning"}
                      </span>
                    </td>
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
