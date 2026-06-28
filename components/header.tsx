import Link from "next/link"
import { Button } from "@/components/ui/button"
import { APP_NAME, APP_TAGLINE } from "@/constants"

import Image from "next/image"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt={`${APP_NAME} logo`}
              width={24}
              height={24}
            />
            <div className="flex flex-col">
              <span className="hidden font-bold sm:inline-block">
                {APP_NAME}
              </span>
              <p className="hidden text-xs text-muted-foreground md:inline-block">
                {APP_TAGLINE}
              </p>
            </div>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/services"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
