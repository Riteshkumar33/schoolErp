"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { ChevronLeft, Settings } from "lucide-react"
import Link from "next/link"
import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

const gradeScale = [
  { grade: "A+", range: "90–100", gpa: 4.0, color: "bg-emerald-500" },
  { grade: "A", range: "80–89", gpa: 3.7, color: "bg-emerald-400" },
  { grade: "B+", range: "70–79", gpa: 3.3, color: "bg-blue-500" },
  { grade: "B", range: "60–69", gpa: 3.0, color: "bg-blue-400" },
  { grade: "C", range: "50–59", gpa: 2.5, color: "bg-amber-500" },
  { grade: "D", range: "40–49", gpa: 2.0, color: "bg-orange-500" },
  { grade: "F", range: "Below 40", gpa: 0.0, color: "bg-red-500" },
]

const gradeDistribution = [
  { grade: "A+", count: 85 },
  { grade: "A", count: 145 },
  { grade: "B+", count: 210 },
  { grade: "B", count: 340 },
  { grade: "C", count: 230 },
  { grade: "D", count: 150 },
  { grade: "F", count: 90 },
]

const classGPA = [
  { class: "1-A", gpa: 3.6 }, { class: "2-A", gpa: 3.5 }, { class: "3-A", gpa: 3.4 },
  { class: "4-A", gpa: 3.3 }, { class: "5-A", gpa: 3.7 }, { class: "6-A", gpa: 3.2 },
  { class: "7-A", gpa: 3.1 }, { class: "8-A", gpa: 3.3 }, { class: "9-A", gpa: 3.0 },
  { class: "10-A", gpa: 3.4 },
]

const topStudents = [
  { name: "Ishita Banerjee", class: "10-A", gpa: 4.0 },
  { name: "Saanvi Joshi", class: "10-A", gpa: 3.95 },
  { name: "Aarav Sharma", class: "10-A", gpa: 3.9 },
  { name: "Priya Patel", class: "9-A", gpa: 3.88 },
  { name: "Meera Nair", class: "9-A", gpa: 3.85 },
]

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function GradesGPAPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Grades & GPA" description="Grade scale configuration, distribution, and GPA analytics.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm"><Settings className="mr-2 size-4" /> Configure Scale</Button>
      </PageHeader>

      {/* Grade Scale */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Grading Scale</CardTitle>
          <CardDescription>Current grade to GPA mapping</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-7">
            {gradeScale.map((g) => (
              <div key={g.grade} className="rounded-xl border p-3 text-center hover:shadow-sm transition-shadow">
                <div className={cn("mx-auto mb-2 flex size-10 items-center justify-center rounded-full text-white font-bold text-sm", g.color)}>
                  {g.grade}
                </div>
                <p className="text-xs font-medium">{g.range}</p>
                <p className="text-lg font-bold mt-0.5">{g.gpa.toFixed(1)}</p>
                <p className="text-[10px] text-muted-foreground">GPA</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Grade Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Grade Distribution</CardTitle>
            <CardDescription>Number of students per grade — last exam</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gradeDistribution} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="grade" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Bar dataKey="count" name="Students" fill="hsl(250, 65%, 60%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Class-wise GPA */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Class-wise Average GPA</CardTitle>
            <CardDescription>Average GPA comparison across classes</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 pt-2">
              {classGPA.map((c) => (
                <div key={c.class} className="flex items-center gap-3">
                  <span className="w-14 text-xs font-semibold shrink-0">Class {c.class.split("-")[0]}</span>
                  <div className="flex-1 h-6 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(c.gpa / 4) * 100}%`,
                        backgroundColor: c.gpa >= 3.5 ? "hsl(170, 55%, 45%)" : c.gpa >= 3.0 ? "hsl(250, 65%, 60%)" : "hsl(35, 90%, 55%)",
                      }}
                    />
                  </div>
                  <span className="w-10 text-sm font-bold text-right">{c.gpa.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top GPA Students */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Top GPA Students</CardTitle>
          <CardDescription>Highest cumulative GPA this term</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-5">
            {topStudents.map((s, i) => (
              <div key={s.name} className="rounded-xl border p-4 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className={cn("mx-auto mb-2 flex size-11 items-center justify-center rounded-full font-bold text-sm", i < 3 ? "bg-amber-500/15 text-amber-600" : "bg-muted text-muted-foreground")}>
                  #{i + 1}
                </div>
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs text-muted-foreground">Class {s.class}</p>
                <p className="text-xl font-bold mt-1 text-primary">{s.gpa.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
