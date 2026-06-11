"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { Button } from "~/components/ui/button"
import { Plus, Calendar } from "lucide-react"
import { exams, type Exam } from "~/lib/mock-data"

const columns = [
  {
    key: "name",
    header: "Exam",
    sortable: true,
    cell: (row: Exam) => <span className="font-semibold text-primary">{row.name}</span>,
  },
  { key: "subject", header: "Subject", sortable: true, cell: (row: Exam) => <span className="font-medium">{row.subject}</span> },
  { key: "class", header: "Class", sortable: true, cell: (row: Exam) => `Class ${row.class}` },
  {
    key: "date",
    header: "Date",
    sortable: true,
    cell: (row: Exam) => (
      <div className="flex items-center gap-1.5">
        <Calendar className="size-3.5 text-muted-foreground" />
        <span>{new Date(row.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
      </div>
    ),
  },
  {
    key: "startTime",
    header: "Time",
    cell: (row: Exam) => <span className="text-xs">{row.startTime} — {row.endTime}</span>,
  },
  { key: "room", header: "Room" },
  {
    key: "maxMarks",
    header: "Max Marks",
    sortable: true,
    cell: (row: Exam) => <span className="font-mono font-bold">{row.maxMarks}</span>,
  },
]

export default function ExamSchedulePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Exam Schedule" description="View and manage upcoming examination schedules.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Create Exam
        </Button>
      </PageHeader>

      <DataTable
        data={exams as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="subject"
        searchPlaceholder="Search by subject..."
      />
    </div>
  )
}
