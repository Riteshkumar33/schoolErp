"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { UserPlus, Download } from "lucide-react"
import { parents, type Parent } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", sortable: true, className: "font-mono text-xs" },
  {
    key: "name",
    header: "Parent Name",
    sortable: true,
    cell: (row: Parent) => (
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-500">
          {row.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="font-medium">{row.name}</p>
          <p className="text-xs text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "children",
    header: "Children",
    cell: (row: Parent) => (
      <div className="flex flex-wrap gap-1">
        {row.children.map((c) => (
          <span key={c} className="rounded bg-muted px-2 py-0.5 text-xs">{c}</span>
        ))}
      </div>
    ),
  },
  { key: "contact", header: "Contact" },
  { key: "occupation", header: "Occupation", sortable: true },
  {
    key: "portalStatus",
    header: "Portal Status",
    cell: (row: Parent) => <StatusBadge status={row.portalStatus} />,
  },
]

export default function ParentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Parent Directory" description="Manage parent information and portal access.">
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" /> Export
        </Button>
        <Button size="sm">
          <UserPlus className="mr-2 size-4" /> Add Parent
        </Button>
      </PageHeader>

      <DataTable
        data={parents as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="name"
        searchPlaceholder="Search parents by name..."
      />
    </div>
  )
}
