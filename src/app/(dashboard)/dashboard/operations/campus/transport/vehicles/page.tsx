"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { vehicles, type Vehicle } from "~/lib/mock-data"

const columns = [
  {
    key: "vehicleNo",
    header: "Vehicle No",
    sortable: true,
    cell: (row: Vehicle) => <span className="font-mono text-xs font-bold">{row.vehicleNo}</span>,
  },
  {
    key: "type",
    header: "Type",
    cell: (row: Vehicle) => <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">{row.type}</span>,
  },
  { key: "driver", header: "Driver", sortable: true, cell: (row: Vehicle) => <span className="font-medium">{row.driver}</span> },
  { key: "route", header: "Route" },
  {
    key: "capacity",
    header: "Capacity",
    sortable: true,
    cell: (row: Vehicle) => <span className="font-mono">{row.capacity} seats</span>,
  },
  { key: "insurance", header: "Insurance Exp.", sortable: true },
  {
    key: "status",
    header: "Status",
    cell: (row: Vehicle) => <StatusBadge status={row.status} />,
  },
]

export default function VehiclesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Transport — Vehicles" description="Manage school transport fleet, drivers, and routes.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Add Vehicle
        </Button>
      </PageHeader>

      <DataTable
        data={vehicles as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="driver"
        searchPlaceholder="Search by driver name..."
      />
    </div>
  )
}
