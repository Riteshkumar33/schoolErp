"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { UserPlus } from "lucide-react"
import { inquiries, type Inquiry } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", sortable: true, className: "font-mono text-xs" },
  {
    key: "studentName",
    header: "Student Name",
    sortable: true,
    cell: (row: Inquiry) => <span className="font-medium">{row.studentName}</span>,
  },
  { key: "parentName", header: "Parent / Guardian", sortable: true },
  { key: "contact", header: "Contact" },
  { key: "classApplied", header: "Class", sortable: true, cell: (row: Inquiry) => `Class ${row.classApplied}` },
  { key: "date", header: "Inquiry Date", sortable: true },
  {
    key: "source",
    header: "Source",
    cell: (row: Inquiry) => (
      <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">{row.source}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    cell: (row: Inquiry) => <StatusBadge status={row.status} />,
  },
]

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admission Inquiries" description="Track and manage incoming admission inquiries and leads.">
        <Button size="sm">
          <UserPlus className="mr-2 size-4" /> New Inquiry
        </Button>
      </PageHeader>

      <DataTable
        data={inquiries as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="studentName"
        searchPlaceholder="Search by student name..."
      />
    </div>
  )
}
