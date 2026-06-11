"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"
import {
  ChevronLeft,
  Send,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Lock,
  Users,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

interface ExamResult {
  id: string
  examName: string
  classes: string
  totalStudents: number
  passRate: number
  avgScore: number
  publishedDate: string | null
  status: "Published" | "Draft" | "Under Review"
  visibility: "Public" | "Parents Only" | "Internal"
}

const results: ExamResult[] = [
  { id: "RES-001", examName: "Unit Test 2", classes: "1–10", totalStudents: 1250, passRate: 94.2, avgScore: 76.4, publishedDate: "Jun 5, 2026", status: "Published", visibility: "Public" },
  { id: "RES-002", examName: "Half-Yearly 2025", classes: "6–10", totalStudents: 620, passRate: 91.5, avgScore: 72.8, publishedDate: "Dec 20, 2025", status: "Published", visibility: "Parents Only" },
  { id: "RES-003", examName: "Mid-Term 2026", classes: "1–10", totalStudents: 1250, passRate: 0, avgScore: 0, publishedDate: null, status: "Under Review", visibility: "Internal" },
  { id: "RES-004", examName: "Unit Test 3", classes: "1–5", totalStudents: 630, passRate: 0, avgScore: 0, publishedDate: null, status: "Draft", visibility: "Internal" },
]

const visIcon: Record<string, React.ReactNode> = {
  Public: <Globe className="size-3" />,
  "Parents Only": <Users className="size-3" />,
  Internal: <Lock className="size-3" />,
}

const visColor: Record<string, string> = {
  Public: "bg-emerald-500/10 text-emerald-600",
  "Parents Only": "bg-blue-500/10 text-blue-600",
  Internal: "bg-zinc-500/10 text-zinc-600",
}

export default function ResultPublishPage() {
  const [data, setData] = React.useState(results)

  const publish = (id: string) => {
    setData((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "Published" as const, publishedDate: "Just now", visibility: "Parents Only" as const } : r
      )
    )
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Result Publish" description="Review, approve, and publish exam results to students and parents.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
      </PageHeader>

      {/* Summary */}
      <div className="flex flex-wrap gap-3">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 px-3 py-1.5">
          <CheckCircle className="mr-1 size-3" /> {data.filter((r) => r.status === "Published").length} Published
        </Badge>
        <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 px-3 py-1.5">
          <Clock className="mr-1 size-3" /> {data.filter((r) => r.status === "Under Review").length} Under Review
        </Badge>
        <Badge variant="secondary" className="bg-zinc-500/10 text-zinc-600 px-3 py-1.5">
          <AlertCircle className="mr-1 size-3" /> {data.filter((r) => r.status === "Draft").length} Draft
        </Badge>
      </div>

      {/* Result Cards */}
      <div className="space-y-4">
        {data.map((result) => (
          <Card
            key={result.id}
            className={cn(
              "transition-all",
              result.status === "Under Review" && "border-l-4 border-l-amber-500",
              result.status === "Draft" && "border-l-4 border-l-zinc-400 opacity-75",
            )}
          >
            <CardContent className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-muted-foreground">{result.id}</span>
                    <h3 className="text-base font-semibold">{result.examName}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="text-muted-foreground">Classes {result.classes}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{result.totalStudents.toLocaleString()} students</span>
                    {result.publishedDate && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">Published: {result.publishedDate}</span>
                      </>
                    )}
                  </div>
                  {result.status === "Published" && (
                    <div className="flex gap-4 pt-1">
                      <div className="rounded-lg bg-muted/50 px-3 py-1.5 text-center">
                        <p className="text-sm font-bold">{result.avgScore}%</p>
                        <p className="text-[10px] text-muted-foreground">Avg. Score</p>
                      </div>
                      <div className="rounded-lg bg-emerald-500/5 px-3 py-1.5 text-center">
                        <p className="text-sm font-bold text-emerald-600">{result.passRate}%</p>
                        <p className="text-[10px] text-muted-foreground">Pass Rate</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold",
                    result.status === "Published" ? "bg-emerald-500/10 text-emerald-600" :
                    result.status === "Under Review" ? "bg-amber-500/10 text-amber-600" :
                    "bg-zinc-500/10 text-zinc-600"
                  )}>
                    {result.status}
                  </span>
                  <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium", visColor[result.visibility])}>
                    {visIcon[result.visibility]} {result.visibility}
                  </span>
                  <div className="flex gap-1.5 mt-1">
                    {result.status === "Published" && (
                      <Button variant="outline" size="sm" className="h-8 text-xs"><Eye className="mr-1 size-3" /> View</Button>
                    )}
                    {result.status === "Under Review" && (
                      <Button size="sm" className="h-8 text-xs" onClick={() => publish(result.id)}>
                        <Send className="mr-1 size-3" /> Publish
                      </Button>
                    )}
                    {result.status === "Draft" && (
                      <Button variant="outline" size="sm" className="h-8 text-xs" disabled>
                        <AlertCircle className="mr-1 size-3" /> Marks Pending
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
