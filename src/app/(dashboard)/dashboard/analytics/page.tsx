"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import {
  attendanceTrend,
  feeCollectionTrend,
  enrollmentByClass,
  genderDistribution,
} from "~/lib/mock-data"
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"

const COLORS = ["hsl(250, 65%, 60%)", "hsl(340, 65%, 55%)", "hsl(170, 55%, 45%)", "hsl(35, 90%, 55%)"]

const monthlyEnrollment = [
  { month: "Jan", enrolled: 15, withdrawn: 2 },
  { month: "Feb", enrolled: 12, withdrawn: 1 },
  { month: "Mar", enrolled: 20, withdrawn: 3 },
  { month: "Apr", enrolled: 45, withdrawn: 2 },
  { month: "May", enrolled: 30, withdrawn: 4 },
  { month: "Jun", enrolled: 18, withdrawn: 1 },
]

const gradeDistribution = [
  { grade: "A+", count: 85 },
  { grade: "A", count: 145 },
  { grade: "B+", count: 210 },
  { grade: "B", count: 340 },
  { grade: "C+", count: 230 },
  { grade: "C", count: 150 },
  { grade: "D", count: 60 },
  { grade: "F", count: 30 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="In-depth data analysis across academics, finance, and operations."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Avg. Attendance</p>
            <p className="mt-1 text-2xl font-bold">94.2%</p>
            <p className="text-xs text-emerald-500 font-medium">↑ 1.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Student-Teacher Ratio</p>
            <p className="mt-1 text-2xl font-bold">15:1</p>
            <p className="text-xs text-muted-foreground">Optimal range</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Pass Rate</p>
            <p className="mt-1 text-2xl font-bold">96.4%</p>
            <p className="text-xs text-emerald-500 font-medium">↑ 2.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Fee Recovery</p>
            <p className="mt-1 text-2xl font-bold">89.4%</p>
            <p className="text-xs text-amber-500 font-medium">₹4.5L pending</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Enrollment Trend */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Enrollment Trend</CardTitle>
            <CardDescription>New enrollments vs withdrawals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyEnrollment}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} />
                  <Legend />
                  <Line type="monotone" dataKey="enrolled" stroke="hsl(170, 55%, 45%)" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="withdrawn" stroke="hsl(0, 70%, 55%)" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Grade Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Grade Distribution</CardTitle>
            <CardDescription>Overall grade breakdown — last exam</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gradeDistribution} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="grade" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} />
                  <Bar dataKey="count" fill="hsl(250, 65%, 60%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Gender Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Gender Distribution</CardTitle>
            <CardDescription>Current student body composition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderDistribution}
                    dataKey="count"
                    nameKey="gender"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    paddingAngle={4}
                    label={({ name, value }: any) => `${name}: ${value}`}
                  >
                    {genderDistribution.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fee Collection Trend */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Fee Collection Analytics</CardTitle>
            <CardDescription>Monthly collected vs pending amount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={feeCollectionTrend}>
                  <defs>
                    <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(170, 55%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(170, 55%, 45%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(35, 90%, 55%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(35, 90%, 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', fontSize: '12px' }} formatter={(value: any) => [`₹${value?.toLocaleString()}`, '']} />
                  <Legend />
                  <Area type="monotone" dataKey="collected" stroke="hsl(170, 55%, 45%)" fillOpacity={1} fill="url(#colorCollected)" strokeWidth={2} />
                  <Area type="monotone" dataKey="pending" stroke="hsl(35, 90%, 55%)" fillOpacity={1} fill="url(#colorPending)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
