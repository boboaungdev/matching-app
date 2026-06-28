import Link from "next/link"
import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { APP_NAME, APP_TAGLINE } from "@/constants"

type AuthPageProps = {
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  secondaryHref: string
  footerLinkLabel: string
  footerLinkHref: string
  children: ReactNode
}

export function AuthPage({
  title,
  description,
  primaryCta,
  secondaryCta,
  secondaryHref,
  footerLinkLabel,
  footerLinkHref,
  children,
}: AuthPageProps) {
  return (
    <main className="min-h-[calc(100svh-7rem)] bg-[radial-gradient(circle_at_top,color-mix(in_oklch,var(--primary),transparent_86%),transparent_28%),linear-gradient(180deg,color-mix(in_oklch,var(--background),white_4%)_0%,var(--background)_52%,color-mix(in_oklch,var(--background),var(--secondary)_30%)_100%)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="w-full max-w-xl rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_24px_80px_-52px_color-mix(in_oklch,var(--foreground),transparent_60%)] backdrop-blur-sm sm:p-8">
          <div className="space-y-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              {APP_TAGLINE}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {APP_NAME}
            </h1>
            <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>

          <form className="mt-8 space-y-4">
            {children}

            <Button type="submit" className="w-full rounded-full">
              {primaryCta}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between gap-3 text-sm">
            <Link
              href={secondaryHref}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {secondaryCta}
            </Link>
            <Link
              href={footerLinkHref}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {footerLinkLabel}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
