"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Plus, Shield, Users } from "lucide-react"
import { roles } from "~/lib/mock-data"

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Roles & Permissions" description="Define roles and control module access for different user types.">
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Create Role
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.id} className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="size-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{role.name}</CardTitle>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="size-3" />
                  <span>{role.usersCount}</span>
                </div>
              </div>
              <CardDescription className="text-xs">{role.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs font-medium text-muted-foreground mb-2">Permissions</p>
              <div className="flex flex-wrap gap-1.5">
                {role.permissions.map((perm) => (
                  <Badge key={perm} variant="secondary" className="text-xs font-normal">
                    {perm}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
