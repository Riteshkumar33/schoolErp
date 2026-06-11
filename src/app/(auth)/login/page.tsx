"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { GraduationCap, Lock, Mail, Building2, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [tenantId, setTenantId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!tenantId.trim()) {
      setError("School Tenant ID is required");
      setIsLoading(false);
      return;
    }
    if (!email.trim() || !password.trim()) {
      setError("Email and Password are required");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate login and store tenant ID and token
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Store tenant configuration locally
      localStorage.setItem("tenantId", tenantId.trim());
      
      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-md space-y-6">
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
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your portal
          </p>
        </div>

        <Card className="border-border/50 bg-background/60 backdrop-blur-xl shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg font-medium">Log in</CardTitle>
            <CardDescription>
              Choose your school space and enter account details
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-lg bg-destructive/10 p-3 text-xs font-medium text-destructive dark:bg-destructive/20">
                  {error}
                </div>
              )}

              {/* Tenant ID Input */}
              <div className="space-y-2">
                <Label htmlFor="tenantId">School Tenant ID</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-muted-foreground">
                    <Building2 className="size-4" />
                  </div>
                  <Input
                    id="tenantId"
                    placeholder="e.g. acme, school-main"
                    value={tenantId}
                    onChange={(e) => setTenantId(e.target.value)}
                    className="pl-9 h-10"
                    required
                  />
                </div>
                <p className="text-[10px] text-muted-foreground">
                  The unique URL prefix or slug assigned to your school.
                </p>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-muted-foreground">
                    <Mail className="size-4" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@school.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 h-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
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
              <Button type="submit" className="w-full h-10" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging you in...
                  </>
                ) : (
                  <>
                    Log In
                    <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>

              <div className="text-center text-xs text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="font-semibold text-primary hover:underline">
                  Register your school
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
