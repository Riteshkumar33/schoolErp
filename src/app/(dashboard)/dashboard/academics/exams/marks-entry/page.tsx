"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { Save, CheckCheck, Search, ChevronLeft } from "lucide-react"
import Link from "next/link"

const subjects = ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Computer Science"]
const classOptions = ["10-A", "10-B", "9-A", "9-B", "8-A", "8-B"]
const examOptions = ["Mid-Term 2026", "Unit Test 2", "Half-Yearly 2025"]

const studentMarks = [
  { rollNo: "101", name: "Aarav Sharma", maxMarks: 100, marks: null as number | null },
  { rollNo: "102", name: "Priya Patel", maxMarks: 100, marks: null as number | null },
  { rollNo: "103", name: "Rahul Verma", maxMarks: 100, marks: null as number | null },
  { rollNo: "104", name: "Ananya Gupta", maxMarks: 100, marks: null as number | null },
  { rollNo: "105", name: "Arjun Singh", maxMarks: 100, marks: null as number | null },
  { rollNo: "106", name: "Diya Reddy", maxMarks: 100, marks: null as number | null },
  { rollNo: "107", name: "Kabir Khan", maxMarks: 100, marks: null as number | null },
  { rollNo: "108", name: "Meera Nair", maxMarks: 100, marks: null as number | null },
  { rollNo: "109", name: "Rohan Das", maxMarks: 100, marks: null as number | null },
  { rollNo: "110", name: "Saanvi Joshi", maxMarks: 100, marks: null as number | null },
  { rollNo: "111", name: "Vivaan Mehta", maxMarks: 100, marks: null as number | null },
  { rollNo: "112", name: "Ishita Banerjee", maxMarks: 100, marks: null as number | null },
]

export default function MarksEntryPage() {
  const [selectedClass, setSelectedClass] = React.useState("10-A")
  const [selectedSubject, setSelectedSubject] = React.useState("Mathematics")
  const [selectedExam, setSelectedExam] = React.useState("Mid-Term 2026")
  const [search, setSearch] = React.useState("")
  const [saved, setSaved] = React.useState(false)

  const [marks, setMarks] = React.useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    studentMarks.forEach((s) => {
      init[s.rollNo] = ""
    })
    return init
  })

  const updateMark = (rollNo: string, value: string) => {
    const num = parseInt(value)
    if (value === "" || (!isNaN(num) && num >= 0 && num <= 100)) {
      setMarks((prev) => ({ ...prev, [rollNo]: value }))
      setSaved(false)
    }
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const filtered = studentMarks.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const filled = Object.values(marks).filter((v) => v !== "").length
  const total = studentMarks.length
  const avg = filled > 0
    ? Math.round(Object.values(marks).filter((v) => v !== "").reduce((s, v) => s + parseInt(v), 0) / filled)
    : 0

  return (
    <div className="space-y-6">
      <PageHeader title="Marks Entry" description="Enter exam marks for students subject-wise.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/exams"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button size="sm" onClick={handleSave} className={cn("transition-all", saved && "bg-emerald-600 hover:bg-emerald-700")}>
          {saved ? <><CheckCheck className="mr-2 size-4" /> Saved!</> : <><Save className="mr-2 size-4" /> Save Marks</>}
        </Button>
      </PageHeader>

      {/* Selectors */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Exam</label>
          <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {examOptions.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Class</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {classOptions.map((c) => <option key={c} value={c}>Class {c}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Subject</label>
          <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="h-9 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1">Total: {total}</Badge>
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 px-3 py-1">Filled: {filled}/{total}</Badge>
        {filled > 0 && <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 px-3 py-1">Avg: {avg}/100</Badge>}
        <div className="flex-1" />
        <div className="h-2.5 w-32 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-emerald-500 transition-all duration-300" style={{ width: `${(filled / total) * 100}%` }} />
        </div>
        <span className="text-xs font-bold">{Math.round((filled / total) * 100)}%</span>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search students..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
      </div>

      {/* Marks Table */}
      <Card>
        <CardContent className="p-0">
          <div className="flex items-center border-b bg-muted/40 px-5 py-2.5 text-xs font-medium text-muted-foreground">
            <span className="w-12">#</span>
            <span className="w-20">Roll No</span>
            <span className="flex-1">Student Name</span>
            <span className="w-24 text-center">Max Marks</span>
            <span className="w-32 text-center">Marks Obtained</span>
            <span className="w-20 text-center">Grade</span>
          </div>
          <div className="divide-y">
            {filtered.map((student, idx) => {
              const mark = marks[student.rollNo]
              const num = mark !== "" ? parseInt(mark) : null
              const grade = num === null ? "—" : num >= 90 ? "A+" : num >= 80 ? "A" : num >= 70 ? "B+" : num >= 60 ? "B" : num >= 50 ? "C" : num >= 40 ? "D" : "F"
              const gradeColor = grade === "A+" || grade === "A" ? "text-emerald-600" : grade === "B+" || grade === "B" ? "text-blue-600" : grade === "C" ? "text-amber-600" : grade === "F" ? "text-red-600" : "text-muted-foreground"
              return (
                <div key={student.rollNo} className={cn("flex items-center px-5 py-3 transition-colors", mark !== "" ? "hover:bg-muted/20" : "bg-amber-500/[0.02]")}>
                  <span className="w-12 text-xs text-muted-foreground font-mono">{idx + 1}</span>
                  <span className="w-20 text-xs font-mono font-bold">{student.rollNo}</span>
                  <div className="flex-1 flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      {student.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium">{student.name}</span>
                  </div>
                  <span className="w-24 text-center text-xs text-muted-foreground">{student.maxMarks}</span>
                  <div className="w-32 flex justify-center">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={mark}
                      onChange={(e) => updateMark(student.rollNo, e.target.value)}
                      placeholder="—"
                      className={cn(
                        "h-8 w-20 rounded-md border bg-background px-2 text-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
                        mark === "" && "border-dashed"
                      )}
                    />
                  </div>
                  <span className={cn("w-20 text-center text-sm font-bold", gradeColor)}>{grade}</span>
                </div>
              )
            })}
          </div>

          {filtered.length > 0 && (
            <div className="border-t px-5 py-3 flex items-center justify-between bg-muted/20">
              <span className="text-xs text-muted-foreground">{filled} of {total} marks entered</span>
              <Button size="sm" onClick={handleSave} className={cn("transition-all", saved && "bg-emerald-600 hover:bg-emerald-700")}>
                {saved ? <><CheckCheck className="mr-2 size-4" /> Saved!</> : <><Save className="mr-2 size-4" /> Save</>}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
