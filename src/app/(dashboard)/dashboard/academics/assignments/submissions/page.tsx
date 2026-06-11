"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import {
  ChevronLeft,
  Search,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  MessageSquare,
} from "lucide-react"

type SubStatus = "Submitted" | "Late" | "Graded" | "Not Submitted" | "Resubmitted"

interface Submission {
  id: string
  studentName: string
  rollNo: string
  class: string
  assignment: string
  subject: string
  submittedAt: string | null
  status: SubStatus
  marks: number | null
  maxMarks: number
  feedback: string | null
  attachment: boolean
}

const submissions: Submission[] = [
  { id: "SUB-001", studentName: "Aarav Sharma", rollNo: "101", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 11, 10:30 AM", status: "Submitted", marks: null, maxMarks: 100, feedback: null, attachment: true },
  { id: "SUB-002", studentName: "Priya Patel", rollNo: "102", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 11, 9:15 AM", status: "Graded", marks: 88, maxMarks: 100, feedback: "Excellent work on part 3!", attachment: true },
  { id: "SUB-003", studentName: "Rahul Verma", rollNo: "103", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 12, 2:00 PM", status: "Late", marks: null, maxMarks: 100, feedback: null, attachment: true },
  { id: "SUB-004", studentName: "Ananya Gupta", rollNo: "104", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 10, 5:45 PM", status: "Graded", marks: 92, maxMarks: 100, feedback: "Outstanding problem-solving approach.", attachment: true },
  { id: "SUB-005", studentName: "Arjun Singh", rollNo: "105", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: null, status: "Not Submitted", marks: null, maxMarks: 100, feedback: null, attachment: false },
  { id: "SUB-006", studentName: "Diya Reddy", rollNo: "106", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 11, 11:00 AM", status: "Submitted", marks: null, maxMarks: 100, feedback: null, attachment: true },
  { id: "SUB-007", studentName: "Kabir Khan", rollNo: "107", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: null, status: "Not Submitted", marks: null, maxMarks: 100, feedback: null, attachment: false },
  { id: "SUB-008", studentName: "Meera Nair", rollNo: "108", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 11, 8:30 AM", status: "Graded", marks: 95, maxMarks: 100, feedback: "Perfect. Well done!", attachment: true },
  { id: "SUB-009", studentName: "Rohan Das", rollNo: "109", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 13, 9:00 AM", status: "Resubmitted", marks: null, maxMarks: 100, feedback: null, attachment: true },
  { id: "SUB-010", studentName: "Saanvi Joshi", rollNo: "110", class: "10-A", assignment: "Quadratic Equations", subject: "Mathematics", submittedAt: "Jun 10, 4:20 PM", status: "Graded", marks: 98, maxMarks: 100, feedback: "Exceptional!", attachment: true },
]

const statusColor: Record<SubStatus, string> = {
  Submitted: "bg-blue-500/10 text-blue-600",
  Late: "bg-amber-500/10 text-amber-600",
  Graded: "bg-emerald-500/10 text-emerald-600",
  "Not Submitted": "bg-red-500/10 text-red-600",
  Resubmitted: "bg-violet-500/10 text-violet-600",
}

const statusIcon: Record<SubStatus, React.ReactNode> = {
  Submitted: <Clock className="size-3" />,
  Late: <AlertCircle className="size-3" />,
  Graded: <CheckCircle className="size-3" />,
  "Not Submitted": <AlertCircle className="size-3" />,
  Resubmitted: <Clock className="size-3" />,
}

export default function SubmissionsPage() {
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState<"all" | SubStatus>("all")

  const filtered = submissions.filter((s) => {
    const matchSearch = s.studentName.toLowerCase().includes(search.toLowerCase()) || s.rollNo.includes(search)
    const matchFilter = filter === "all" || s.status === filter
    return matchSearch && matchFilter
  })

  const submitted = submissions.filter((s) => s.status !== "Not Submitted").length
  const graded = submissions.filter((s) => s.status === "Graded").length

  return (
    <div className="space-y-6">
      <PageHeader title="Submissions" description="Review and grade student assignment submissions.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/assignments"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Download All</Button>
      </PageHeader>

      {/* Assignment Info */}
      <Card className="bg-muted/20">
        <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <p className="font-semibold">Quadratic Equations — Problem Set</p>
            <p className="text-xs text-muted-foreground">Mathematics • Class 10-A • Due: Jun 14, 2026</p>
          </div>
          <div className="flex gap-3">
            <div className="text-center">
              <p className="text-lg font-bold">{submitted}/{submissions.length}</p>
              <p className="text-[10px] text-muted-foreground">Submitted</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-emerald-600">{graded}/{submissions.length}</p>
              <p className="text-[10px] text-muted-foreground">Graded</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {(["all", "Submitted", "Graded", "Late", "Resubmitted", "Not Submitted"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold transition-all border",
              filter === f ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted border-transparent"
            )}
          >
            {f === "all" ? `All (${submissions.length})` : `${f} (${submissions.filter((s) => s.status === f).length})`}
          </button>
        ))}
        <div className="flex-1" />
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
      </div>

      {/* Submissions List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-sm text-muted-foreground">No submissions match your filter.</div>
            ) : (
              filtered.map((sub) => (
                <div key={sub.id} className={cn("flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 hover:bg-muted/20 transition-colors", sub.status === "Not Submitted" && "opacity-60")}>
                  <div className="flex items-center gap-3 flex-1">
                    <div className={cn("flex size-9 items-center justify-center rounded-full text-xs font-bold",
                      sub.status === "Graded" ? "bg-emerald-500/10 text-emerald-600" :
                      sub.status === "Not Submitted" ? "bg-red-500/10 text-red-500" :
                      "bg-primary/10 text-primary"
                    )}>
                      {sub.studentName.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold">{sub.studentName}</p>
                        <span className="text-[10px] font-mono text-muted-foreground">#{sub.rollNo}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {sub.submittedAt ? (
                          <span>{sub.submittedAt}</span>
                        ) : (
                          <span className="text-red-500">Not submitted</span>
                        )}
                        {sub.attachment && <span className="text-blue-500">📎 Attachment</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold", statusColor[sub.status])}>
                      {statusIcon[sub.status]} {sub.status}
                    </span>
                    {sub.marks !== null && (
                      <span className={cn("text-sm font-bold", sub.marks >= 80 ? "text-emerald-600" : sub.marks >= 60 ? "text-blue-600" : "text-amber-600")}>
                        {sub.marks}/{sub.maxMarks}
                      </span>
                    )}
                    {sub.feedback && (
                      <span title={sub.feedback}><MessageSquare className="size-4 text-muted-foreground" /></span>
                    )}
                    {sub.status !== "Not Submitted" && (
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Eye className="size-3.5" /></Button>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Download className="size-3.5" /></Button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
