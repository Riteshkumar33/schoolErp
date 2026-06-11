"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { StatusBadge } from "~/components/status-badge"
import { Input } from "~/components/ui/input"
import { Mail, Phone, BookOpen, GraduationCap, Search } from "lucide-react"
import { staffMembers, subjects } from "~/lib/mock-data"

export default function TeachersPage() {
  const [search, setSearch] = React.useState("")
  const teachers = staffMembers.filter(
    (s) => ["HOD", "Senior Teacher", "Teacher"].includes(s.designation)
  )
  const filtered = teachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <PageHeader title="Teachers" description="View all teaching staff with their assigned subjects and classes." />

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search teachers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-9"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((teacher) => {
          const teacherSubjects = subjects.filter((s) =>
            s.teachers.includes(teacher.name)
          )
          return (
            <Card key={teacher.id} className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {teacher.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold">{teacher.name}</p>
                      <p className="text-xs text-muted-foreground">{teacher.designation} — {teacher.department}</p>
                    </div>
                  </div>
                  <StatusBadge status={teacher.status} />
                </div>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="size-3.5" />
                    <span className="text-xs">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-3.5" />
                    <span className="text-xs">{teacher.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-3.5" />
                    <span className="text-xs">{teacher.contact}</span>
                  </div>
                </div>

                {teacherSubjects.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
                      <BookOpen className="size-3" /> Subjects
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {teacherSubjects.map((s) => (
                        <span key={s.id} className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary font-medium">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
