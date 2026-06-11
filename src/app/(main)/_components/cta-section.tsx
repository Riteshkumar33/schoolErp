"use client"

import Link from "next/link"
import { Button } from "~/components/ui/button"
import { ArrowRight, Zap, Globe, Lock, HeadphonesIcon } from "lucide-react"

const trustBadges = [
  { icon: Zap, label: "99.9% Uptime" },
  { icon: Globe, label: "Multi-language" },
  { icon: Lock, label: "SOC 2 Compliant" },
  { icon: HeadphonesIcon, label: "24/7 Support" },
]

export function CtaSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-chart-1" />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-[100%] bg-white/10 blur-3xl" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to modernise <br className="hidden sm:block" />
              your school?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75 text-lg">
              Join 500+ institutions already running smarter with SchoolERP. Start
              your free 14-day trial today.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base shadow-lg" asChild>
                <Link href="/register" className="inline-flex items-center justify-center gap-1.5">
                  Get Started Free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary-foreground/30 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="#contact" className="inline-flex items-center justify-center">
                  Talk to Sales
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {trustBadges.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.label} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                    <div className="flex size-7 items-center justify-center rounded-full bg-primary-foreground/10">
                      <Icon className="size-3.5" />
                    </div>
                    {b.label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
