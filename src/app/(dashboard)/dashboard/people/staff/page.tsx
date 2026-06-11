"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { UserPlus, Download } from "lucide-react"
import { staffMembers, type Staff } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", sortable: true, className: "font-mono text-xs" },
  {
    key: "name",
    header: "Staff Name",
    sortable: true,
    cell: (row: Staff) => (
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-violet-500/10 text-xs font-bold text-violet-500">
          {row.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <p className="font-medium">{row.name}</p>
          <p className="text-xs text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
  },
  { key: "department", header: "Department", sortable: true },
  { key: "designation", header: "Designation", sortable: true },
  { key: "contact", header: "Contact" },
  { key: "qualification", header: "Qualification" },
  {
    key: "salary",
    header: "Salary",
    sortable: true,
    cell: (row: Staff) => <span className="font-mono">₹{row.salary.toLocaleString("en-IN")}</span>,
  },
  {
    key: "status",
    header: "Status",
    cell: (row: Staff) => <StatusBadge status={row.status} />,
  },
]

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Staff Directory" description="Manage all school staff, teachers, and support personnel.">
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" /> Export
        </Button>
        <Button size="sm">
          <UserPlus className="mr-2 size-4" /> Add Staff
        </Button>
      </PageHeader>

      <DataTable
        data={staffMembers as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="name"
        searchPlaceholder="Search staff by name..."
      />
    </div>
  )
}
