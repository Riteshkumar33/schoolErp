"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { ChevronDown, ChevronUp, BookOpen, CreditCard, Users, Shield, Search } from "lucide-react"
import { cn } from "~/lib/utils"

const faqs = [
  {
    category: "Getting Started",
    icon: BookOpen,
    items: [
      { q: "How do I set up my school profile?", a: "Go to Administration → School Setup → Profile. Fill in your school name, address, board affiliation, and contact details. Don't forget to upload your school logo." },
      { q: "How do I add students and staff?", a: "Navigate to People → Students or Staff & HR. Click 'Add Student' or 'Add Staff' and fill in the required details. You can also bulk import via CSV." },
      { q: "How do I configure the academic year?", a: "Go to Administration → School Setup → Academic Years. Create a new academic year, set start/end dates, and mark it as the current active year." },
    ],
  },
  {
    category: "Fee Management",
    icon: CreditCard,
    items: [
      { q: "How do I set up fee structures?", a: "Go to Operations → Finance → Fee Structure. Create fee types (tuition, transport, lab) for each class with their amounts and frequencies." },
      { q: "How do I generate invoices?", a: "Navigate to Finance → Invoices and click 'Create Invoice'. Select the student, fee type, and period. You can also auto-generate invoices for an entire class." },
      { q: "How do I record a payment?", a: "Go to Finance → Payments → Record Payment. Select the invoice, enter the amount and payment method, then save the receipt." },
    ],
  },
  {
    category: "Attendance",
    icon: Users,
    items: [
      { q: "How do I mark attendance?", a: "Go to Academics → Attendance → Mark Attendance. Select the class and date, then mark each student as Present, Absent, or Late." },
      { q: "Can parents see attendance?", a: "Yes, parents with active portal access can view their child's attendance records from the parent portal." },
    ],
  },
  {
    category: "Account & Security",
    icon: Shield,
    items: [
      { q: "How do I reset a user's password?", a: "Go to Administration → Users & Access → User Management. Find the user and click 'Reset Password'. A reset link will be sent to their email." },
      { q: "How do I set up roles and permissions?", a: "Navigate to Users & Access → Roles & Permissions. Create roles and assign module-level access. Assign roles to users from the User Management page." },
    ],
  },
]

export default function HelpCenterPage() {
  const [search, setSearch] = React.useState("")
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const filteredFaqs = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Help Center"
        description="Find answers to common questions about using SchoolERP."
      />

      <div className="relative max-w-lg">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for help..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-10"
        />
      </div>

      <div className="space-y-6">
        {filteredFaqs.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.category} className="space-y-3">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                <Icon className="size-4" />
                {category.category}
              </h2>
              <div className="space-y-2">
                {category.items.map((item) => {
                  const key = `${category.category}-${item.q}`
                  const isOpen = openItems.has(key)
                  return (
                    <Card key={key} className="overflow-hidden">
                      <button
                        className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/20 transition-colors"
                        onClick={() => toggleItem(key)}
                      >
                        <span className="text-sm font-medium">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="size-4 shrink-0 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                        )}
                      </button>
                      {isOpen && (
                        <CardContent className="border-t bg-muted/10 pt-3 pb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
