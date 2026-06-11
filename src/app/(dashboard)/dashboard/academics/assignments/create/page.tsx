"use client"

import React from "react"
import Link from "next/link"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"
import { ChevronLeft, Save, CheckCheck, Plus, Trash2, Upload, Calendar, BookOpen } from "lucide-react"

export default function CreateAssignmentPage() {
  const [saved, setSaved] = React.useState(false)
  const [title, setTitle] = React.useState("")
  const [subject, setSubject] = React.useState("Mathematics")
  const [selectedClass, setSelectedClass] = React.useState("10-A")
  const [dueDate, setDueDate] = React.useState("")
  const [maxMarks, setMaxMarks] = React.useState("100")
  const [description, setDescription] = React.useState("")
  const [instructions, setInstructions] = React.useState("")
  const [attachments, setAttachments] = React.useState<string[]>([])

  const subjects = ["Mathematics", "Science", "English", "Hindi", "Social Studies", "Computer Science", "Art", "Physical Education"]
  const classes = ["1-A", "1-B", "2-A", "2-B", "3-A", "4-A", "5-A", "6-A", "6-B", "7-A", "7-B", "8-A", "8-B", "9-A", "9-B", "10-A", "10-B"]

  const handleSave = (draft: boolean) => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const addAttachment = () => {
    setAttachments((prev) => [...prev, `reference_doc_${prev.length + 1}.pdf`])
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Create Assignment" description="Draft a new assignment for your class.">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard/academics/assignments"><ChevronLeft className="mr-1 size-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleSave(true)}>
          Save as Draft
        </Button>
        <Button size="sm" onClick={() => handleSave(false)} className={cn("transition-all", saved && "bg-emerald-600 hover:bg-emerald-700")}>
          {saved ? <><CheckCheck className="mr-2 size-4" /> Published!</> : <><Save className="mr-2 size-4" /> Publish</>}
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Assignment Details</CardTitle>
              <CardDescription>Basic information about the assignment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Title *</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Quadratic Equations — Problem Set" className="h-10" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a brief description of the assignment..."
                  rows={3}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Instructions</label>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Step-by-step instructions for students..."
                  rows={4}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Attachments</CardTitle>
              <CardDescription>Reference materials, worksheets, or resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {attachments.length === 0 ? (
                <div className="rounded-lg border-2 border-dashed p-8 text-center">
                  <Upload className="mx-auto size-8 text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground">No attachments yet</p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">Add worksheets, PDFs, or reference images</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {attachments.map((file, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded bg-red-500/10">
                          <BookOpen className="size-4 text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file}</p>
                          <p className="text-[10px] text-muted-foreground">PDF • 245 KB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-red-500 hover:text-red-600 hover:bg-red-500/10" onClick={() => setAttachments((p) => p.filter((_, j) => j !== i))}>
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              <Button variant="outline" size="sm" onClick={addAttachment}>
                <Plus className="mr-2 size-4" /> Add Attachment
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Config */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Subject *</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className="h-9 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Class *</label>
                <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="h-9 w-full rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  {classes.map((c) => <option key={c} value={c}>Class {c}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1"><Calendar className="size-3" /> Due Date *</label>
                <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="h-9" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Max Marks</label>
                <Input type="number" value={maxMarks} onChange={(e) => setMaxMarks(e.target.value)} min={0} max={200} className="h-9" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Allow late submissions", defaultChecked: false },
                { label: "Allow resubmission", defaultChecked: true },
                { label: "Notify students via email", defaultChecked: true },
                { label: "Notify parents", defaultChecked: false },
                { label: "Show marks to students", defaultChecked: true },
              ].map((opt) => (
                <label key={opt.label} className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked={opt.defaultChecked} className="h-4 w-4 rounded border-muted-foreground/30 accent-primary" />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardContent className="p-4 text-center space-y-2">
              <p className="text-xs text-muted-foreground">Assignment will be visible to <strong>35 students</strong> in Class {selectedClass}</p>
              <Button className="w-full" onClick={() => handleSave(false)}>
                <Save className="mr-2 size-4" /> Publish Assignment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
