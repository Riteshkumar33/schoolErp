"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { ChevronLeft, Download, Printer, Search, Eye, FileText } from "lucide-react"
import Link from "next/link"

const reportCards = [
  { rollNo: "101", name: "Aarav Sharma", class: "10-A", totalMarks: 545, maxMarks: 600, pct: 90.8, grade: "A+", rank: 3, status: "Generated" },
  { rollNo: "102", name: "Priya Patel", class: "10-A", totalMarks: 520, maxMarks: 600, pct: 86.7, grade: "A", rank: 5, status: "Generated" },
  { rollNo: "103", name: "Rahul Verma", class: "10-A", totalMarks: 468, maxMarks: 600, pct: 78.0, grade: "B+", rank: 8, status: "Generated" },
  { rollNo: "104", name: "Ananya Gupta", class: "10-A", totalMarks: 510, maxMarks: 600, pct: 85.0, grade: "A", rank: 6, status: "Pending" },
  { rollNo: "105", name: "Arjun Singh", class: "10-A", totalMarks: 432, maxMarks: 600, pct: 72.0, grade: "B+", rank: 10, status: "Generated" },
  { rollNo: "106", name: "Diya Reddy", class: "10-A", totalMarks: 498, maxMarks: 600, pct: 83.0, grade: "A", rank: 7, status: "Pending" },
  { rollNo: "107", name: "Kabir Khan", class: "10-A", totalMarks: 390, maxMarks: 600, pct: 65.0, grade: "B", rank: 12, status: "Generated" },
  { rollNo: "108", name: "Meera Nair", class: "10-A", totalMarks: 558, maxMarks: 600, pct: 93.0, grade: "A+", rank: 2, status: "Generated" },
  { rollNo: "109", name: "Rohan Das", class: "10-A", totalMarks: 420, maxMarks: 600, pct: 70.0, grade: "B+", rank: 11, status: "Pending" },
  { rollNo: "110", name: "Saanvi Joshi", class: "10-A", totalMarks: 570, maxMarks: 600, pct: 95.0, grade: "A+", rank: 1, status: "Generated" },
  { rollNo: "111", name: "Vivaan Mehta", class: "10-A", totalMarks: 456, maxMarks: 600, pct: 76.0, grade: "B+", rank: 9, status: "Generated" },
  { rollNo: "112", name: "Ishita Banerjee", class: "10-A", totalMarks: 540, maxMarks: 600, pct: 90.0, grade: "A+", rank: 4, status: "Generated" },
]

const gradeColor: Record<string, string> = {
  "A+": "text-emerald-600", A: "text-emerald-500", "B+": "text-blue-600",
  B: "text-blue-500", C: "text-amber-600", D: "text-orange-600", F: "text-red-600",
}

export default function ReportCardsPage() {
  const [search, setSearch] = React.useState("")
  const [selectedClass, setSelectedClass] = React.useState("10-A")

  const filtered = reportCards.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNo.includes(search)
  )

  const generated = reportCards.filter((r) => r.status === "Generated").length
  const pending = reportCards.filter((r) => r.status === "Pending").length

  return (
    <div className="space-y-6">
      <PageHeader title="Report Cards" description="Generate, view, and print student report cards.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm"><Printer className="mr-2 size-4" /> Print All</Button>
        <Button size="sm"><FileText className="mr-2 size-4" /> Generate All</Button>
      </PageHeader>

      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Class</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {["10-A", "10-B", "9-A", "9-B", "8-A"].map((c) => <option key={c} value={c}>Class {c}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Exam</label>
          <select className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>Mid-Term 2026</option>
            <option>Unit Test 2</option>
          </select>
        </div>
        <div className="flex-1" />
        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 px-3 py-1.5">Generated: {generated}</Badge>
          <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 px-3 py-1.5">Pending: {pending}</Badge>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search by name or roll no..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex items-center border-b bg-muted/40 px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span className="w-10">#</span>
            <span className="w-16">Roll</span>
            <span className="flex-1">Student</span>
            <span className="w-24 text-center">Marks</span>
            <span className="w-16 text-center">%</span>
            <span className="w-16 text-center">Grade</span>
            <span className="w-14 text-center">Rank</span>
            <span className="w-24 text-center">Status</span>
            <span className="w-24 text-center">Actions</span>
          </div>
          <div className="divide-y">
            {filtered.map((s, idx) => (
              <div key={s.rollNo} className="flex items-center px-5 py-3 hover:bg-muted/20 transition-colors">
                <span className="w-10 text-xs text-muted-foreground font-mono">{idx + 1}</span>
                <span className="w-16 text-xs font-mono font-bold">{s.rollNo}</span>
                <div className="flex-1 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {s.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
                <span className="w-24 text-center text-xs font-mono">{s.totalMarks}/{s.maxMarks}</span>
                <span className="w-16 text-center text-sm font-bold">{s.pct}%</span>
                <span className={cn("w-16 text-center text-sm font-bold", gradeColor[s.grade])}>{s.grade}</span>
                <span className="w-14 text-center text-xs font-bold">#{s.rank}</span>
                <div className="w-24 flex justify-center">
                  <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold", s.status === "Generated" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600")}>
                    {s.status}
                  </span>
                </div>
                <div className="w-24 flex justify-center gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Eye className="size-3.5" /></Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Download className="size-3.5" /></Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Printer className="size-3.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
