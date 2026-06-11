"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import {
  Calendar,
  PenLine,
  BarChart3,
  FileText,
  ScrollText,
  Send,
  Award,
  ArrowRight,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react"
import { Button } from "~/components/ui/button"

const quickLinks = [
  { title: "Exam Schedule", desc: "View & manage upcoming exam timetable", href: "/dashboard/academics/exams/schedule", icon: Calendar, color: "bg-blue-500/10 text-blue-500" },
  { title: "Marks Entry", desc: "Enter marks for completed exams", href: "/dashboard/academics/exams/marks-entry", icon: PenLine, color: "bg-emerald-500/10 text-emerald-500" },
  { title: "Grades & GPA", desc: "Grade configuration and GPA calculation", href: "/dashboard/academics/exams/grades-gpa", icon: BarChart3, color: "bg-violet-500/10 text-violet-500" },
  { title: "Report Cards", desc: "Generate and print student report cards", href: "/dashboard/academics/exams/report-cards", icon: FileText, color: "bg-amber-500/10 text-amber-500" },
  { title: "Transcripts", desc: "Official academic transcripts", href: "/dashboard/academics/exams/transcripts", icon: ScrollText, color: "bg-cyan-500/10 text-cyan-500" },
  { title: "Result Publish", desc: "Publish and share exam results", href: "/dashboard/academics/exams/result-publish", icon: Send, color: "bg-pink-500/10 text-pink-500" },
  { title: "Certificates", desc: "Generate academic certificates", href: "/dashboard/academics/exams/certificates", icon: Award, color: "bg-orange-500/10 text-orange-500" },
]

const upcomingExams = [
  { name: "Mid-Term Examination", date: "Jun 16–20, 2026", classes: "6–10", status: "Upcoming" },
  { name: "Unit Test 3", date: "Jul 8–10, 2026", classes: "1–5", status: "Scheduled" },
  { name: "Pre-Board Mock", date: "Aug 1–5, 2026", classes: "10", status: "Scheduled" },
]

const recentResults = [
  { name: "Unit Test 2", classes: "All", avgScore: 76.4, passRate: 94.2, topScore: 99 },
  { name: "Half-Yearly Exam", classes: "6–10", avgScore: 72.8, passRate: 91.5, topScore: 98 },
]

export default function ExamsOverviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Examinations" description="Manage exam schedules, marks, grades, and result publishing." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Upcoming Exams" value="3" icon={Calendar} accentColor="text-blue-500" />
        <StatCard title="Pending Marks Entry" value="5 subjects" icon={PenLine} accentColor="text-amber-500" />
        <StatCard title="Results Published" value="2" icon={CheckCircle} description="This term" accentColor="text-emerald-500" />
        <StatCard title="Students Appearing" value="1,250" icon={Users} accentColor="text-violet-500" />
      </div>

      {/* Quick Links Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Card key={link.title} className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href={link.href}>
              <CardContent className="flex items-center gap-3 p-4">
                <div className={`flex size-10 items-center justify-center rounded-lg ${link.color}`}>
                  <link.icon className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{link.title}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{link.desc}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Upcoming Exams */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Upcoming Exams</CardTitle>
                <CardDescription>Scheduled examinations this term</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/academics/exams/schedule">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingExams.map((exam) => (
                <div key={exam.name} className="flex items-center justify-between rounded-lg p-3 border hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10">
                      <Calendar className="size-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{exam.name}</p>
                      <p className="text-xs text-muted-foreground">Classes {exam.classes} • {exam.date}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-600">
                    <Clock className="size-3" /> {exam.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Results */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Recent Results</CardTitle>
                <CardDescription>Latest published exam results</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/academics/exams/result-publish">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentResults.map((r) => (
                <div key={r.name} className="rounded-lg border p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{r.name}</p>
                    <span className="text-xs text-muted-foreground">Classes {r.classes}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-lg bg-muted/50 p-2">
                      <p className="text-lg font-bold">{r.avgScore}%</p>
                      <p className="text-[10px] text-muted-foreground">Avg. Score</p>
                    </div>
                    <div className="rounded-lg bg-emerald-500/5 p-2">
                      <p className="text-lg font-bold text-emerald-600">{r.passRate}%</p>
                      <p className="text-[10px] text-muted-foreground">Pass Rate</p>
                    </div>
                    <div className="rounded-lg bg-amber-500/5 p-2">
                      <p className="text-lg font-bold text-amber-600">{r.topScore}</p>
                      <p className="text-[10px] text-muted-foreground">Top Score</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
