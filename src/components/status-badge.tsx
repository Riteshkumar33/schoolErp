"use client"

import React from "react"
import { cn } from "~/lib/utils"

interface StatusBadgeProps {
  status: string
  className?: string
}

const statusStyles: Record<string, string> = {
  // Common
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  inactive: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",

  // People
  graduated: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "on leave": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  resigned: "bg-red-500/10 text-red-600 dark:text-red-400",
  suspended: "bg-red-500/10 text-red-600 dark:text-red-400",

  // Finance
  paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  overdue: "bg-red-500/10 text-red-600 dark:text-red-400",
  partial: "bg-amber-500/10 text-amber-600 dark:text-amber-400",

  // Inquiry
  new: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  contacted: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  scheduled: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  converted: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  closed: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",

  // Library
  available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "low stock": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "out of stock": "bg-red-500/10 text-red-600 dark:text-red-400",

  // Vehicle
  maintenance: "bg-amber-500/10 text-amber-600 dark:text-amber-400",

  // Announcement
  published: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  draft: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",

  // Tickets
  open: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "in progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  resolved: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",

  // Priority
  high: "bg-red-500/10 text-red-600 dark:text-red-400",
  medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  low: "bg-blue-500/10 text-blue-600 dark:text-blue-400",

  // Subject types
  core: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  elective: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  lab: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const key = status.toLowerCase()
  const style = statusStyles[key] || "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        style,
        className
      )}
    >
      {status}
    </span>
  )
}
