import Link from "next/link"
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { APP_NAME, APP_TAGLINE, CONTACT } from "@/constants"

const features = [
  {
    title: "Curated introductions",
    description:
      "Private matchmaking with careful screening and a focused client experience.",
    icon: HeartHandshake,
  },
  {
    title: "Quiet discretion",
    description:
      "The interface keeps the spotlight on clarity, not decoration, so the service feels premium and calm.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive by default",
    description:
      "The layout stays readable and usable on small, medium, and large screens.",
    icon: Sparkles,
  },
]

export default function Page() {
  return (
    <div className="bg-background">
      <section className="border-b border-border/60 bg-gradient-to-b from-muted/45 via-background to-background">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:px-8 lg:py-20">
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {APP_TAGLINE}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {APP_NAME}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              A cleaner, quieter home for private matchmaking, policy pages,
              and direct contact channels that work well on every screen size.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/privacy-policy">
                  View privacy policy
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={CONTACT.whatsappPrimary.href} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
            <div className="grid gap-3">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-border/60 bg-background p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-sm font-semibold">{feature.title}</h2>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              About
            </p>
            <p className="mt-3 text-lg font-semibold">A private matchmaking brand with a calmer web presence</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The site keeps the experience clear, compact, and easy to scan on
              every screen size.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </p>
            <p className="mt-3 text-lg font-semibold">Direct contact by WhatsApp and email</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Contact details live in constants so the header, footer, and pages
              stay in sync.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm md:col-span-2 xl:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Service
            </p>
            <p className="mt-3 text-lg font-semibold">Curated introductions and relationship support</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The layout is designed for practical use, not filler content.
            </p>
          </div>
        </div>
      </section>

      <section id="service" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Service
            </p>
            <p className="mt-3 text-lg font-semibold">Private, structured matchmaking</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Built to support a premium service presentation without the usual
              clutter.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Support
            </p>
            <p className="mt-3 text-lg font-semibold">Reach us directly</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Contact details live in the constants file and flow through the
              header, footer, and policy pages.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm md:col-span-2 xl:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Legal
            </p>
            <p className="mt-3 text-lg font-semibold">Terms and privacy are easy to find</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The redesigned policy pages are built to stay readable on mobile,
              tablet, and desktop.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] rounded-3xl border border-border/70 bg-gradient-to-br from-muted/70 to-background shadow-sm" />
          <div className="aspect-[4/3] rounded-3xl border border-border/70 bg-gradient-to-br from-background to-muted/70 shadow-sm" />
          <div className="aspect-[4/3] rounded-3xl border border-border/70 bg-gradient-to-br from-muted/70 to-background shadow-sm" />
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={CONTACT.whatsappPrimary.href} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={CONTACT.email.href}>
                <ArrowRight className="size-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
