"use client"

import { Badge } from "~/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes! Every plan comes with a 14-day free trial — no credit card required. Explore all features before committing.",
  },
  {
    q: "Can I use this for my tuition or coaching centre?",
    a: "Absolutely. SchoolERP works great for coaching centres, tuition classes, and training institutes — not just traditional schools.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes, you can switch plans at any time from your dashboard. Upgrades take effect immediately, and downgrades apply at the end of your billing cycle. No penalties, no lock-ins.",
  },
  {
    q: "How long does setup take?",
    a: "Most schools are up and running in under 5 minutes. Just sign up, add your school name and class structure, and you're ready to go. No technical knowledge needed.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted at rest and in transit using AES-256 and TLS 1.3. We follow industry-standard security practices and your data is never shared with third parties.",
  },
  {
    q: "Do you support multiple branches?",
    a: "Yes. Our School+ and Enterprise plans support multiple branches with a unified admin dashboard and consolidated reporting across all locations.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Pro users get email support with under 4-hour response times. School+ and Enterprise get priority chat and a dedicated account manager.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-5 bg-primary/10 text-primary border-primary/20">
            FAQ
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border/50 bg-card/60 px-6 shadow-lg backdrop-blur-sm"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
