"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { classSections, type ClassSection } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", className: "font-mono text-xs" },
  {
    key: "class",
    header: "Class - Section",
    sortable: true,
    cell: (row: ClassSection) => <span className="font-semibold">Class {row.class}-{row.section}</span>,
  },
  { key: "classTeacher", header: "Class Teacher", sortable: true },
  { key: "room", header: "Room" },
  {
    key: "totalStudents",
    header: "Students",
    sortable: true,
    cell: (row: ClassSection) => (
      <div className="flex items-center gap-2">
        <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(row.totalStudents / row.capacity) * 100}%` }}
          />
        </div>
        <span className="text-xs font-medium">{row.totalStudents}/{row.capacity}</span>
      </div>
    ),
  },
]

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Classes & Sections" description="Manage class sections, capacity, and class teacher assignments.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Add Class
        </Button>
      </PageHeader>

      <DataTable
        data={classSections as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="classTeacher"
        searchPlaceholder="Search by class teacher..."
      />
    </div>
  )
}
