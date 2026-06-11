"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { feeStructures, type FeeStructure } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", className: "font-mono text-xs" },
  { key: "class", header: "Class", sortable: true, cell: (row: FeeStructure) => row.class === "All" ? <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary font-medium">All Classes</span> : `Class ${row.class}` },
  { key: "feeType", header: "Fee Type", sortable: true, cell: (row: FeeStructure) => <span className="font-medium">{row.feeType}</span> },
  {
    key: "amount",
    header: "Amount",
    sortable: true,
    cell: (row: FeeStructure) => <span className="font-mono font-bold">₹{row.amount.toLocaleString("en-IN")}</span>,
  },
  {
    key: "frequency",
    header: "Frequency",
    cell: (row: FeeStructure) => (
      <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">{row.frequency}</span>
    ),
  },
  { key: "dueDate", header: "Due Date" },
]

export default function FeeStructurePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Fee Structure" description="Define and manage fee types, amounts, and schedules for each class.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Add Fee Type
        </Button>
      </PageHeader>

      <DataTable
        data={feeStructures as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="feeType"
        searchPlaceholder="Search fee types..."
      />
    </div>
  )
}
