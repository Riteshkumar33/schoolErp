"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import { books, type Book } from "~/lib/mock-data"

const columns = [
  { key: "id", header: "ID", className: "font-mono text-xs" },
  { key: "title", header: "Title", sortable: true, cell: (row: Book) => <span className="font-medium">{row.title}</span> },
  { key: "author", header: "Author", sortable: true },
  { key: "isbn", header: "ISBN", className: "font-mono text-xs" },
  {
    key: "category",
    header: "Category",
    cell: (row: Book) => <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">{row.category}</span>,
  },
  {
    key: "availableCopies",
    header: "Copies",
    sortable: true,
    cell: (row: Book) => (
      <span className="text-xs">
        <span className="font-bold">{row.availableCopies}</span>
        <span className="text-muted-foreground"> / {row.totalCopies}</span>
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    cell: (row: Book) => <StatusBadge status={row.status} />,
  },
]

export default function BooksPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Library — Books" description="Browse and manage the school library catalog.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Add Book
        </Button>
      </PageHeader>

      <DataTable
        data={books as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="title"
        searchPlaceholder="Search by title or author..."
      />
    </div>
  )
}
