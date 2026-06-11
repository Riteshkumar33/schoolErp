"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { cn } from "~/lib/utils"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const students = [
  "Aarav Sharma", "Priya Patel", "Rahul Verma", "Ananya Gupta", "Arjun Singh",
  "Diya Reddy", "Kabir Khan", "Meera Nair", "Rohan Das", "Saanvi Joshi",
  "Vivaan Mehta", "Ishita Banerjee",
]

// Generate random attendance for the current month
const generateMonthData = () => {
  const data: Record<string, Record<number, "P" | "A" | "L" | "H">> = {}
  students.forEach((s) => {
    data[s] = {}
    for (let d = 1; d <= 28; d++) {
      const dayOfWeek = new Date(2026, 5, d).getDay()
      if (dayOfWeek === 0) {
        data[s][d] = "H" // Sunday
      } else {
        const rand = Math.random()
        data[s][d] = rand > 0.12 ? "P" : rand > 0.05 ? "A" : "L"
      }
    }
  })
  return data
}

const monthData = generateMonthData()

const cellColor: Record<string, string> = {
  P: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  A: "bg-red-500/15 text-red-600 dark:text-red-400",
  L: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  H: "bg-zinc-500/10 text-zinc-400",
}

export default function StudentAttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Student Attendance"
        description="Monthly attendance overview for Class 10-A — June 2026"
      />

      <div className="flex gap-4 text-xs">
        <span className="flex items-center gap-1.5"><span className="inline-block size-3 rounded bg-emerald-500/20" /> Present</span>
        <span className="flex items-center gap-1.5"><span className="inline-block size-3 rounded bg-red-500/20" /> Absent</span>
        <span className="flex items-center gap-1.5"><span className="inline-block size-3 rounded bg-amber-500/20" /> Late</span>
        <span className="flex items-center gap-1.5"><span className="inline-block size-3 rounded bg-zinc-500/10" /> Holiday</span>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="sticky left-0 z-10 bg-muted/40 px-4 py-3 text-left font-medium">Student</th>
                  {Array.from({ length: 28 }, (_, i) => (
                    <th key={i} className="px-2 py-3 text-center font-medium min-w-[32px]">{i + 1}</th>
                  ))}
                  <th className="px-3 py-3 text-center font-medium">%</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  const data = monthData[student]
                  const total = Object.values(data).filter(v => v !== "H").length
                  const present = Object.values(data).filter(v => v === "P").length
                  const pct = Math.round((present / total) * 100)
                  return (
                    <tr key={student} className="border-b last:border-0 hover:bg-muted/20">
                      <td className="sticky left-0 z-10 bg-card px-4 py-2 font-medium whitespace-nowrap">{student}</td>
                      {Array.from({ length: 28 }, (_, i) => {
                        const status = data[i + 1]
                        return (
                          <td key={i} className="px-0.5 py-1 text-center">
                            <span className={cn("inline-flex size-6 items-center justify-center rounded text-[10px] font-bold", cellColor[status])}>
                              {status}
                            </span>
                          </td>
                        )
                      })}
                      <td className={cn("px-3 py-2 text-center font-bold", pct >= 90 ? "text-emerald-500" : pct >= 75 ? "text-amber-500" : "text-red-500")}>
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
