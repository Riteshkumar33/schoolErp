"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import {
  Check,
  X,
  Clock,
  Save,
  Search,
  CheckCheck,
  XCircle,
  RotateCcw,
  ChevronLeft,
} from "lucide-react"
import Link from "next/link"
import { students } from "~/lib/mock-data"

type AttendanceStatus = "present" | "absent" | "late"

const classOptions = [
  "1-A", "1-B", "2-A", "2-B", "3-A", "3-B", "4-A", "4-B",
  "5-A", "5-B", "6-A", "6-B", "7-A", "7-B", "8-A", "8-B",
  "9-A", "9-B", "10-A", "10-B",
]

export default function MarkAttendancePage() {
  const [selectedClass, setSelectedClass] = React.useState("10-A")
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toISOString().split("T")[0]
  )
  const [search, setSearch] = React.useState("")
  const [saved, setSaved] = React.useState(false)

  // Filter students by selected class
  const classStudents = students.filter(
    (s) => `${s.class}-${s.section}` === selectedClass
  )

  const [attendance, setAttendance] = React.useState<Record<string, AttendanceStatus>>(() => {
    const init: Record<string, AttendanceStatus> = {}
    students.forEach((s) => {
      init[s.id] = "present"
    })
    return init
  })

  const toggle = (id: string, status: AttendanceStatus) => {
    setAttendance((prev) => ({ ...prev, [id]: status }))
    setSaved(false)
  }

  const markAll = (status: AttendanceStatus) => {
    const updated = { ...attendance }
    classStudents.forEach((s) => {
      updated[s.id] = status
    })
    setAttendance(updated)
    setSaved(false)
  }

  const resetAll = () => {
    const updated = { ...attendance }
    classStudents.forEach((s) => {
      updated[s.id] = "present"
    })
    setAttendance(updated)
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const filteredStudents = classStudents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const present = classStudents.filter((s) => attendance[s.id] === "present").length
  const absent = classStudents.filter((s) => attendance[s.id] === "absent").length
  const late = classStudents.filter((s) => attendance[s.id] === "late").length
  const total = classStudents.length

  const dateFormatted = new Date(selectedDate).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="space-y-6">
      <PageHeader title="Mark Attendance" description={dateFormatted}>
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/attendance">
            <ChevronLeft className="mr-1 size-4" /> Back
          </Link>
        </Button>
        <Button
          size="sm"
          onClick={handleSave}
          className={cn(
            "transition-all",
            saved && "bg-emerald-600 hover:bg-emerald-700"
          )}
        >
          {saved ? (
            <>
              <CheckCheck className="mr-2 size-4" /> Saved!
            </>
          ) : (
            <>
              <Save className="mr-2 size-4" /> Save Attendance
            </>
          )}
        </Button>
      </PageHeader>

      {/* Controls */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="h-9 rounded-md border bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {classOptions.map((c) => (
              <option key={c} value={c}>
                Class {c}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Date</label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="h-9 w-auto"
          />
        </div>
        <div className="flex-1" />
        <div className="flex gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-500/10"
            onClick={() => markAll("present")}
          >
            <CheckCheck className="mr-1.5 size-3.5" /> All Present
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700 hover:bg-red-500/10"
            onClick={() => markAll("absent")}
          >
            <XCircle className="mr-1.5 size-3.5" /> All Absent
          </Button>
          <Button variant="ghost" size="sm" onClick={resetAll}>
            <RotateCcw className="mr-1.5 size-3.5" /> Reset
          </Button>
        </div>
      </div>

      {/* Summary Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs px-3 py-1">
          Total: {total}
        </Badge>
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 text-xs px-3 py-1">
          ✓ Present: {present}
        </Badge>
        <Badge variant="secondary" className="bg-red-500/10 text-red-600 text-xs px-3 py-1">
          ✕ Absent: {absent}
        </Badge>
        <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 text-xs px-3 py-1">
          ◷ Late: {late}
        </Badge>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-32 rounded-full bg-muted overflow-hidden flex">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${total > 0 ? (present / total) * 100 : 0}%` }}
            />
            <div
              className="h-full bg-amber-500 transition-all duration-300"
              style={{ width: `${total > 0 ? (late / total) * 100 : 0}%` }}
            />
            <div
              className="h-full bg-red-500 transition-all duration-300"
              style={{ width: `${total > 0 ? (absent / total) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs font-bold">
            {total > 0 ? Math.round(((present + late) / total) * 100) : 0}%
          </span>
        </div>
      </div>

      {/* Search */}
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

      {/* Student List */}
      <Card>
        <CardContent className="p-0">
          {/* Table Header */}
          <div className="flex items-center border-b bg-muted/40 px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span className="w-12">#</span>
            <span className="flex-1">Student</span>
            <span className="w-20 text-center">Roll No</span>
            <span className="w-20 text-center">Gender</span>
            <span className="w-36 text-center">Mark Attendance</span>
          </div>
          <div className="divide-y">
            {filteredStudents.length === 0 ? (
              <div className="px-5 py-12 text-center text-muted-foreground text-sm">
                {classStudents.length === 0
                  ? `No students found for Class ${selectedClass}.`
                  : "No students match your search."}
              </div>
            ) : (
              filteredStudents.map((student, idx) => {
                const status = attendance[student.id] || "present"
                return (
                  <div
                    key={student.id}
                    className={cn(
                      "flex items-center px-5 py-3 transition-colors",
                      status === "absent"
                        ? "bg-red-500/[0.03]"
                        : status === "late"
                          ? "bg-amber-500/[0.03]"
                          : "hover:bg-muted/20"
                    )}
                  >
                    <span className="w-12 text-xs text-muted-foreground font-mono">{idx + 1}</span>
                    <div className="flex-1 flex items-center gap-3">
                      <div
                        className={cn(
                          "flex size-9 items-center justify-center rounded-full text-xs font-bold transition-colors",
                          status === "present"
                            ? "bg-emerald-500/10 text-emerald-600"
                            : status === "absent"
                              ? "bg-red-500/10 text-red-500"
                              : "bg-amber-500/10 text-amber-600"
                        )}
                      >
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                    <span className="w-20 text-center text-xs font-mono">{student.rollNo}</span>
                    <span className="w-20 text-center text-xs">{student.gender}</span>
                    <div className="w-36 flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => toggle(student.id, "present")}
                        title="Present"
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200",
                          status === "present"
                            ? "bg-emerald-500 text-white border-emerald-500 shadow-sm scale-105"
                            : "hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-600 hover:border-emerald-300"
                        )}
                      >
                        <Check className="size-4" />
                      </button>
                      <button
                        onClick={() => toggle(student.id, "absent")}
                        title="Absent"
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200",
                          status === "absent"
                            ? "bg-red-500 text-white border-red-500 shadow-sm scale-105"
                            : "hover:bg-red-500/10 text-muted-foreground hover:text-red-600 hover:border-red-300"
                        )}
                      >
                        <X className="size-4" />
                      </button>
                      <button
                        onClick={() => toggle(student.id, "late")}
                        title="Late"
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200",
                          status === "late"
                            ? "bg-amber-500 text-white border-amber-500 shadow-sm scale-105"
                            : "hover:bg-amber-500/10 text-muted-foreground hover:text-amber-600 hover:border-amber-300"
                        )}
                      >
                        <Clock className="size-4" />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer */}
          {filteredStudents.length > 0 && (
            <div className="border-t px-5 py-3 flex items-center justify-between bg-muted/20">
              <span className="text-xs text-muted-foreground">
                Showing {filteredStudents.length} of {classStudents.length} students
              </span>
              <Button
                size="sm"
                onClick={handleSave}
                className={cn(
                  "transition-all",
                  saved && "bg-emerald-600 hover:bg-emerald-700"
                )}
              >
                {saved ? (
                  <>
                    <CheckCheck className="mr-2 size-4" /> Saved!
                  </>
                ) : (
                  <>
                    <Save className="mr-2 size-4" /> Save
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
