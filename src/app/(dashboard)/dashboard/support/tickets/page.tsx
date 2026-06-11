"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { tickets, type Ticket } from "~/lib/mock-data"

const columns = [
  { key: "ticketNo", header: "Ticket #", sortable: true, cell: (row: Ticket) => <span className="font-mono text-xs font-bold">{row.ticketNo}</span> },
  { key: "subject", header: "Subject", sortable: true, cell: (row: Ticket) => <span className="font-medium">{row.subject}</span> },
  {
    key: "priority",
    header: "Priority",
    cell: (row: Ticket) => <StatusBadge status={row.priority} />,
  },
  {
    key: "status",
    header: "Status",
    cell: (row: Ticket) => <StatusBadge status={row.status} />,
  },
  { key: "createdBy", header: "Created By", sortable: true },
  { key: "createdAt", header: "Created", sortable: true },
  { key: "updatedAt", header: "Updated", sortable: true },
]

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Support Tickets" description="Track and resolve support requests from users.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> New Ticket
        </Button>
      </PageHeader>

      <DataTable
        data={tickets as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="subject"
        searchPlaceholder="Search tickets..."
      />
    </div>
  )
}
