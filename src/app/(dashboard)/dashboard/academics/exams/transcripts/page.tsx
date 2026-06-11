"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { ChevronLeft, Download, Search, Eye, Printer, ScrollText } from "lucide-react"
import Link from "next/link"

const transcripts = [
  { id: "TR-001", name: "Aarav Sharma", class: "10-A", admNo: "ADM-2022-101", years: "2022–2026", gpa: 3.72, status: "Ready" },
  { id: "TR-002", name: "Priya Patel", class: "10-A", admNo: "ADM-2022-102", years: "2022–2026", gpa: 3.65, status: "Ready" },
  { id: "TR-003", name: "Rahul Verma", class: "10-A", admNo: "ADM-2022-103", years: "2022–2026", gpa: 3.40, status: "Ready" },
  { id: "TR-004", name: "Ananya Gupta", class: "10-A", admNo: "ADM-2022-104", years: "2022–2026", gpa: 3.55, status: "Processing" },
  { id: "TR-005", name: "Arjun Singh", class: "10-A", admNo: "ADM-2022-105", years: "2022–2026", gpa: 3.20, status: "Ready" },
  { id: "TR-006", name: "Diya Reddy", class: "10-A", admNo: "ADM-2022-106", years: "2022–2026", gpa: 3.48, status: "Processing" },
  { id: "TR-007", name: "Kabir Khan", class: "10-A", admNo: "ADM-2022-107", years: "2022–2026", gpa: 2.90, status: "Ready" },
  { id: "TR-008", name: "Meera Nair", class: "10-A", admNo: "ADM-2022-108", years: "2022–2026", gpa: 3.82, status: "Ready" },
  { id: "TR-009", name: "Saanvi Joshi", class: "10-A", admNo: "ADM-2022-110", years: "2022–2026", gpa: 3.90, status: "Ready" },
  { id: "TR-010", name: "Ishita Banerjee", class: "10-A", admNo: "ADM-2022-112", years: "2022–2026", gpa: 3.88, status: "Ready" },
]

export default function TranscriptsPage() {
  const [search, setSearch] = React.useState("")

  const filtered = transcripts.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) || t.admNo.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageHeader title="Transcripts" description="Generate official academic transcripts with complete term-wise records.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button size="sm"><ScrollText className="mr-2 size-4" /> Generate Batch</Button>
      </PageHeader>

      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Class</label>
          <select className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>Class 10-A</option><option>Class 10-B</option><option>Class 9-A</option>
          </select>
        </div>
        <div className="flex-1" />
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search by name or admission no..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex items-center border-b bg-muted/40 px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span className="w-20">ID</span>
            <span className="flex-1">Student</span>
            <span className="w-28">Admission No</span>
            <span className="w-24">Period</span>
            <span className="w-16 text-center">CGPA</span>
            <span className="w-24 text-center">Status</span>
            <span className="w-28 text-center">Actions</span>
          </div>
          <div className="divide-y">
            {filtered.map((t) => (
              <div key={t.id} className="flex items-center px-5 py-3 hover:bg-muted/20 transition-colors">
                <span className="w-20 text-xs font-mono font-bold text-primary">{t.id}</span>
                <div className="flex-1 flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-violet-500/10 text-[10px] font-bold text-violet-500">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">Class {t.class}</p>
                  </div>
                </div>
                <span className="w-28 text-xs font-mono">{t.admNo}</span>
                <span className="w-24 text-xs text-muted-foreground">{t.years}</span>
                <span className={cn("w-16 text-center text-sm font-bold", t.gpa >= 3.5 ? "text-emerald-600" : t.gpa >= 3.0 ? "text-blue-600" : "text-amber-600")}>
                  {t.gpa.toFixed(2)}
                </span>
                <div className="w-24 flex justify-center">
                  <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold", t.status === "Ready" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600")}>
                    {t.status}
                  </span>
                </div>
                <div className="w-28 flex justify-center gap-1">
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0" title="Preview"><Eye className="size-3.5" /></Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0" title="Download"><Download className="size-3.5" /></Button>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0" title="Print"><Printer className="size-3.5" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
