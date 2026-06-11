"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"
import {
  Plus,
  Play,
  Save,
  Trash2,
  SlidersHorizontal,
  Clock,
  FileBarChart,
  BarChart3,
  Table2,
  PieChart,
} from "lucide-react"

const savedReports = [
  {
    id: "CR-01",
    name: "Low Attendance Students",
    description: "Students with attendance below 85% in current term",
    type: "Table",
    icon: Table2,
    lastRun: "2 hours ago",
    filters: ["Attendance < 85%", "Current Term"],
    schedule: "Weekly",
  },
  {
    id: "CR-02",
    name: "Fee Defaulters Report",
    description: "Students with pending fees exceeding 30 days",
    type: "Table",
    icon: Table2,
    lastRun: "1 day ago",
    filters: ["Fee Status: Overdue", "Days > 30"],
    schedule: "Daily",
  },
  {
    id: "CR-03",
    name: "Subject-wise Performance",
    description: "Average marks comparison across all subjects for selected class",
    type: "Bar Chart",
    icon: BarChart3,
    lastRun: "3 days ago",
    filters: ["Class: 10-A", "Last Exam"],
    schedule: "On Demand",
  },
  {
    id: "CR-04",
    name: "Staff Leave Analysis",
    description: "Leave pattern analysis for all staff this quarter",
    type: "Pie Chart",
    icon: PieChart,
    lastRun: "1 week ago",
    filters: ["Q2 2026", "All Departments"],
    schedule: "Monthly",
  },
  {
    id: "CR-05",
    name: "Transport Utilization",
    description: "Vehicle occupancy vs capacity for all routes",
    type: "Chart",
    icon: FileBarChart,
    lastRun: "5 days ago",
    filters: ["All Routes", "This Month"],
    schedule: "Weekly",
  },
]

const typeColors: Record<string, string> = {
  Table: "bg-blue-500/10 text-blue-600",
  "Bar Chart": "bg-violet-500/10 text-violet-600",
  "Pie Chart": "bg-emerald-500/10 text-emerald-600",
  Chart: "bg-amber-500/10 text-amber-600",
}

export default function CustomReportsPage() {
  const [search, setSearch] = React.useState("")

  const filtered = savedReports.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageHeader title="Custom Reports" description="Build, save, and schedule your own reports.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> New Report
        </Button>
      </PageHeader>

      {/* Builder Teaser */}
      <Card className="border-dashed border-2 bg-muted/20">
        <CardContent className="flex flex-col items-center justify-center py-10 text-center">
          <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
            <SlidersHorizontal className="size-7 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Report Builder</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-md">
            Select data source, apply filters, choose visualization type, and save as a reusable report.
            Schedule automatic delivery to email.
          </p>
          <Button className="mt-4" size="sm">
            <Plus className="mr-2 size-4" /> Create Custom Report
          </Button>
        </CardContent>
      </Card>

      {/* Search */}
      <div className="relative max-w-sm">
        <FileBarChart className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search saved reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-9"
        />
      </div>

      {/* Saved Reports */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((report) => {
          const Icon = report.icon
          return (
            <Card key={report.id} className="group transition-all hover:shadow-md hover:-translate-y-0.5">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={cn("flex size-9 items-center justify-center rounded-lg", typeColors[report.type] || typeColors.Chart)}>
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{report.name}</CardTitle>
                      <p className="text-[10px] font-mono text-muted-foreground">{report.id}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{report.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">{report.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {report.filters.map((f) => (
                    <span key={f} className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                  <span className="flex items-center gap-1"><Clock className="size-3" /> {report.lastRun}</span>
                  <span className="font-medium">{report.schedule}</span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <Button variant="outline" size="sm" className="flex-1 h-8 text-xs">
                    <Play className="mr-1 size-3" /> Run
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs px-2">
                    <Save className="size-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs px-2 text-red-500 hover:text-red-600 hover:bg-red-500/10">
                    <Trash2 className="size-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
