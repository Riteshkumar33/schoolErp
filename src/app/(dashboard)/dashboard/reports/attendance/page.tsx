"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Download, ClipboardCheck, UserX, Clock, TrendingUp } from "lucide-react"
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"

const monthlyAttendance = [
  { month: "Jul", rate: 93.1 }, { month: "Aug", rate: 94.5 }, { month: "Sep", rate: 92.8 },
  { month: "Oct", rate: 91.2 }, { month: "Nov", rate: 94.8 }, { month: "Dec", rate: 90.5 },
  { month: "Jan", rate: 93.2 }, { month: "Feb", rate: 95.1 }, { month: "Mar", rate: 94.0 },
  { month: "Apr", rate: 91.8 }, { month: "May", rate: 94.6 }, { month: "Jun", rate: 94.2 },
]

const classBreakdown = [
  { class: "1", present: 96, late: 2, absent: 2 },
  { class: "2", present: 95, late: 2, absent: 3 },
  { class: "3", present: 93, late: 3, absent: 4 },
  { class: "4", present: 94, late: 2, absent: 4 },
  { class: "5", present: 97, late: 1, absent: 2 },
  { class: "6", present: 92, late: 3, absent: 5 },
  { class: "7", present: 93, late: 3, absent: 4 },
  { class: "8", present: 94, late: 2, absent: 4 },
  { class: "9", present: 91, late: 3, absent: 6 },
  { class: "10", present: 94, late: 2, absent: 4 },
]

const chronicAbsentees = [
  { name: "Kabir Khan", class: "7-A", rate: 72, status: "Critical" },
  { name: "Rohan Das", class: "10-A", rate: 76, status: "Critical" },
  { name: "Vivaan Mehta", class: "6-B", rate: 78, status: "Warning" },
  { name: "Priya Patel", class: "9-A", rate: 80, status: "Warning" },
  { name: "Arjun Singh", class: "5-A", rate: 82, status: "Warning" },
  { name: "Diya Reddy", class: "8-A", rate: 83, status: "Watch" },
]

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function AttendanceReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Attendance Reports" description="Year-long attendance analytics and chronic absentee tracking.">
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Year Avg." value="93.4%" icon={ClipboardCheck} trend={{ value: 1.5, label: "vs last year" }} accentColor="text-emerald-500" />
        <StatCard title="Best Month" value="February" icon={TrendingUp} description="95.1% attendance" accentColor="text-blue-500" />
        <StatCard title="Chronic Absentees" value="6" icon={UserX} description="Below 85% rate" accentColor="text-red-500" />
        <StatCard title="Avg. Late/Day" value="25" icon={Clock} accentColor="text-amber-500" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Monthly Attendance Rate</CardTitle>
            <CardDescription>School-wide attendance percentage by month</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyAttendance}>
                  <defs>
                    <linearGradient id="attendGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(170, 55%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(170, 55%, 45%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis domain={[88, 98]} tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Area type="monotone" dataKey="rate" name="Rate %" stroke="hsl(170, 55%, 45%)" strokeWidth={2} fillOpacity={1} fill="url(#attendGrad2)" dot={{ r: 4 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Class-wise Breakdown</CardTitle>
            <CardDescription>Present / Late / Absent distribution per class</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classBreakdown} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="class" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" tickFormatter={(v) => `Cl.${v}`} />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Legend />
                  <Bar dataKey="present" name="Present %" fill="hsl(170, 55%, 45%)" stackId="a" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="late" name="Late %" fill="hsl(35, 90%, 55%)" stackId="a" />
                  <Bar dataKey="absent" name="Absent %" fill="hsl(0, 70%, 55%)" stackId="a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Chronic Absentees</CardTitle>
          <CardDescription>Students with attendance below 85% — requires immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Student</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Class</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Attendance</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Alert</th>
                </tr>
              </thead>
              <tbody>
                {chronicAbsentees.map((s) => (
                  <tr key={s.name} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{s.class}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${s.rate}%`, backgroundColor: s.rate < 75 ? "hsl(0,70%,55%)" : "hsl(35,90%,55%)" }} />
                        </div>
                        <span className="text-xs font-bold">{s.rate}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.status === "Critical" ? "bg-red-500/10 text-red-600" : s.status === "Warning" ? "bg-amber-500/10 text-amber-600" : "bg-blue-500/10 text-blue-600"}`}>
                        {s.status}
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
