"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Download, Users, Briefcase, Clock, TrendingUp } from "lucide-react"
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"

const departmentBreakdown = [
  { dept: "Teaching", count: 45, male: 18, female: 27 },
  { dept: "Admin", count: 12, male: 5, female: 7 },
  { dept: "IT", count: 5, male: 4, female: 1 },
  { dept: "Accounts", count: 4, male: 2, female: 2 },
  { dept: "Support", count: 15, male: 10, female: 5 },
  { dept: "Transport", count: 8, male: 7, female: 1 },
  { dept: "Library", count: 3, male: 1, female: 2 },
]

const leaveData = [
  { month: "Jan", sick: 12, casual: 8, earned: 3 },
  { month: "Feb", sick: 8, casual: 10, earned: 5 },
  { month: "Mar", sick: 15, casual: 6, earned: 2 },
  { month: "Apr", sick: 10, casual: 12, earned: 4 },
  { month: "May", sick: 7, casual: 9, earned: 6 },
  { month: "Jun", sick: 11, casual: 7, earned: 3 },
]

const salaryDistribution = [
  { name: "₹20K–30K", value: 18, color: "hsl(210, 65%, 55%)" },
  { name: "₹30K–50K", value: 35, color: "hsl(250, 65%, 60%)" },
  { name: "₹50K–75K", value: 25, color: "hsl(170, 55%, 45%)" },
  { name: "₹75K–1L", value: 10, color: "hsl(35, 90%, 55%)" },
  { name: "₹1L+", value: 4, color: "hsl(340, 65%, 55%)" },
]

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function HRReportsPage() {
  const totalStaff = departmentBreakdown.reduce((s, d) => s + d.count, 0)

  return (
    <div className="space-y-6">
      <PageHeader title="HR Reports" description="Staff analytics, department distribution, leave trends, and payroll overview.">
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Staff" value={totalStaff} icon={Users} accentColor="text-blue-500" />
        <StatCard title="Departments" value="7" icon={Briefcase} accentColor="text-violet-500" />
        <StatCard title="Avg. Attendance" value="94.8%" icon={Clock} trend={{ value: 1.2, label: "vs last year" }} accentColor="text-emerald-500" />
        <StatCard title="Retention Rate" value="96%" icon={TrendingUp} accentColor="text-amber-500" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Staff by Department</CardTitle>
            <CardDescription>Gender breakdown per department</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentBreakdown} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="dept" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Legend />
                  <Bar dataKey="male" name="Male" fill="hsl(210, 65%, 55%)" radius={[0, 0, 0, 0]} stackId="a" />
                  <Bar dataKey="female" name="Female" fill="hsl(340, 65%, 55%)" radius={[4, 4, 0, 0]} stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Salary Distribution</CardTitle>
            <CardDescription>Staff count by salary bracket</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={salaryDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={95} innerRadius={55} paddingAngle={3} label={({ name, value }: any) => `${name}: ${value}`}>
                    {salaryDistribution.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={tt} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Leave Trend</CardTitle>
            <CardDescription>Monthly leave distribution by type</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leaveData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Legend />
                  <Bar dataKey="sick" name="Sick Leave" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="casual" name="Casual Leave" fill="hsl(35, 90%, 55%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="earned" name="Earned Leave" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
