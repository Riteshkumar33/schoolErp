"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import {
  ChevronLeft,
  Download,
  Search,
  TrendingUp,
  Award,
  Users,
  BookOpen,
} from "lucide-react"
import {
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

interface GradeEntry {
  rollNo: string
  name: string
  math: number
  science: number
  english: number
  hindi: number
  sst: number
  cs: number
  total: number
  avg: number
  grade: string
}

const gradebook: GradeEntry[] = [
  { rollNo: "101", name: "Aarav Sharma", math: 88, science: 92, english: 85, hindi: 78, sst: 80, cs: 95, total: 518, avg: 86.3, grade: "A" },
  { rollNo: "102", name: "Priya Patel", math: 76, science: 85, english: 90, hindi: 82, sst: 78, cs: 88, total: 499, avg: 83.2, grade: "A" },
  { rollNo: "103", name: "Rahul Verma", math: 65, science: 70, english: 72, hindi: 68, sst: 66, cs: 80, total: 421, avg: 70.2, grade: "B+" },
  { rollNo: "104", name: "Ananya Gupta", math: 92, science: 88, english: 94, hindi: 85, sst: 90, cs: 91, total: 540, avg: 90.0, grade: "A+" },
  { rollNo: "105", name: "Arjun Singh", math: 58, science: 62, english: 70, hindi: 55, sst: 60, cs: 72, total: 377, avg: 62.8, grade: "B" },
  { rollNo: "106", name: "Diya Reddy", math: 82, science: 78, english: 88, hindi: 80, sst: 85, cs: 86, total: 499, avg: 83.2, grade: "A" },
  { rollNo: "107", name: "Kabir Khan", math: 45, science: 50, english: 55, hindi: 48, sst: 52, cs: 60, total: 310, avg: 51.7, grade: "C" },
  { rollNo: "108", name: "Meera Nair", math: 95, science: 98, english: 92, hindi: 90, sst: 94, cs: 99, total: 568, avg: 94.7, grade: "A+" },
  { rollNo: "109", name: "Rohan Das", math: 60, science: 58, english: 65, hindi: 62, sst: 55, cs: 70, total: 370, avg: 61.7, grade: "B" },
  { rollNo: "110", name: "Saanvi Joshi", math: 98, science: 96, english: 95, hindi: 92, sst: 97, cs: 100, total: 578, avg: 96.3, grade: "A+" },
  { rollNo: "111", name: "Vivaan Mehta", math: 72, science: 68, english: 75, hindi: 70, sst: 74, cs: 78, total: 437, avg: 72.8, grade: "B+" },
  { rollNo: "112", name: "Ishita Banerjee", math: 90, science: 94, english: 96, hindi: 88, sst: 92, cs: 97, total: 557, avg: 92.8, grade: "A+" },
]

const subjectAverages = [
  { subject: "Math", avg: Math.round(gradebook.reduce((s, g) => s + g.math, 0) / gradebook.length) },
  { subject: "Science", avg: Math.round(gradebook.reduce((s, g) => s + g.science, 0) / gradebook.length) },
  { subject: "English", avg: Math.round(gradebook.reduce((s, g) => s + g.english, 0) / gradebook.length) },
  { subject: "Hindi", avg: Math.round(gradebook.reduce((s, g) => s + g.hindi, 0) / gradebook.length) },
  { subject: "SST", avg: Math.round(gradebook.reduce((s, g) => s + g.sst, 0) / gradebook.length) },
  { subject: "CS", avg: Math.round(gradebook.reduce((s, g) => s + g.cs, 0) / gradebook.length) },
]

const gradeColor: Record<string, string> = {
  "A+": "text-emerald-600 bg-emerald-500/10", A: "text-emerald-500 bg-emerald-500/10",
  "B+": "text-blue-600 bg-blue-500/10", B: "text-blue-500 bg-blue-500/10",
  C: "text-amber-600 bg-amber-500/10", D: "text-orange-600 bg-orange-500/10",
  F: "text-red-600 bg-red-500/10",
}

const markColor = (m: number) => m >= 90 ? "text-emerald-600 font-bold" : m >= 75 ? "text-foreground" : m >= 50 ? "text-amber-600" : "text-red-600 font-bold"

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function GradebookPage() {
  const [search, setSearch] = React.useState("")
  const classAvg = Math.round(gradebook.reduce((s, g) => s + g.avg, 0) / gradebook.length * 10) / 10
  const toppers = gradebook.filter((g) => g.grade === "A+").length

  const filtered = gradebook.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()) || g.rollNo.includes(search)
  )

  return (
    <div className="space-y-6">
      <PageHeader title="Gradebook" description="Complete marks and grade overview for Class 10-A.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/assignments"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Class Average" value={`${classAvg}%`} icon={TrendingUp} accentColor="text-blue-500" />
        <StatCard title="Toppers (A+)" value={toppers} icon={Award} accentColor="text-emerald-500" />
        <StatCard title="Total Students" value={gradebook.length} icon={Users} accentColor="text-violet-500" />
        <StatCard title="Subjects" value="6" icon={BookOpen} accentColor="text-amber-500" />
      </div>

      {/* Subject Average Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Subject-wise Class Average</CardTitle>
          <CardDescription>Average marks per subject for all assignments</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectAverages} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                <XAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                <YAxis domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                <Tooltip contentStyle={tt} />
                <Bar dataKey="avg" name="Average" fill="hsl(250, 65%, 60%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search students..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
      </div>

      {/* Gradebook Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="sticky left-0 z-10 bg-muted/40 px-4 py-3 text-left font-medium text-muted-foreground min-w-[180px]">Student</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">Math</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">Science</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">English</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">Hindi</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">SST</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">CS</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[70px]">Total</th>
                  <th className="px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">Avg</th>
                  <th className="sticky right-0 z-10 bg-muted/40 px-3 py-3 text-center font-medium text-muted-foreground min-w-[60px]">Grade</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((g) => (
                  <tr key={g.rollNo} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="sticky left-0 z-10 bg-card px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                          {g.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-xs whitespace-nowrap">{g.name}</p>
                          <p className="text-[10px] text-muted-foreground">#{g.rollNo}</p>
                        </div>
                      </div>
                    </td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.math))}>{g.math}</td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.science))}>{g.science}</td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.english))}>{g.english}</td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.hindi))}>{g.hindi}</td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.sst))}>{g.sst}</td>
                    <td className={cn("px-3 py-3 text-center text-xs", markColor(g.cs))}>{g.cs}</td>
                    <td className="px-3 py-3 text-center text-xs font-bold">{g.total}/600</td>
                    <td className="px-3 py-3 text-center text-xs font-bold">{g.avg}%</td>
                    <td className="sticky right-0 z-10 bg-card px-3 py-3 text-center">
                      <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold", gradeColor[g.grade])}>
                        {g.grade}
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
