"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { GraduationCap, Lock, Mail, Building2, User, Eye, EyeOff, Loader2, ArrowRight, Sparkles } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [schoolName, setSchoolName] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSchoolNameChange = (name: string) => {
    setSchoolName(name);
    // Auto-generate clean tenant ID suggestion from school name
    const suggestedSlug = name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 30);
    setTenantId(suggestedSlug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!schoolName.trim() || !tenantId.trim() || !adminName.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate registration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Store locally
      localStorage.setItem("tenantId", tenantId.trim());
      localStorage.setItem("schoolName", schoolName.trim());
      
      // Redirect to login page or dashboard
      router.push("/login?registered=true");
    } catch (err: any) {
      setError(err?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-lg space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <GraduationCap className="size-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              SchoolERP
            </span>
          </Link>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Get started with SchoolERP
          </h2>
          <p className="text-sm text-muted-foreground">
            Register your institution and create your dashboard space
          </p>
        </div>

        <Card className="border-border/50 bg-background/60 backdrop-blur-xl shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg font-medium">Create School Space</CardTitle>
            <CardDescription>
              Set up your custom tenant subdomain and administrator account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-lg bg-destructive/10 p-3 text-xs font-medium text-destructive dark:bg-destructive/20">
                  {error}
                </div>
              )}

              {/* School Name & Tenant ID row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name</Label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 text-muted-foreground">
                      <Building2 className="size-4" />
                    </div>
                    <Input
                      id="schoolName"
                      placeholder="e.g. Acme High School"
                      value={schoolName}
                      onChange={(e) => handleSchoolNameChange(e.target.value)}
                      className="pl-9 h-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tenantId" className="flex items-center gap-1">
                    Desired Tenant ID
                    <Sparkles className="size-3 text-violet-500 animate-pulse" />
                  </Label>
                  <Input
                    id="tenantId"
                    placeholder="e.g. acme-high"
                    value={tenantId}
                    onChange={(e) => setTenantId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                    className="h-10 font-mono text-xs"
                    required
                  />
                  <p className="text-[10px] text-muted-foreground">
                    Only lowercase letters, numbers, and dashes.
                  </p>
                </div>
              </div>

              {/* Admin Name */}
              <div className="space-y-2">
                <Label htmlFor="adminName">Administrator Name</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-muted-foreground">
                    <User className="size-4" />
                  </div>
                  <Input
                    id="adminName"
                    placeholder="e.g. John Doe"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className="pl-9 h-10"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email address</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-muted-foreground">
                    <Mail className="size-4" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@school.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 h-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Security Password</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-muted-foreground">
                    <Lock className="size-4" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 pr-10 h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-muted-foreground hover:text-foreground focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full h-10 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white font-medium" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering Space...
                  </>
                ) : (
                  <>
                    Register Institution
                    <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>

              <div className="text-center text-xs text-muted-foreground">
                Already have a school space?{" "}
                <Link href="/login" className="font-semibold text-primary hover:underline">
                  Log in to your portal
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
