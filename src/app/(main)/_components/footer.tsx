import Link from "next/link"
import { GraduationCap } from "lucide-react"

const quickLinks = ["Features", "Modules", "Contact", "Log In"]
const resourceLinks = ["Parent Guide", "Teacher Handbook", "Help & Support"]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-16">
      <div className="absolute inset-0 bg-muted/20 dark:bg-muted/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
                <GraduationCap className="size-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight leading-tight">
                Baby Martin <span className="text-primary">International</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Empowering education through technology. Your complete school management portal.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href={l === "Log In" ? "/login" : `#${l.toLowerCase()}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {resourceLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="transition-colors hover:text-foreground">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Baby Martin International School. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by <span className="font-medium text-foreground">SchoolERP</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
