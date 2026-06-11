"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatusBadge } from "~/components/status-badge"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Mail, Phone, MapPin, Search } from "lucide-react"
import { students } from "~/lib/mock-data"

export default function StudentProfilesPage() {
  const [search, setSearch] = React.useState("")
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageHeader title="Student Profiles" description="View student profile cards." />

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-9"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((student) => (
          <Card key={student.id} className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 text-sm font-bold text-primary">
                    {student.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-xs text-muted-foreground">Class {student.class}-{student.section} • Roll {student.rollNo}</p>
                  </div>
                </div>
                <StatusBadge status={student.status} />
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="size-3.5" />
                  <span className="truncate text-xs">{student.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5" />
                  <span className="text-xs">{student.contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5" />
                  <span className="truncate text-xs">{student.address}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded bg-muted px-2 py-0.5">{student.gender}</span>
                <span className="text-muted-foreground">Blood: {student.bloodGroup}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
