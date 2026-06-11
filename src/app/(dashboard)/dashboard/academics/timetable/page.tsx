"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { cn } from "~/lib/utils"
import { timetable10A } from "~/lib/mock-data"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const periods = [1, 2, 3, 4, 5, 6]

const subjectColors: Record<string, string> = {
  "Mathematics": "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
  "English": "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  "Physics": "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
  "Chemistry": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Biology": "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20",
  "Hindi": "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  "Social Science": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
  "Computer Science": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
  "Art & Craft": "bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-500/20",
  "Physical Education": "bg-lime-500/10 text-lime-700 dark:text-lime-300 border-lime-500/20",
  "Physics Lab": "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
  "Chemistry Lab": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
}

export default function TimetablePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Timetable"
        description="Weekly schedule for Class 10-A"
      />

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground w-20">Period</th>
                  {days.map((day) => (
                    <th key={day} className="px-3 py-3 text-left font-medium text-muted-foreground min-w-[160px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {periods.map((period) => {
                  const slot = timetable10A.find((s) => s.day === "Monday" && s.period === period)
                  return (
                    <tr key={period} className="border-b last:border-0">
                      <td className="px-4 py-3">
                        <div className="text-xs font-bold">P{period}</div>
                        <div className="text-[10px] text-muted-foreground">{slot?.time || ""}</div>
                      </td>
                      {days.map((day) => {
                        const cell = timetable10A.find(
                          (s) => s.day === day && s.period === period
                        )
                        if (!cell) return <td key={day} className="px-3 py-3 text-muted-foreground text-xs">—</td>
                        const colorClass = subjectColors[cell.subject] || "bg-muted text-muted-foreground border-border"
                        return (
                          <td key={day} className="px-2 py-2">
                            <div className={cn("rounded-lg border p-2.5 transition-all hover:shadow-sm", colorClass)}>
                              <p className="text-xs font-semibold leading-tight">{cell.subject}</p>
                              <p className="mt-0.5 text-[10px] opacity-75">{cell.teacher}</p>
                              <p className="text-[10px] opacity-60">{cell.room}</p>
                            </div>
                          </td>
                        )
                      })}
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
