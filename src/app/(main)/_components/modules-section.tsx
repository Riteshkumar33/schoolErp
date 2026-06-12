"use client"

import { Badge } from "~/components/ui/badge"
import {
  BookOpen, Users, IndianRupee, Calendar,
  Building2, ClipboardList, MessageSquare, Layers,
} from "lucide-react"

const modules = [
  { icon: BookOpen, name: "Academics", desc: "Curriculum, timetables, exams, and results", color: "from-blue-500 to-blue-600" },
  { icon: ClipboardList, name: "Attendance", desc: "Biometric & manual attendance tracking", color: "from-emerald-500 to-emerald-600" },
  { icon: IndianRupee, name: "Finance", desc: "Fees, payroll, ledger, and receipts", color: "from-amber-500 to-amber-600" },
  { icon: Users, name: "HR & Payroll", desc: "Staff management and salary processing", color: "from-violet-500 to-violet-600" },
  { icon: MessageSquare, name: "Communication", desc: "Parent portal, notice board, and messaging", color: "from-pink-500 to-pink-600" },
  { icon: Building2, name: "Hostel", desc: "Room allocation, warden management", color: "from-cyan-500 to-cyan-600" },
  { icon: Layers, name: "Library", desc: "Book catalogue, issue/return tracking", color: "from-orange-500 to-orange-600" },
  { icon: Calendar, name: "Events", desc: "School events, holidays, and scheduling", color: "from-indigo-500 to-indigo-600" },
]

export function ModulesSection() {
  return (
    <section id="modules" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary border-primary/20">
            Modules
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            One system,{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              every department
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From attendance to hostel management — every module works together
            so your school runs smoothly.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {modules.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/60 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-border"
              >
                <div className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="size-6" />
                </div>
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
