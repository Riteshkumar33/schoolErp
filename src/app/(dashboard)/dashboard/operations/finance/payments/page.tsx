"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { Button } from "~/components/ui/button"
import { Plus, Download } from "lucide-react"
import { payments, type Payment } from "~/lib/mock-data"

const columns = [
  { key: "receiptNo", header: "Receipt #", sortable: true, cell: (row: Payment) => <span className="font-mono text-xs font-bold">{row.receiptNo}</span> },
  { key: "studentName", header: "Student", sortable: true, cell: (row: Payment) => <span className="font-medium">{row.studentName}</span> },
  {
    key: "amount",
    header: "Amount",
    sortable: true,
    cell: (row: Payment) => <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">₹{row.amount.toLocaleString("en-IN")}</span>,
  },
  {
    key: "method",
    header: "Method",
    cell: (row: Payment) => (
      <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium">{row.method}</span>
    ),
  },
  { key: "date", header: "Date", sortable: true },
  { key: "invoiceRef", header: "Invoice Ref", cell: (row: Payment) => <span className="font-mono text-xs">{row.invoiceRef}</span> },
]

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payments" description="Track all received fee payments and generate receipts.">
        <Button variant="outline" size="sm">
          <Download className="mr-2 size-4" /> Export
        </Button>
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Record Payment
        </Button>
      </PageHeader>

      <DataTable
        data={payments as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="studentName"
        searchPlaceholder="Search by student..."
      />
    </div>
  )
}
