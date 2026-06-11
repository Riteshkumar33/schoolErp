"use client"

export function LandingPageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background dark:via-muted/10" />

      {/* Primary orb — large, top-center, pulsing gently */}
      <div className="absolute left-1/2 -top-32 h-[min(90vh,52rem)] w-[min(130%,95rem)] -translate-x-1/2 rounded-[100%] bg-primary/[0.08] blur-[100px] dark:bg-primary/[0.15] animate-pulse [animation-duration:8s]" />

      {/* Secondary orb — right side, warm accent */}
      <div className="absolute -right-20 top-[22%] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-chart-2/20 to-chart-3/10 blur-[80px] dark:from-chart-2/30 dark:to-chart-3/15 animate-pulse [animation-duration:6s] [animation-delay:2s]" />

      {/* Tertiary orb — left side, cool accent */}
      <div className="absolute -left-28 top-[50%] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-chart-1/15 to-chart-4/10 blur-[80px] dark:from-chart-1/25 dark:to-chart-4/15 animate-pulse [animation-duration:7s] [animation-delay:1s]" />

      {/* Mid-page horizontal glow */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 h-[20rem] w-[80rem] rounded-[100%] bg-primary/[0.04] blur-[120px] dark:bg-primary/[0.08]" />

      {/* Bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-[min(45vh,28rem)] bg-gradient-to-t from-muted/30 to-transparent dark:from-muted/15" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
        }}
      />
    </div>
  )
}
