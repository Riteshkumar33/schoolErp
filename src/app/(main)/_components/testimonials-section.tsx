"use client"

import { Badge } from "~/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We switched from Excel sheets to SchoolERP in one afternoon. Fee collection alone saves us 40 hours a month now.",
    author: "Priya Mehta",
    role: "Principal",
    school: "Delhi Public School",
    initials: "PM",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    quote: "Parents love that they can check attendance and pay fees from their phone. Our office enquiry calls dropped by 60%.",
    author: "James Okafor",
    role: "Admin Head",
    school: "Greenfield Academy",
    initials: "JO",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    quote: "Setting up took 10 minutes. No IT team, no training needed. Our teachers picked it up on day one. Best decision we made this year.",
    author: "Ananya Sharma",
    role: "Director",
    school: "Sunrise International",
    initials: "AS",
    gradient: "from-emerald-500 to-emerald-600",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary border-primary/20">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              schools & educators
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group relative rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="size-8 text-primary/15 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-white text-xs font-bold shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
