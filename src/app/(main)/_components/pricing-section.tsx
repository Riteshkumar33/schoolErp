"use client"

import Link from "next/link"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For small schools up to 300 students",
    features: ["Up to 300 students", "Academics & Attendance", "Fee Management", "Email Notifications", "Standard Support"],
    cta: "Start Free Trial",
    highlighted: false,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    name: "Growth",
    price: "$89",
    period: "/month",
    description: "For growing schools up to 1,500 students",
    features: ["Up to 1,500 students", "All Starter features", "HR & Payroll", "Parent Portal", "SMS + Email alerts", "Priority Support"],
    cta: "Start Free Trial",
    highlighted: true,
    gradient: "from-primary/15 to-primary/5",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions and school chains",
    features: ["Unlimited students", "All Growth features", "Multi-branch support", "Custom integrations", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
    gradient: "from-violet-500/10 to-transparent",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary border-primary/20">
            Pricing
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            No hidden fees. Switch plans anytime.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "z-10 border-primary/50 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border/50 hover:shadow-lg"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1 px-3 py-1 text-xs shadow-lg shadow-primary/20">
                    <Sparkles className="size-3" /> Most Popular
                  </Badge>
                </div>
              )}

              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${plan.gradient} pointer-events-none`} />

              <div className="relative flex flex-1 flex-col p-6">
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={cn(
                    "mt-8 w-full",
                    plan.highlighted && "shadow-md shadow-primary/20"
                  )}
                  asChild
                >
                  <Link
                    href={plan.name === "Enterprise" ? "#contact" : "/register"}
                    className="inline-flex items-center justify-center gap-1"
                  >
                    {plan.cta}
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
