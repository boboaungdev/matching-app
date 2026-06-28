"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, ArrowUpRight, LogIn, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

import { APP_NAME, APP_TAGLINE, SITE_NAV_LINKS } from "@/constants"
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
            src="/logo.png"
            alt={`${APP_NAME} logo`}
            width={72}
            height={72}
            className="size-10 shrink-0 rounded-2xl border border-border/70 bg-background object-cover shadow-sm sm:size-11"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-5 sm:text-[15px]">
              {APP_NAME}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {APP_TAGLINE}
            </p>
          </div>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-1 lg:flex">
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
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link href="/sign-in">
                <LogIn className="size-4" />
                Sign in
              </Link>
            </Button>
            <Button asChild size="sm" className="rounded-full">
              <Link href="/sign-up">
                <UserPlus className="size-4" />
                Sign up
              </Link>
            </Button>
          </div>

          <ThemeToggle />

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon-sm" className="rounded-full">
                  <Menu className="size-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-3/4 sm:max-w-sm flex flex-col">
                <SheetHeader className="p-4 pb-2">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4">
                  {SITE_NAV_LINKS.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <div
                        onClick={() => router.push(item.href)}
                        className="cursor-pointer justify-between px-3 py-2.5 flex items-center"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground" />
                      </div>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <div
                      onClick={() => router.push("/sign-in")}
                      className="cursor-pointer justify-between px-3 py-2.5 flex items-center border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    >
                      <span>Sign in</span>
                      <LogIn className="size-4 text-muted-foreground" />
                    </div>
                  </SheetClose>
                  <SheetClose asChild>
                    <div
                      onClick={() => router.push("/sign-up")}
                      className="cursor-pointer justify-between px-3 py-2.5 flex items-center bg-primary text-primary-foreground"
                    >
                      <span>Sign up</span>
                      <UserPlus className="size-4 text-muted-foreground" />
                    </div>
                  </SheetClose>
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" className="mt-auto p-4" size="sm">
                    Close Menu
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
