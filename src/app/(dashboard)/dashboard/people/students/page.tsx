"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { UserPlus, Download } from "lucide-react"
import { students, type Student } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", sortable: true, className: "font-mono text-xs" },
  {
    key: "name",
    header: "Student Name",
    sortable: true,
    cell: (row: Student) => (
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {row.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="font-medium">{row.name}</p>
          <p className="text-xs text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
  },
  { key: "class", header: "Class", sortable: true, cell: (row: Student) => `${row.class}-${row.section}` },
  { key: "rollNo", header: "Roll No", sortable: true },
  { key: "guardian", header: "Guardian", sortable: true },
  { key: "contact", header: "Contact" },
  { key: "gender", header: "Gender" },
  {
    key: "status",
    header: "Status",
    cell: (row: Student) => <StatusBadge status={row.status} />,
  },
]

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Student Directory" description="Manage and view all enrolled students.">
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" /> Export
        </Button>
        <Button size="sm">
          <UserPlus className="mr-2 size-4" /> Add Student
        </Button>
      </PageHeader>

      <DataTable
        data={students as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="name"
        searchPlaceholder="Search students by name..."
      />
    </div>
  )
}
