import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { APP_NAME, CONTACT, SITE_NAV_LINKS, SOCIAL_LINKS } from "@/constants"

const iconMap = {
  message: MessageCircle,
  mail: Mail,
} as const

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Thai Soulmate logo"
                width={44}
                height={44}
                className="size-11 rounded-2xl border border-border/70 bg-background shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold">{APP_NAME}</p>
                <p className="text-sm text-muted-foreground">
                  Private matchmaking, presented with a quieter interface.
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              We keep the experience simple to browse on mobile, easy to scan on
              desktop, and clear enough to reach the right contact channel
              quickly.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Social
              </p>
              <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((item) => {
                const Icon = iconMap[item.icon]

                return (
                  <Button
                    key={item.label}
                    asChild
                    variant="outline"
                    size="icon-sm"
                    className="rounded-full"
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={item.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  </Button>
                )
              })}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Explore
            </p>
            <div className="grid gap-2">
              {SITE_NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm transition-colors hover:bg-muted"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href={CONTACT.whatsappPrimary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href={CONTACT.email.href}>
                  <Mail className="size-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms-of-service" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
