"use client"

import { Badge } from "~/components/ui/badge"
import { UserPlus, School, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Get Your Login",
    desc: "Your school admin will provide your login credentials based on your role — teacher, parent, or staff.",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "02",
    icon: School,
    title: "Access Your Dashboard",
    desc: "Log in to see your personalised dashboard — attendance, timetable, fees, results, and more.",
    color: "from-violet-500 to-violet-600",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Stay Connected",
    desc: "Get real-time notifications about school events, fee reminders, and your child's progress.",
    color: "from-emerald-500 to-emerald-600",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary border-primary/20">
            Getting Started
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Simple to{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              get started
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="group relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-8 left-[calc(50%+3rem)] hidden h-px sm:block"
                    style={{ width: "calc(100% - 6rem)" }}
                  >
                    <div className="h-full w-full border-t-2 border-dashed border-border/60" />
                  </div>
                )}

                <div className={`mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg transition-transform group-hover:scale-110`}>
                  <Icon className="size-7" />
                </div>

                <div className="mt-2 inline-flex rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                  STEP {s.step}
                </div>

                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
