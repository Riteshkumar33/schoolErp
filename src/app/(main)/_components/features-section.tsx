"use client"

import { Badge } from "~/components/ui/badge"
import { GraduationCap, Users, IndianRupee, BarChart3, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Management",
    description: "Manage curricula, timetables, classes, and academic calendars with ease.",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Users,
    title: "Student & Staff Records",
    description: "Centralised profiles for every student, teacher, and staff member.",
    gradient: "from-violet-500/20 to-violet-600/5",
    iconBg: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: IndianRupee,
    title: "Fee & Finance",
    description: "Automate fee collection, generate invoices, and track payments in real time.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Gain instant insights with customisable dashboards and exportable reports.",
    gradient: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Send SMS, email, and in-app alerts to parents, students, and staff.",
    gradient: "from-pink-500/20 to-pink-600/5",
    iconBg: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Granular permissions ensure every user only sees what they need.",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconBg: "bg-cyan-500/10 text-cyan-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-5 bg-primary/10 text-primary border-primary/20"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Everything your school{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              needs
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Purpose-built tools that work together seamlessly, replacing a
            patchwork of spreadsheets and legacy software.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-border"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${f.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative">
                  <div className={`flex size-12 items-center justify-center rounded-xl ${f.iconBg} transition-transform group-hover:scale-110`}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
