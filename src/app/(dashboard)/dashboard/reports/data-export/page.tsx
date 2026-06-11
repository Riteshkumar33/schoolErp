"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"
import {
  Download,
  FileSpreadsheet,
  FileText,
  FileJson,
  Database,
  Clock,
  CheckCircle2,
  Loader2,
  Calendar,
} from "lucide-react"

interface ExportTemplate {
  id: string
  name: string
  description: string
  category: string
  formats: string[]
  lastExported: string | null
  recordCount: number
}

const templates: ExportTemplate[] = [
  {
    id: "EX-01",
    name: "Student Master Data",
    description: "Complete student directory with personal, academic, and contact information",
    category: "Students",
    formats: ["CSV", "Excel", "PDF"],
    lastExported: "2 hours ago",
    recordCount: 1250,
  },
  {
    id: "EX-02",
    name: "Fee Collection Summary",
    description: "Monthly fee collection with payment status, amounts, and receipt numbers",
    category: "Finance",
    formats: ["Excel", "PDF"],
    lastExported: "1 day ago",
    recordCount: 3420,
  },
  {
    id: "EX-03",
    name: "Attendance Records",
    description: "Daily attendance data for all classes with present/absent/late breakdown",
    category: "Attendance",
    formats: ["CSV", "Excel"],
    lastExported: "3 days ago",
    recordCount: 28500,
  },
  {
    id: "EX-04",
    name: "Exam Results",
    description: "Subject-wise marks, grades, GPA, and ranks for all students",
    category: "Academics",
    formats: ["Excel", "PDF", "CSV"],
    lastExported: null,
    recordCount: 8750,
  },
  {
    id: "EX-05",
    name: "Staff Payroll",
    description: "Monthly payroll with salary, deductions, bonuses, and net pay",
    category: "HR",
    formats: ["Excel", "PDF"],
    lastExported: "1 week ago",
    recordCount: 92,
  },
  {
    id: "EX-06",
    name: "Library Inventory",
    description: "Complete book catalog with ISBN, availability, and issue history",
    category: "Library",
    formats: ["CSV", "JSON"],
    lastExported: "2 weeks ago",
    recordCount: 4200,
  },
  {
    id: "EX-07",
    name: "Transport Log",
    description: "Vehicle trip logs, route assignments, and fuel consumption records",
    category: "Transport",
    formats: ["CSV", "Excel"],
    lastExported: "5 days ago",
    recordCount: 1580,
  },
  {
    id: "EX-08",
    name: "Full Database Backup",
    description: "Complete data export of all modules for backup or migration",
    category: "System",
    formats: ["JSON", "CSV"],
    lastExported: "1 month ago",
    recordCount: 52000,
  },
]

const formatIcons: Record<string, React.ReactNode> = {
  CSV: <FileSpreadsheet className="size-3.5" />,
  Excel: <FileSpreadsheet className="size-3.5" />,
  PDF: <FileText className="size-3.5" />,
  JSON: <FileJson className="size-3.5" />,
}

const categoryColors: Record<string, string> = {
  Students: "bg-blue-500/10 text-blue-600",
  Finance: "bg-emerald-500/10 text-emerald-600",
  Attendance: "bg-violet-500/10 text-violet-600",
  Academics: "bg-amber-500/10 text-amber-600",
  HR: "bg-cyan-500/10 text-cyan-600",
  Library: "bg-orange-500/10 text-orange-600",
  Transport: "bg-pink-500/10 text-pink-600",
  System: "bg-zinc-500/10 text-zinc-600",
}

export default function DataExportPage() {
  const [exporting, setExporting] = React.useState<string | null>(null)

  const handleExport = (id: string, format: string) => {
    setExporting(`${id}-${format}`)
    setTimeout(() => setExporting(null), 2000)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Data Export" description="Export school data in various formats for offline use, backup, or integration.">
        <Button variant="outline" size="sm">
          <Database className="mr-2 size-4" /> Full Backup
        </Button>
      </PageHeader>

      {/* Quick Stats */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1.5">
          {templates.length} Export Templates
        </Badge>
        <Badge variant="secondary" className="bg-muted px-3 py-1.5">
          {templates.reduce((s, t) => s + t.recordCount, 0).toLocaleString()} Total Records
        </Badge>
      </div>

      {/* Export Templates */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((tmpl) => (
          <Card key={tmpl.id} className="group transition-all hover:shadow-md hover:-translate-y-0.5">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-sm">{tmpl.name}</CardTitle>
                  <p className="text-[10px] font-mono text-muted-foreground mt-0.5">{tmpl.id}</p>
                </div>
                <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-semibold", categoryColors[tmpl.category] || categoryColors.System)}>
                  {tmpl.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">{tmpl.description}</p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Database className="size-3" /> {tmpl.recordCount.toLocaleString()} records
                </span>
                {tmpl.lastExported ? (
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {tmpl.lastExported}
                  </span>
                ) : (
                  <span className="text-muted-foreground/50">Never exported</span>
                )}
              </div>

              <div className="flex gap-1.5 pt-1 border-t">
                {tmpl.formats.map((fmt) => {
                  const key = `${tmpl.id}-${fmt}`
                  const isExporting = exporting === key
                  return (
                    <Button
                      key={fmt}
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs"
                      disabled={isExporting}
                      onClick={() => handleExport(tmpl.id, fmt)}
                    >
                      {isExporting ? (
                        <>
                          <CheckCircle2 className="mr-1 size-3 text-emerald-500" /> Done
                        </>
                      ) : (
                        <>
                          {formatIcons[fmt]}
                          <span className="ml-1">{fmt}</span>
                        </>
                      )}
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Exports Log */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Recent Exports</CardTitle>
          <CardDescription>Last 5 data exports performed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2.5">
            {[
              { name: "Student Master Data", format: "CSV", time: "2 hours ago", size: "1.2 MB", user: "Admin" },
              { name: "Fee Collection Summary", format: "Excel", time: "1 day ago", size: "3.4 MB", user: "Admin" },
              { name: "Attendance Records", format: "CSV", time: "3 days ago", size: "8.7 MB", user: "Admin" },
              { name: "Staff Payroll", format: "PDF", time: "1 week ago", size: "420 KB", user: "HR Manager" },
              { name: "Transport Log", format: "Excel", time: "5 days ago", size: "1.8 MB", user: "Admin" },
            ].map((exp, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10">
                    <CheckCircle2 className="size-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{exp.name}</p>
                    <p className="text-[10px] text-muted-foreground">{exp.format} • {exp.size} • by {exp.user}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{exp.time}</span>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    <Download className="size-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
