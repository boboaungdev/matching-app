"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { usePathname, useRouter, useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [currentLang, setCurrentLang] = React.useState(
    (params.lang as string) || "en"
  )

  React.useEffect(() => {
    setCurrentLang((params.lang as string) || "en")
  }, [params.lang])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2">
          {currentLang === "en" && (
            <span role="img" aria-label="USA flag">
              🇺🇸
            </span>
          )}
          {currentLang === "th" && (
            <span role="img" aria-label="Thailand flag">
              🇹🇭
            </span>
          )}
          <span className="font-bold uppercase">{currentLang}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={currentLang}
          onValueChange={(value) => {
            setCurrentLang(value)
            router.push(pathname, { locale: value })
          }}
        >
          <DropdownMenuRadioItem value="en">
            <span className="mr-2" role="img" aria-label="USA flag">
              🇺🇸
            </span>
            <span className="font-bold uppercase">en</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="th">
            <span className="mr-2" role="img" aria-label="Thailand flag">
              🇹🇭
            </span>
            <span className="font-bold uppercase">th</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
