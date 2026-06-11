"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { StatusBadge } from "~/components/status-badge"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import {
  ChevronLeft,
  Search,
  Check,
  X,
  Clock,
  Plane,
  CalendarDays,
  MessageSquare,
} from "lucide-react"

type LeaveStatus = "Pending" | "Approved" | "Rejected"

interface LeaveRequest {
  id: string
  studentName: string
  class: string
  section: string
  type: "Sick Leave" | "Personal Leave" | "Family Event" | "Medical" | "Other"
  from: string
  to: string
  days: number
  reason: string
  appliedBy: string
  appliedDate: string
  status: LeaveStatus
  attachment: boolean
}

const leaveRequests: LeaveRequest[] = [
  {
    id: "LR-001",
    studentName: "Kabir Khan",
    class: "7",
    section: "A",
    type: "Medical",
    from: "2026-06-09",
    to: "2026-06-13",
    days: 5,
    reason: "Surgery recovery — attached medical certificate from Dr. Sharma, City Hospital.",
    appliedBy: "Mrs. Fatima Khan (Mother)",
    appliedDate: "2026-06-08",
    status: "Pending",
    attachment: true,
  },
  {
    id: "LR-002",
    studentName: "Ananya Gupta",
    class: "8",
    section: "B",
    type: "Family Event",
    from: "2026-06-10",
    to: "2026-06-11",
    days: 2,
    reason: "Brother's wedding in Jaipur. Travel required.",
    appliedBy: "Mr. Rajesh Gupta (Father)",
    appliedDate: "2026-06-07",
    status: "Pending",
    attachment: false,
  },
  {
    id: "LR-003",
    studentName: "Rohan Das",
    class: "10",
    section: "A",
    type: "Sick Leave",
    from: "2026-06-09",
    to: "2026-06-11",
    days: 3,
    reason: "High fever and throat infection. Doctor advised rest for 3 days.",
    appliedBy: "Mrs. Sonia Das (Mother)",
    appliedDate: "2026-06-09",
    status: "Pending",
    attachment: true,
  },
  {
    id: "LR-004",
    studentName: "Vivaan Mehta",
    class: "6",
    section: "B",
    type: "Personal Leave",
    from: "2026-06-07",
    to: "2026-06-10",
    days: 4,
    reason: "Family vacation planned in advance.",
    appliedBy: "Mr. Anil Mehta (Father)",
    appliedDate: "2026-06-03",
    status: "Approved",
    attachment: false,
  },
  {
    id: "LR-005",
    studentName: "Diya Reddy",
    class: "9",
    section: "A",
    type: "Sick Leave",
    from: "2026-06-11",
    to: "2026-06-11",
    days: 1,
    reason: "Stomach flu — staying home on doctor's advice.",
    appliedBy: "Mrs. Lakshmi Reddy (Mother)",
    appliedDate: "2026-06-11",
    status: "Pending",
    attachment: false,
  },
  {
    id: "LR-006",
    studentName: "Priya Patel",
    class: "9",
    section: "A",
    type: "Other",
    from: "2026-06-05",
    to: "2026-06-06",
    days: 2,
    reason: "Participating in inter-school debate competition.",
    appliedBy: "Mr. Deepak Patel (Father)",
    appliedDate: "2026-06-02",
    status: "Approved",
    attachment: true,
  },
  {
    id: "LR-007",
    studentName: "Arjun Singh",
    class: "5",
    section: "A",
    type: "Personal Leave",
    from: "2026-06-12",
    to: "2026-06-13",
    days: 2,
    reason: "Urgent family matter.",
    appliedBy: "Mr. Harpreet Singh (Father)",
    appliedDate: "2026-06-10",
    status: "Pending",
    attachment: false,
  },
  {
    id: "LR-008",
    studentName: "Saanvi Joshi",
    class: "3",
    section: "A",
    type: "Sick Leave",
    from: "2026-06-02",
    to: "2026-06-03",
    days: 2,
    reason: "Chickenpox — doctor recommended isolation.",
    appliedBy: "Mrs. Neha Joshi (Mother)",
    appliedDate: "2026-06-02",
    status: "Rejected",
    attachment: true,
  },
]

const typeColors: Record<string, string> = {
  "Sick Leave": "bg-red-500/10 text-red-600",
  "Personal Leave": "bg-blue-500/10 text-blue-600",
  "Family Event": "bg-violet-500/10 text-violet-600",
  Medical: "bg-orange-500/10 text-orange-600",
  Other: "bg-zinc-500/10 text-zinc-600",
}

export default function LeaveRequestsPage() {
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState<"all" | LeaveStatus>("all")
  const [requests, setRequests] = React.useState(leaveRequests)

  const filtered = requests.filter((r) => {
    const matchSearch =
      r.studentName.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || r.status === filter
    return matchSearch && matchFilter
  })

  const pending = requests.filter((r) => r.status === "Pending").length
  const approved = requests.filter((r) => r.status === "Approved").length
  const rejected = requests.filter((r) => r.status === "Rejected").length

  const handleAction = (id: string, action: "Approved" | "Rejected") => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: action } : r))
    )
  }

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short" })

  return (
    <div className="space-y-6">
      <PageHeader title="Leave Requests" description="Review and manage student leave applications.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/attendance">
            <ChevronLeft className="mr-1 size-4" /> Back
          </Link>
        </Button>
      </PageHeader>

      {/* Summary badges */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border",
            filter === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/50 text-muted-foreground hover:bg-muted border-transparent"
          )}
        >
          All ({requests.length})
        </button>
        <button
          onClick={() => setFilter("Pending")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border",
            filter === "Pending" ? "bg-amber-500 text-white border-amber-500" : "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-transparent"
          )}
        >
          Pending ({pending})
        </button>
        <button
          onClick={() => setFilter("Approved")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border",
            filter === "Approved" ? "bg-emerald-500 text-white border-emerald-500" : "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-transparent"
          )}
        >
          Approved ({approved})
        </button>
        <button
          onClick={() => setFilter("Rejected")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border",
            filter === "Rejected" ? "bg-red-500 text-white border-red-500" : "bg-red-500/10 text-red-600 hover:bg-red-500/20 border-transparent"
          )}
        >
          Rejected ({rejected})
        </button>
        <div className="flex-1" />
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
      </div>

      {/* Leave Request Cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground text-sm">
              No leave requests match your filters.
            </CardContent>
          </Card>
        ) : (
          filtered.map((req) => (
            <Card
              key={req.id}
              className={cn(
                "transition-all duration-200 hover:shadow-md",
                req.status === "Pending" && "border-l-4 border-l-amber-500"
              )}
            >
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left: Student Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-full text-xs font-bold",
                          req.status === "Pending"
                            ? "bg-amber-500/10 text-amber-600"
                            : req.status === "Approved"
                              ? "bg-emerald-500/10 text-emerald-600"
                              : "bg-red-500/10 text-red-500"
                        )}
                      >
                        {req.studentName.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{req.studentName}</span>
                          <span className="text-xs font-mono text-muted-foreground">{req.id}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Class {req.class}-{req.section} • Applied by {req.appliedBy}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={cn("rounded-full px-2.5 py-0.5 font-semibold", typeColors[req.type] || typeColors.Other)}>
                        {req.type}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="size-3" />
                        {formatDate(req.from)}
                        {req.from !== req.to && ` — ${formatDate(req.to)}`}
                      </span>
                      <Badge variant="secondary" className="font-mono text-xs">{req.days} day{req.days > 1 ? "s" : ""}</Badge>
                      {req.attachment && (
                        <span className="text-xs text-blue-500 font-medium">📎 Attachment</span>
                      )}
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <MessageSquare className="mt-0.5 size-3 shrink-0" />
                      <span className="leading-relaxed">{req.reason}</span>
                    </div>
                  </div>

                  {/* Right: Status + Actions */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <StatusBadge status={req.status} />
                    <p className="text-[10px] text-muted-foreground">
                      Applied {formatDate(req.appliedDate)}
                    </p>
                    {req.status === "Pending" && (
                      <div className="flex gap-1.5 mt-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-700 hover:border-emerald-300"
                          onClick={() => handleAction(req.id, "Approved")}
                        >
                          <Check className="mr-1 size-3.5" /> Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 text-red-600 hover:bg-red-500/10 hover:text-red-700 hover:border-red-300"
                          onClick={() => handleAction(req.id, "Rejected")}
                        >
                          <X className="mr-1 size-3.5" /> Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
