"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, MessageCircle, Mail, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { APP_NAME, CONTACT, SITE_NAV_LINKS } from "@/constants"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-7xl min-h-16 items-center gap-2 px-4 py-3 sm:px-6 md:min-h-18 md:gap-3 md:py-0 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.svg"
            alt="Thai Soulmate logo"
            width={40}
            height={40}
            className="size-9 rounded-2xl border border-border/70 bg-background shadow-sm sm:size-10"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-5 sm:text-[15px]">
              {APP_NAME}
            </p>
            <p className="hidden truncate text-xs text-muted-foreground sm:block">
              Private matchmaking with a calmer interface
            </p>
          </div>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-1 md:flex">
          {SITE_NAV_LINKS.map((item) => {
            const active = pathname === item.href

            return (
              <Button
                key={item.href}
                asChild
                variant={active ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "rounded-full px-3",
                  active && "text-foreground"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <div className="hidden items-center gap-2 xl:flex">
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a
                href={CONTACT.whatsappPrimary.href}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" />
                Chat
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <a href={CONTACT.email.href}>
                <Mail className="size-4" />
                Email
              </a>
            </Button>
          </div>

          <ThemeToggle />

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm" className="rounded-full">
                  <Menu className="size-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                {SITE_NAV_LINKS.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    className="cursor-pointer justify-between px-3 py-2.5"
                    onSelect={() => router.push(item.href)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
