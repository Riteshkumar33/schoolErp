"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { subjects, type Subject } from "~/lib/mock-data"

const columns = [
  { key: "code", header: "Code", sortable: true, cell: (row: Subject) => <span className="font-mono text-xs font-bold">{row.code}</span> },
  { key: "name", header: "Subject Name", sortable: true, cell: (row: Subject) => <span className="font-medium">{row.name}</span> },
  { key: "type", header: "Type", cell: (row: Subject) => <StatusBadge status={row.type} /> },
  {
    key: "teachers",
    header: "Teachers",
    cell: (row: Subject) => (
      <div className="flex flex-wrap gap-1">
        {row.teachers.map((t) => (
          <span key={t} className="rounded bg-muted px-2 py-0.5 text-xs">{t}</span>
        ))}
      </div>
    ),
  },
  {
    key: "classes",
    header: "Classes",
    cell: (row: Subject) => (
      <span className="text-xs text-muted-foreground">{row.classes.map(c => `Class ${c}`).join(", ")}</span>
    ),
  },
]

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Subjects" description="Manage subjects, assign teachers, and map to classes.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Add Subject
        </Button>
      </PageHeader>

      <DataTable
        data={subjects as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="name"
        searchPlaceholder="Search subjects..."
      />
    </div>
  )
}
