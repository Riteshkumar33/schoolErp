"use client"

import React from "react"
import Link from "next/link"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import {
  Users,
  Briefcase,
  IndianRupee,
  ClipboardCheck,
  Wallet,
  CalendarRange,
  UserPlus,
  Bell,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Activity,
} from "lucide-react"
import {
  dashboardStats,
  attendanceTrend,
  feeCollectionTrend,
  enrollmentByClass,
  recentActivities,
} from "~/lib/mock-data"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const formatCurrency = (n: number) =>
  "₹" + (n >= 100000 ? (n / 100000).toFixed(1) + "L" : n.toLocaleString("en-IN"))

const activityIcons: Record<string, string> = {
  student: "👤",
  finance: "💰",
  attendance: "📋",
  exam: "📝",
  staff: "👨‍💼",
  admission: "🎓",
  communication: "📢",
  library: "📚",
}

const CHART_COLORS = ["hsl(250, 65%, 60%)", "hsl(170, 55%, 45%)", "hsl(35, 90%, 55%)", "hsl(210, 65%, 55%)"]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here&apos;s what&apos;s happening at your school today.
          </p>
        </div>
        <div className="flex gap-2 pt-2 sm:pt-0">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/reports/academic">
              <BookOpen className="mr-2 size-4" /> View Reports
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/dashboard/academics/admissions/inquiries">
              <UserPlus className="mr-2 size-4" /> New Admission
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={dashboardStats.totalStudents.toLocaleString()}
          icon={Users}
          trend={{ value: 5.2, label: "vs last year" }}
          accentColor="text-blue-500"
        />
        <StatCard
          title="Total Staff"
          value={dashboardStats.totalStaff.toString()}
          icon={Briefcase}
          trend={{ value: 2.1, label: "vs last year" }}
          accentColor="text-violet-500"
        />
        <StatCard
          title="Fees Collected"
          value={formatCurrency(dashboardStats.feesCollected)}
          icon={IndianRupee}
          trend={{ value: 8.3, label: "this month" }}
          accentColor="text-emerald-500"
        />
        <StatCard
          title="Attendance Rate"
          value={dashboardStats.attendanceRate + "%"}
          icon={ClipboardCheck}
          trend={{ value: 1.5, label: "vs last month" }}
          accentColor="text-amber-500"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Attendance Trend Chart */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Attendance Trend</CardTitle>
                <CardDescription>Monthly attendance rate (%)</CardDescription>
              </div>
              <TrendingUp className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={attendanceTrend}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(250, 65%, 60%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(250, 65%, 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis domain={[88, 96]} className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(250, 65%, 60%)"
                    fillOpacity={1}
                    fill="url(#colorRate)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Enrollment by Class */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Students by Class</CardTitle>
                <CardDescription>Current enrollment distribution</CardDescription>
              </div>
              <GraduationCap className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentByClass} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="class" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="students" fill="hsl(170, 55%, 45%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fee Collection + Quick Stats Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Fee Collection */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Fee Collection</CardTitle>
                <CardDescription>Monthly collected vs pending (₹)</CardDescription>
              </div>
              <Wallet className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={feeCollectionTrend} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="month" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                    formatter={(value: any) => [`₹${value?.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="collected" name="Collected" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" name="Pending" fill="hsl(35, 90%, 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Info Cards */}
        <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                <Wallet className="size-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fees Pending</p>
                <p className="text-xl font-bold">{formatCurrency(dashboardStats.feesPending)}</p>
                <p className="text-xs text-muted-foreground">from 48 students</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                <CalendarRange className="size-6 text-violet-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                <p className="text-xl font-bold">{dashboardStats.upcomingEvents}</p>
                <p className="text-xs text-muted-foreground">this week</p>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Bell className="size-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Inquiries</p>
                <p className="text-xl font-bold">{dashboardStats.newInquiries}</p>
                <p className="text-xs text-muted-foreground">admission leads</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Recent Activity</CardTitle>
              <CardDescription>Latest updates across all modules</CardDescription>
            </div>
            <Activity className="size-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((a) => (
              <div
                key={a.id}
                className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/30"
              >
                <span className="mt-0.5 text-lg">{activityIcons[a.type] || "📌"}</span>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium leading-none">{a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{a.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
