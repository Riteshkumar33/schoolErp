"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatCard } from "~/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Download, GraduationCap, TrendingUp, Award, BookOpen } from "lucide-react"
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"

const passRateByClass = [
  { class: "1", rate: 99.2 }, { class: "2", rate: 98.5 }, { class: "3", rate: 97.8 },
  { class: "4", rate: 96.1 }, { class: "5", rate: 97.0 }, { class: "6", rate: 95.3 },
  { class: "7", rate: 93.8 }, { class: "8", rate: 94.5 }, { class: "9", rate: 91.2 },
  { class: "10", rate: 92.7 },
]

const subjectPerformance = [
  { subject: "Math", avg: 78, highest: 99, lowest: 32 },
  { subject: "Science", avg: 82, highest: 98, lowest: 38 },
  { subject: "English", avg: 85, highest: 100, lowest: 45 },
  { subject: "Hindi", avg: 80, highest: 97, lowest: 35 },
  { subject: "SST", avg: 76, highest: 95, lowest: 30 },
  { subject: "CS", avg: 88, highest: 100, lowest: 52 },
]

const termTrend = [
  { term: "Term 1 2024", avgGPA: 3.2 },
  { term: "Term 2 2024", avgGPA: 3.3 },
  { term: "Term 1 2025", avgGPA: 3.4 },
  { term: "Term 2 2025", avgGPA: 3.5 },
  { term: "Term 1 2026", avgGPA: 3.6 },
]

const toppers = [
  { rank: 1, name: "Ishita Banerjee", class: "10-A", gpa: 4.0, pct: 98.4 },
  { rank: 2, name: "Saanvi Joshi", class: "10-A", gpa: 3.95, pct: 97.2 },
  { rank: 3, name: "Aarav Sharma", class: "10-A", gpa: 3.9, pct: 96.8 },
  { rank: 4, name: "Priya Patel", class: "9-A", gpa: 3.88, pct: 96.1 },
  { rank: 5, name: "Meera Nair", class: "9-A", gpa: 3.85, pct: 95.5 },
]

const tt = { backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }

export default function AcademicReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Academic Reports" description="Performance analytics across all classes, subjects, and terms.">
        <Button variant="outline" size="sm"><Download className="mr-2 size-4" /> Export PDF</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Avg. Pass Rate" value="96.4%" icon={GraduationCap} trend={{ value: 2.1, label: "vs last year" }} accentColor="text-emerald-500" />
        <StatCard title="School Avg." value="81.2%" icon={TrendingUp} trend={{ value: 3.4, label: "vs last term" }} accentColor="text-blue-500" />
        <StatCard title="Distinction %" value="24.6%" icon={Award} accentColor="text-violet-500" description="Above 90% marks" />
        <StatCard title="Subjects Offered" value="12" icon={BookOpen} accentColor="text-amber-500" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pass Rate by Class</CardTitle>
            <CardDescription>Percentage of students passing in each class</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={passRateByClass} barSize={32}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="class" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" tickFormatter={(v) => `Cl.${v}`} />
                  <YAxis domain={[85, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Bar dataKey="rate" name="Pass Rate %" fill="hsl(250, 65%, 60%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Subject Performance</CardTitle>
            <CardDescription>Average, highest, and lowest marks per subject</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformance} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                  <XAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Legend />
                  <Bar dataKey="highest" name="Highest" fill="hsl(170, 55%, 45%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="avg" name="Average" fill="hsl(250, 65%, 60%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="lowest" name="Lowest" fill="hsl(0, 70%, 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">GPA Trend Over Terms</CardTitle>
            <CardDescription>Average school GPA progression</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={termTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="term" tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <YAxis domain={[3, 4]} tick={{ fill: "hsl(var(--muted-foreground))" }} className="text-xs" />
                  <Tooltip contentStyle={tt} />
                  <Line type="monotone" dataKey="avgGPA" name="Avg GPA" stroke="hsl(250, 65%, 60%)" strokeWidth={2.5} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Top Performers</CardTitle>
            <CardDescription>Highest-scoring students this term</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {toppers.map((s) => (
                <div key={s.rank} className="flex items-center gap-3 rounded-lg p-2.5 hover:bg-muted/30 transition-colors">
                  <div className={`flex size-9 items-center justify-center rounded-full font-bold text-sm ${s.rank <= 3 ? "bg-amber-500/15 text-amber-600" : "bg-muted text-muted-foreground"}`}>
                    #{s.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-muted-foreground">Class {s.class} • GPA {s.gpa}</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{s.pct}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
