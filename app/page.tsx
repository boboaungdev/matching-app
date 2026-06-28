"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { APP_NAME, APP_TAGLINE } from "@/constants"
import { UserGallery } from "@/components/user-gallery"
import { Faq } from "@/components/faq"

export default function HomePage() {
  return (
    <main>
      <section
        className="relative flex h-[80vh] min-h-[500px] flex-col items-center justify-center bg-cover bg-center px-4 text-center text-white"
        style={{ backgroundImage: "url(/home-landing.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            {APP_NAME}
          </h1>
          <p className="text-lg text-white/90 md:text-xl">{APP_TAGLINE}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/auth">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white transition-opacity hover:bg-white/10 hover:opacity-100"
            >
              <Link href="#gallery">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Members
          </h2>
          <UserGallery />
        </div>
      </section>

      <section id="faq" className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>
    </main>
  )
}
