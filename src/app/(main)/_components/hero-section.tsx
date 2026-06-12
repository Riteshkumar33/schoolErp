"use client"

import React from "react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { ArrowRight, LogIn, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[15%] size-2 rounded-full bg-primary/40 animate-bounce [animation-duration:3s]" />
      <div className="absolute top-32 right-[20%] size-1.5 rounded-full bg-chart-2/50 animate-bounce [animation-duration:4s] [animation-delay:1s]" />
      <div className="absolute bottom-40 left-[25%] size-2.5 rounded-full bg-chart-1/30 animate-bounce [animation-duration:5s] [animation-delay:0.5s]" />
      <div className="absolute top-40 right-[10%] size-1 rounded-full bg-chart-4/40 animate-bounce [animation-duration:3.5s] [animation-delay:2s]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill badge */}
          <div className="inline-flex animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge
              variant="outline"
              className="mb-8 gap-2 rounded-full border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
            >
              <Sparkles className="size-3 text-primary" />
              School Management Portal
              <ArrowRight className="size-3 text-muted-foreground" />
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:150ms] text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Welcome to{" "}
            <br className="hidden sm:block" />
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-1 bg-clip-text text-transparent">
                ABC School
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 4"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-30"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 [animation-delay:300ms] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Your complete school management system — attendance, fees, exams,
            timetables, and more — all in{" "}
            <span className="font-medium text-foreground">one place</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 [animation-delay:450ms]">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
              <Link href="/login">
                <LogIn className="mr-2 size-4" />
                Log In to Portal
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base group" asChild>
              <Link href="#modules">
                Explore Modules
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-5 animate-in fade-in duration-700 [animation-delay:600ms] text-xs text-muted-foreground">
            For students, parents, teachers, and administrators
          </p>
        </div>

        {/* Dashboard preview mockup */}
        <div className="mx-auto mt-20 max-w-5xl animate-in fade-in slide-in-from-bottom-16 duration-1000 [animation-delay:700ms]">
          <div className="relative rounded-2xl border border-border/60 bg-card/50 p-2 shadow-2xl shadow-primary/5 backdrop-blur-sm">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border/40">
              <div className="size-2.5 rounded-full bg-red-400" />
              <div className="size-2.5 rounded-full bg-amber-400" />
              <div className="size-2.5 rounded-full bg-emerald-400" />
              <div className="ml-3 h-5 flex-1 max-w-xs rounded bg-muted/50" />
            </div>
            {/* Dashboard skeleton */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Students", value: "1,250", color: "from-blue-500/20 to-blue-500/5" },
                  { label: "Staff", value: "92", color: "from-violet-500/20 to-violet-500/5" },
                  { label: "Revenue", value: "₹12.4L", color: "from-emerald-500/20 to-emerald-500/5" },
                  { label: "Attendance", value: "94.2%", color: "from-amber-500/20 to-amber-500/5" },
                ].map((card) => (
                  <div key={card.label} className={`rounded-xl bg-gradient-to-b ${card.color} border border-border/30 p-3 sm:p-4`}>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{card.label}</p>
                    <p className="text-sm sm:text-xl font-bold mt-1">{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl border border-border/30 bg-muted/20 p-4 h-32 sm:h-40">
                  <div className="flex items-end gap-2 h-full pb-2">
                    {[65, 80, 55, 90, 72, 85, 95, 78, 88, 70, 92, 83].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/20 transition-all" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border/30 bg-muted/20 p-4 space-y-2">
                  {[85, 70, 60, 45].map((w, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-2 rounded-full bg-muted" style={{ width: "60%" }} />
                      <div className="h-3 rounded-full bg-primary/20 overflow-hidden">
                        <div className="h-full rounded-full bg-primary/50" style={{ width: `${w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Reflection gradient */}
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
          {/* Shadow glow under mockup */}
          <div className="mx-auto -mt-8 h-16 w-4/5 rounded-[100%] bg-primary/[0.06] blur-2xl dark:bg-primary/[0.1]" />
        </div>
      </div>
    </section>
  )
}
