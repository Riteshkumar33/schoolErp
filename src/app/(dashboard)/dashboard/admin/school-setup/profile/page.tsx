"use client"

import React from "react"
import { PageHeader } from "~/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Building2, Mail, Phone, MapPin, Globe, Save } from "lucide-react"

export default function SchoolProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="School Profile" description="Manage your school's basic information and branding.">
        <Button size="sm">
          <Save className="mr-2 size-4" /> Save Changes
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Building2 className="size-4" /> Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="schoolName">School Name</Label>
              <Input id="schoolName" defaultValue="Delhi Public School" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="affiliation">Board / Affiliation</Label>
              <Input id="affiliation" defaultValue="CBSE — Affiliation No. 2730001" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="established">Year Established</Label>
              <Input id="established" defaultValue="1995" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="principal">Principal</Label>
              <Input id="principal" defaultValue="Dr. Raghav Menon" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motto">School Motto</Label>
              <Input id="motto" defaultValue="Service Before Self" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Mail className="size-4" /> Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="info@dpsschool.edu.in" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+91 11-2634 5678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input id="website" defaultValue="https://www.dpsschool.edu.in" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" defaultValue="Sector 14, R.K. Puram, New Delhi — 110066" rows={3} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
