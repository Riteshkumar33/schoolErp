"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { UserPlus } from "lucide-react"
import { users, type User } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", className: "font-mono text-xs" },
  {
    key: "name",
    header: "Name",
    sortable: true,
    cell: (row: User) => (
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {row.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <p className="font-medium">{row.name}</p>
          <p className="text-xs text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    cell: (row: User) => <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary font-semibold">{row.role}</span>,
  },
  {
    key: "status",
    header: "Status",
    cell: (row: User) => <StatusBadge status={row.status} />,
  },
  { key: "lastLogin", header: "Last Login", sortable: true, cell: (row: User) => <span className="text-xs text-muted-foreground">{row.lastLogin}</span> },
  { key: "createdAt", header: "Created", sortable: true },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="User Management" description="Manage user accounts, roles, and access across the platform.">
        <Button size="sm">
          <UserPlus className="mr-2 size-4" /> Add User
        </Button>
      </PageHeader>

      <DataTable
        data={users as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="name"
        searchPlaceholder="Search users..."
      />
    </div>
  )
}
