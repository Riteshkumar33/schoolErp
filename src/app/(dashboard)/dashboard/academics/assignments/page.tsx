"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"
import {
  Plus,
  BookMarked,
  Inbox,
  NotebookTabs,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Calendar,
} from "lucide-react"

interface Assignment {
  id: string
  title: string
  subject: string
  class: string
  dueDate: string
  totalStudents: number
  submitted: number
  graded: number
  status: "Active" | "Overdue" | "Completed" | "Draft"
}

const assignments: Assignment[] = [
  { id: "ASG-001", title: "Quadratic Equations — Problem Set", subject: "Mathematics", class: "10-A", dueDate: "Jun 14, 2026", totalStudents: 35, submitted: 28, graded: 22, status: "Active" },
  { id: "ASG-002", title: "Newton's Laws Lab Report", subject: "Science", class: "10-A", dueDate: "Jun 12, 2026", totalStudents: 35, submitted: 35, graded: 35, status: "Completed" },
  { id: "ASG-003", title: "Essay: Climate Change Impact", subject: "English", class: "9-A", dueDate: "Jun 10, 2026", totalStudents: 38, submitted: 30, graded: 18, status: "Overdue" },
  { id: "ASG-004", title: "Hindi Poetry Analysis", subject: "Hindi", class: "8-A", dueDate: "Jun 15, 2026", totalStudents: 40, submitted: 15, graded: 0, status: "Active" },
  { id: "ASG-005", title: "French Revolution Timeline", subject: "Social Studies", class: "9-B", dueDate: "Jun 16, 2026", totalStudents: 36, submitted: 0, graded: 0, status: "Draft" },
  { id: "ASG-006", title: "Python Basics — Coding Challenge", subject: "Computer Science", class: "10-B", dueDate: "Jun 13, 2026", totalStudents: 32, submitted: 32, graded: 30, status: "Completed" },
]

const statusColor: Record<string, string> = {
  Active: "bg-blue-500/10 text-blue-600",
  Overdue: "bg-red-500/10 text-red-600",
  Completed: "bg-emerald-500/10 text-emerald-600",
  Draft: "bg-zinc-500/10 text-zinc-600",
}

const statusIcon: Record<string, React.ReactNode> = {
  Active: <Clock className="size-3.5" />,
  Overdue: <AlertCircle className="size-3.5" />,
  Completed: <CheckCircle className="size-3.5" />,
  Draft: <FileText className="size-3.5" />,
}

export default function AssignmentsPage() {
  const active = assignments.filter((a) => a.status === "Active").length
  const overdue = assignments.filter((a) => a.status === "Overdue").length
  const completed = assignments.filter((a) => a.status === "Completed").length
  const totalSubmissions = assignments.reduce((s, a) => s + a.submitted, 0)

  return (
    <div className="space-y-6">
      <PageHeader title="Assignments" description="Create, track, and grade student assignments across all subjects.">
        <Button size="sm" asChild>
          <Link href="/dashboard/academics/assignments/create">
            <Plus className="mr-2 size-4" /> Create Assignment
          </Link>
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Active" value={active} icon={Clock} accentColor="text-blue-500" />
        <StatCard title="Overdue" value={overdue} icon={AlertCircle} accentColor="text-red-500" />
        <StatCard title="Completed" value={completed} icon={CheckCircle} accentColor="text-emerald-500" />
        <StatCard title="Total Submissions" value={totalSubmissions} icon={Inbox} accentColor="text-violet-500" />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { title: "Create Assignment", desc: "Draft a new assignment", href: "/dashboard/academics/assignments/create", icon: Plus, color: "bg-blue-500/10 text-blue-500" },
          { title: "Submissions", desc: "Review student submissions", href: "/dashboard/academics/assignments/submissions", icon: Inbox, color: "bg-emerald-500/10 text-emerald-500" },
          { title: "Gradebook", desc: "View and manage grades", href: "/dashboard/academics/assignments/gradebook", icon: NotebookTabs, color: "bg-violet-500/10 text-violet-500" },
        ].map((link) => (
          <Card key={link.title} className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href={link.href}>
              <CardContent className="flex items-center gap-3 p-4">
                <div className={cn("flex size-10 items-center justify-center rounded-lg", link.color)}>
                  <link.icon className="size-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{link.title}</p>
                  <p className="text-[11px] text-muted-foreground">{link.desc}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Assignments List */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">All Assignments</CardTitle>
          <CardDescription>Recent assignments across all classes</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {assignments.map((a) => (
              <div key={a.id} className={cn("flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 hover:bg-muted/20 transition-colors", a.status === "Overdue" && "bg-red-500/[0.02]")}>
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold", statusColor[a.status])}>
                      {statusIcon[a.status]} {a.status}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">{a.id}</span>
                  </div>
                  <p className="font-semibold text-sm">{a.title}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="text-[10px] bg-primary/5">{a.subject}</Badge>
                    <span>Class {a.class}</span>
                    <span className="flex items-center gap-1"><Calendar className="size-3" /> Due: {a.dueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-center">
                    <p className="text-sm font-bold">{a.submitted}/{a.totalStudents}</p>
                    <p className="text-[10px] text-muted-foreground">Submitted</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold">{a.graded}/{a.totalStudents}</p>
                    <p className="text-[10px] text-muted-foreground">Graded</p>
                  </div>
                  <div className="h-2 w-20 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${(a.submitted / a.totalStudents) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
