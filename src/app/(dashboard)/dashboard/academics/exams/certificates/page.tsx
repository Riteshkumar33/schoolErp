"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import {
  ChevronLeft,
  Plus,
  Search,
  Download,
  Printer,
  Award,
  GraduationCap,
  Medal,
  Trophy,
  Star,
} from "lucide-react"
import Link from "next/link"

interface Certificate {
  id: string
  name: string
  class: string
  type: "Merit" | "Participation" | "Character" | "Transfer" | "Bonafide" | "Achievement"
  description: string
  issuedDate: string | null
  status: "Issued" | "Pending" | "Draft"
}

const certificates: Certificate[] = [
  { id: "CERT-001", name: "Saanvi Joshi", class: "10-A", type: "Merit", description: "Academic Excellence — Rank 1", issuedDate: "Jun 5, 2026", status: "Issued" },
  { id: "CERT-002", name: "Meera Nair", class: "10-A", type: "Merit", description: "Academic Excellence — Rank 2", issuedDate: "Jun 5, 2026", status: "Issued" },
  { id: "CERT-003", name: "Aarav Sharma", class: "10-A", type: "Merit", description: "Academic Excellence — Rank 3", issuedDate: "Jun 5, 2026", status: "Issued" },
  { id: "CERT-004", name: "Ishita Banerjee", class: "10-A", type: "Achievement", description: "Science Olympiad — Gold Medal", issuedDate: "May 20, 2026", status: "Issued" },
  { id: "CERT-005", name: "Priya Patel", class: "9-A", type: "Participation", description: "Inter-School Debate Competition", issuedDate: null, status: "Pending" },
  { id: "CERT-006", name: "Arjun Singh", class: "5-A", type: "Character", description: "Best Student Award — Discipline & Leadership", issuedDate: null, status: "Pending" },
  { id: "CERT-007", name: "Vivaan Mehta", class: "6-B", type: "Transfer", description: "Transfer Certificate — Relocating to Mumbai", issuedDate: null, status: "Draft" },
  { id: "CERT-008", name: "Kabir Khan", class: "7-A", type: "Bonafide", description: "Bonafide Certificate — Passport application", issuedDate: null, status: "Draft" },
]

const typeIcons: Record<string, React.ReactNode> = {
  Merit: <Trophy className="size-5" />,
  Participation: <Star className="size-5" />,
  Character: <Medal className="size-5" />,
  Transfer: <GraduationCap className="size-5" />,
  Bonafide: <Award className="size-5" />,
  Achievement: <Award className="size-5" />,
}

const typeColors: Record<string, string> = {
  Merit: "bg-amber-500/10 text-amber-600",
  Participation: "bg-blue-500/10 text-blue-600",
  Character: "bg-violet-500/10 text-violet-600",
  Transfer: "bg-zinc-500/10 text-zinc-600",
  Bonafide: "bg-cyan-500/10 text-cyan-600",
  Achievement: "bg-emerald-500/10 text-emerald-600",
}

export default function CertificatesPage() {
  const [search, setSearch] = React.useState("")
  const [filter, setFilter] = React.useState<"all" | Certificate["status"]>("all")

  const filtered = certificates.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || c.status === filter
    return matchSearch && matchFilter
  })

  return (
    <div className="space-y-6">
      <PageHeader title="Certificates" description="Generate merit certificates, transfer certificates, and bonafide letters.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button size="sm"><Plus className="mr-2 size-4" /> Issue Certificate</Button>
      </PageHeader>

      <div className="flex flex-wrap items-center gap-3">
        {(["all", "Issued", "Pending", "Draft"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border",
              filter === f
                ? f === "all" ? "bg-primary text-primary-foreground border-primary"
                  : f === "Issued" ? "bg-emerald-500 text-white border-emerald-500"
                  : f === "Pending" ? "bg-amber-500 text-white border-amber-500"
                  : "bg-zinc-500 text-white border-zinc-500"
                : "bg-muted/50 text-muted-foreground hover:bg-muted border-transparent"
            )}
          >
            {f === "all" ? `All (${certificates.length})` : `${f} (${certificates.filter((c) => c.status === f).length})`}
          </button>
        ))}
        <div className="flex-1" />
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert) => (
          <Card key={cert.id} className={cn("transition-all hover:shadow-md hover:-translate-y-0.5", cert.status === "Pending" && "border-l-4 border-l-amber-500")}>
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={cn("flex size-10 items-center justify-center rounded-lg", typeColors[cert.type])}>
                    {typeIcons[cert.type]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{cert.name}</p>
                    <p className="text-[10px] text-muted-foreground">Class {cert.class} • {cert.id}</p>
                  </div>
                </div>
                <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold",
                  cert.status === "Issued" ? "bg-emerald-500/10 text-emerald-600" :
                  cert.status === "Pending" ? "bg-amber-500/10 text-amber-600" :
                  "bg-zinc-500/10 text-zinc-600"
                )}>
                  {cert.status}
                </span>
              </div>

              <div>
                <Badge variant="secondary" className={cn("text-[10px] mb-1.5", typeColors[cert.type])}>{cert.type}</Badge>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>

              {cert.issuedDate && (
                <p className="text-[10px] text-muted-foreground">Issued: {cert.issuedDate}</p>
              )}

              <div className="flex gap-1.5 pt-1 border-t">
                {cert.status === "Issued" ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 h-8 text-xs"><Download className="mr-1 size-3" /> Download</Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Printer className="size-3.5" /></Button>
                  </>
                ) : (
                  <Button size="sm" className="flex-1 h-8 text-xs">
                    <Award className="mr-1 size-3" /> {cert.status === "Pending" ? "Generate" : "Finalize"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
