import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  FileText,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { APP_NAME, CONTACT } from "@/constants"



type PolicySection = {
  id: string
  title: string
  summary: string
  paragraphs: string[]
  bullets?: string[]
  note?: string
}

type ContactAction = {
  label: string
  href: string
  icon: "message" | "mail"
}

type PolicyPageProps = {
  eyebrow: string
  title: string
  description: string
  updatedOn: string
  summaryPoints: string[]
  sections: PolicySection[]
  contactTitle: string
  contactDescription: string
  contactActions: ContactAction[]
}

const iconMap = {
  message: MessageCircle,
  mail: Mail,
} as const

function ContactLink({ action }: { action: ContactAction }) {
  const Icon = iconMap[action.icon]
  const isExternal = action.href.startsWith("http")

  return (
    <Button
      asChild
      variant="outline"
      className="h-auto justify-between px-4 py-4"
    >
      <a
        href={action.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
            <Icon className="size-4" />
          </span>
          <span className="flex min-w-0 flex-col items-start">
            <span className="text-sm font-medium">{action.label}</span>
            <span className="truncate text-xs text-muted-foreground">
              {action.href.includes("mailto:")
                ? CONTACT.email
                : CONTACT.whatsapp}
            </span>
          </span>
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground" />
      </a>
    </Button>
  )
}

export function PolicyPage({
  eyebrow,
  title,
  description,
  updatedOn,
  summaryPoints,
  sections,
  contactTitle,
  contactDescription,
  contactActions,
}: PolicyPageProps) {
  return (
    <main className="min-h-svh bg-gradient-to-b from-muted/20 to-background">
      <section className="border-b border-border/70">
        <div className="mx-auto w-full max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ArrowLeft className="size-4" />
            Back to {APP_NAME}
          </Link>

          <header className="mt-8 max-w-3xl sm:mt-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              {eyebrow === "Privacy" ? (
                <ShieldCheck className="size-3.5" />
              ) : (
                <FileText className="size-3.5" />
              )}
              {eyebrow}
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Updated {updatedOn}
            </p>
          </header>

          <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-32">
              <nav
                aria-label={`${title} sections`}
                className="rounded-2xl bg-card/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="px-2 pb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  On this page
                </p>
                <ol className="grid gap-0.5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="flex gap-3 rounded-xl px-2 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      >
                        <span className="font-mono text-xs leading-5 text-primary/80">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>

            </aside>

            <article className="min-w-0 rounded-[2rem] bg-card/78 px-5 py-2 shadow-[0_24px_80px_-52px_color-mix(in_oklch,var(--foreground),transparent_60%)] backdrop-blur-sm sm:px-8 lg:px-10">
              <div className="py-8 sm:py-10">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-muted/40 p-4">
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      Updated
                    </p>
                    <p className="mt-2 text-sm font-medium">{updatedOn}</p>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4">
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      Brand
                    </p>
                    <p className="mt-2 text-sm font-medium">{APP_NAME}</p>
                  </div>
                  <div className="rounded-2xl bg-muted/40 p-4">
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      Contact
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Support by chat and email
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {summaryPoints.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 text-primary" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 py-8 sm:py-10"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-medium text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:transition [&_a:hover]:decoration-primary [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.note ? (
                    <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-sm leading-6 text-muted-foreground">
                      {section.note}
                    </div>
                  ) : null}
                </section>
              ))}

              <section id="contact" className="scroll-mt-32 pt-8 sm:pt-10">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {contactTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {contactDescription}
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {contactActions.map((action) => (
                    <ContactLink key={action.label} action={action} />
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
