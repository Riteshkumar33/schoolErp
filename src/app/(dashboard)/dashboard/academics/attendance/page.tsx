"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import {
  ClipboardCheck,
  ClipboardList,
  Plane,
  FileBarChart,
  Users,
  TrendingUp,
  ArrowRight,
  Clock,
  UserX,
  CalendarDays,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const todayStats = {
  totalStudents: 1250,
  present: 1178,
  absent: 47,
  late: 25,
  onLeave: 12,
  attendanceRate: 94.2,
}

const weeklyData = [
  { day: "Mon", present: 1195, absent: 35, late: 20 },
  { day: "Tue", present: 1182, absent: 48, late: 20 },
  { day: "Wed", present: 1200, absent: 30, late: 20 },
  { day: "Thu", present: 1170, absent: 55, late: 25 },
  { day: "Fri", present: 1178, absent: 47, late: 25 },
]

const classWise = [
  { class: "1-A", rate: 96.2 },
  { class: "2-A", rate: 95.8 },
  { class: "3-A", rate: 93.5 },
  { class: "4-A", rate: 94.1 },
  { class: "5-A", rate: 97.0 },
  { class: "6-A", rate: 92.3 },
  { class: "7-A", rate: 93.8 },
  { class: "8-A", rate: 94.5 },
  { class: "9-A", rate: 91.2 },
  { class: "10-A", rate: 94.2 },
]

const recentAbsentees = [
  { name: "Rohan Das", class: "10-A", days: 3, reason: "Fever" },
  { name: "Ananya Gupta", class: "8-B", days: 2, reason: "Family event" },
  { name: "Kabir Khan", class: "7-A", days: 5, reason: "Medical leave" },
  { name: "Diya Reddy", class: "9-A", days: 1, reason: "Not specified" },
  { name: "Vivaan Mehta", class: "6-B", days: 4, reason: "Travel" },
]

const pendingLeaveRequests = 8

export default function AttendanceOverviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Attendance"
        description="Monitor attendance across all classes. Today's snapshot and weekly trends."
      >
        <Button size="sm" asChild>
          <Link href="/dashboard/academics/attendance/mark">
            <ClipboardCheck className="mr-2 size-4" /> Mark Attendance
          </Link>
        </Button>
      </PageHeader>

      {/* KPI Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Students"
          value={todayStats.totalStudents.toLocaleString()}
          icon={Users}
          accentColor="text-blue-500"
        />
        <StatCard
          title="Present Today"
          value={todayStats.present.toLocaleString()}
          icon={ClipboardCheck}
          accentColor="text-emerald-500"
          trend={{ value: 1.2, label: "vs yesterday" }}
        />
        <StatCard
          title="Absent Today"
          value={todayStats.absent.toString()}
          icon={UserX}
          accentColor="text-red-500"
        />
        <StatCard
          title="Late Arrivals"
          value={todayStats.late.toString()}
          icon={Clock}
          accentColor="text-amber-500"
        />
        <StatCard
          title="On Leave"
          value={todayStats.onLeave.toString()}
          icon={Plane}
          accentColor="text-violet-500"
          description={`${pendingLeaveRequests} pending requests`}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Weekly Trend */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">This Week&apos;s Attendance</CardTitle>
                <CardDescription>Daily breakdown — Present vs Absent vs Late</CardDescription>
              </div>
              <TrendingUp className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="day" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="present" name="Present" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} stackId="a" />
                  <Bar dataKey="late" name="Late" fill="hsl(35, 90%, 55%)" radius={[0, 0, 0, 0]} stackId="a" />
                  <Bar dataKey="absent" name="Absent" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Class-wise Rates */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Class-wise Attendance</CardTitle>
                <CardDescription>Today&apos;s attendance rate per class</CardDescription>
              </div>
              <CalendarDays className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
              {classWise.map((c) => (
                <div key={c.class} className="flex items-center gap-3">
                  <span className="w-12 text-xs font-semibold shrink-0">Class {c.class}</span>
                  <div className="flex-1 h-5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${c.rate}%`,
                        backgroundColor:
                          c.rate >= 95
                            ? "hsl(170, 55%, 45%)"
                            : c.rate >= 90
                              ? "hsl(35, 90%, 55%)"
                              : "hsl(0, 70%, 55%)",
                      }}
                    />
                  </div>
                  <span className="w-12 text-xs font-bold text-right">{c.rate}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom row — Absentees + Quick Actions */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Frequent Absentees */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Frequent Absentees</CardTitle>
                <CardDescription>Students absent 2+ days this week</CardDescription>
              </div>
              <UserX className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAbsentees.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-500">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{s.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Class {s.class} • {s.reason}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-500">
                    {s.days} day{s.days > 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href="/dashboard/academics/attendance/mark">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-emerald-500/10">
                    <ClipboardCheck className="size-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Mark Attendance</p>
                    <p className="text-xs text-muted-foreground">Record today&apos;s attendance for a class</p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href="/dashboard/academics/attendance/reports">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-blue-500/10">
                    <FileBarChart className="size-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Attendance Reports</p>
                    <p className="text-xs text-muted-foreground">View detailed analytics and trends</p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>

          <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href="/dashboard/academics/attendance/leave-requests">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-violet-500/10">
                    <Plane className="size-5 text-violet-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Leave Requests</p>
                    <p className="text-xs text-muted-foreground">
                      {pendingLeaveRequests} requests pending approval
                    </p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
