"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { StatusBadge } from "~/components/status-badge"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Plus, Megaphone } from "lucide-react"
import { announcements } from "~/lib/mock-data"

const priorityIcon: Record<string, string> = { High: "🔴", Medium: "🟡", Low: "🔵" }

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Announcements" description="Manage school-wide announcements, circulars, and notices.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> New Announcement
        </Button>
      </PageHeader>

      <div className="space-y-3">
        {announcements.map((ann) => (
          <Card key={ann.id} className="group transition-all duration-200 hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>{priorityIcon[ann.priority]}</span>
                    <h3 className="font-semibold">{ann.title}</h3>
                    <StatusBadge status={ann.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{ann.content}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>By <strong>{ann.author}</strong></span>
                    <span>•</span>
                    <span>{new Date(ann.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span>•</span>
                    <span className="rounded bg-muted px-1.5 py-0.5 font-medium">{ann.target}</span>
                  </div>
                </div>
                <StatusBadge status={ann.priority} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
