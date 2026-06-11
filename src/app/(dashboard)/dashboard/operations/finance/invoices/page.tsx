"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { DataTable } from "~/components/data-table"
import { StatusBadge } from "~/components/status-badge"
import { StatCard } from "~/components/stat-card"
import { Button } from "~/components/ui/button"
import { Plus, FileText, IndianRupee, AlertCircle, CheckCircle } from "lucide-react"
import { invoices, type Invoice } from "~/lib/mock-data"

const columns = [
  { key: "invoiceNo", header: "Invoice #", sortable: true, cell: (row: Invoice) => <span className="font-mono text-xs font-bold">{row.invoiceNo}</span> },
  { key: "studentName", header: "Student", sortable: true, cell: (row: Invoice) => <span className="font-medium">{row.studentName}</span> },
  { key: "class", header: "Class" },
  {
    key: "amount",
    header: "Amount",
    sortable: true,
    cell: (row: Invoice) => <span className="font-mono font-bold">₹{row.amount.toLocaleString("en-IN")}</span>,
  },
  { key: "issueDate", header: "Issue Date", sortable: true },
  { key: "dueDate", header: "Due Date", sortable: true },
  {
    key: "status",
    header: "Status",
    cell: (row: Invoice) => <StatusBadge status={row.status} />,
  },
]

export default function InvoicesPage() {
  const totalAmount = invoices.reduce((s, i) => s + i.amount, 0)
  const paidAmount = invoices.filter(i => i.status === "Paid").reduce((s, i) => s + i.amount, 0)
  const pendingAmount = invoices.filter(i => ["Pending", "Overdue", "Partial"].includes(i.status)).reduce((s, i) => s + i.amount, 0)

  return (
    <div className="space-y-6">
      <PageHeader title="Invoices" description="Generate and manage student fee invoices.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Create Invoice
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Total Invoiced" value={`₹${totalAmount.toLocaleString("en-IN")}`} icon={FileText} accentColor="text-blue-500" />
        <StatCard title="Collected" value={`₹${paidAmount.toLocaleString("en-IN")}`} icon={CheckCircle} accentColor="text-emerald-500" />
        <StatCard title="Outstanding" value={`₹${pendingAmount.toLocaleString("en-IN")}`} icon={AlertCircle} accentColor="text-amber-500" />
      </div>

      <DataTable
        data={invoices as unknown as Record<string, unknown>[]}
        columns={columns as any}
        searchKey="studentName"
        searchPlaceholder="Search by student..."
      />
    </div>
  )
}
