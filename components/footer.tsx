import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { APP_NAME, CONTACT } from "@/constants"

const SITE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Service", href: "/#service" },
  { label: "Gallery", href: "/#gallery" },
] as const

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}`,
    icon: "message",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: "mail",
  },
] as const

const iconMap = {
  message: MessageCircle,
  mail: Mail,
} as const

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={`${APP_NAME} logo`}
                width={72}
                height={72}
                className="size-11 shrink-0 rounded-2xl bg-background object-cover shadow-sm"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{APP_NAME}</p>
                <p className="truncate text-sm text-muted-foreground">
                  One to One Matchmaking
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              We keep the experience simple to browse on mobile, easy to scan on
              desktop, and clear enough to reach the right contact channel
              quickly.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="size-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright &copy; {new Date().getFullYear()} {APP_NAME}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
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
