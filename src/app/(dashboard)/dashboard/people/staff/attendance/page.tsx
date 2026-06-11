"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent } from "~/components/ui/card"
import { cn } from "~/lib/utils"
import { staffMembers } from "~/lib/mock-data"
import { Users, UserCheck, UserX, Clock, CalendarDays } from "lucide-react"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const staffForAttendance = staffMembers.slice(0, 12)

type StaffStatus = "P" | "A" | "L" | "WFH" | "H"

// Generate random monthly attendance for staff
const generateStaffMonthData = () => {
  const data: Record<string, Record<number, StaffStatus>> = {}
  staffForAttendance.forEach((s) => {
    data[s.id] = {}
    for (let d = 1; d <= 28; d++) {
      const dayOfWeek = new Date(2026, 5, d).getDay()
      if (dayOfWeek === 0) {
        data[s.id][d] = "H"
      } else {
        const rand = Math.random()
        data[s.id][d] = rand > 0.15 ? "P" : rand > 0.08 ? "WFH" : rand > 0.04 ? "L" : "A"
      }
    }
  })
  return data
}

const monthData = generateStaffMonthData()

const cellColor: Record<string, string> = {
  P: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  A: "bg-red-500/15 text-red-600 dark:text-red-400",
  L: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  WFH: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  H: "bg-zinc-500/10 text-zinc-400",
}

const cellLabel: Record<string, string> = {
  P: "Present",
  A: "Absent",
  L: "Late",
  WFH: "WFH",
  H: "Holiday",
}

// Calculate stats
const allStatuses = Object.values(monthData).flatMap((d) => Object.values(d))
const workingDays = allStatuses.filter((s) => s !== "H").length
const presentDays = allStatuses.filter((s) => s === "P" || s === "WFH").length
const absentDays = allStatuses.filter((s) => s === "A").length
const lateDays = allStatuses.filter((s) => s === "L").length
const avgRate = workingDays > 0 ? Math.round((presentDays / workingDays) * 100 * 10) / 10 : 0

export default function StaffAttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Staff Attendance"
        description="Monthly attendance overview for all staff — June 2026"
      />

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Staff" value={staffForAttendance.length} icon={Users} accentColor="text-blue-500" />
        <StatCard title="Avg. Attendance" value={`${avgRate}%`} icon={UserCheck} accentColor="text-emerald-500" />
        <StatCard title="Total Absent Days" value={absentDays} icon={UserX} accentColor="text-red-500" />
        <StatCard title="Late Arrivals" value={lateDays} icon={Clock} accentColor="text-amber-500" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-3 rounded bg-emerald-500/20" /> Present
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-3 rounded bg-red-500/20" /> Absent
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-3 rounded bg-amber-500/20" /> Late
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-3 rounded bg-blue-500/20" /> Work From Home
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block size-3 rounded bg-zinc-500/10" /> Holiday
        </span>
      </div>

      {/* Heatmap Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="sticky left-0 z-10 bg-muted/40 px-4 py-3 text-left font-medium min-w-[180px]">Staff</th>
                  {Array.from({ length: 28 }, (_, i) => (
                    <th key={i} className="px-1 py-3 text-center font-medium min-w-[30px]">
                      {i + 1}
                    </th>
                  ))}
                  <th className="px-3 py-3 text-center font-medium sticky right-0 bg-muted/40">%</th>
                </tr>
              </thead>
              <tbody>
                {staffForAttendance.map((staff) => {
                  const data = monthData[staff.id]
                  const working = Object.values(data).filter((v) => v !== "H").length
                  const present = Object.values(data).filter((v) => v === "P" || v === "WFH").length
                  const pct = working > 0 ? Math.round((present / working) * 100) : 0
                  return (
                    <tr key={staff.id} className="border-b last:border-0 hover:bg-muted/20">
                      <td className="sticky left-0 z-10 bg-card px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-full bg-violet-500/10 text-[10px] font-bold text-violet-500">
                            {staff.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-medium whitespace-nowrap text-xs">{staff.name}</p>
                            <p className="text-[10px] text-muted-foreground">{staff.designation}</p>
                          </div>
                        </div>
                      </td>
                      {Array.from({ length: 28 }, (_, i) => {
                        const status = data[i + 1]
                        return (
                          <td key={i} className="px-0.5 py-1 text-center">
                            <span
                              className={cn(
                                "inline-flex size-6 items-center justify-center rounded text-[9px] font-bold cursor-default",
                                cellColor[status]
                              )}
                              title={`Day ${i + 1}: ${cellLabel[status]}`}
                            >
                              {status}
                            </span>
                          </td>
                        )
                      })}
                      <td
                        className={cn(
                          "px-3 py-2 text-center font-bold sticky right-0 bg-card",
                          pct >= 90 ? "text-emerald-500" : pct >= 80 ? "text-amber-500" : "text-red-500"
                        )}
                      >
                        {pct}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
