import { APP_NAME } from "@/constants"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
