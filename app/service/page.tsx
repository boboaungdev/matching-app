import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicePage() {
  return (
    <section className="container py-12 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Services</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          We offer a range of personalized services to help you find the perfect match.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Personalized Matchmaking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our core service. We take the time to understand you and your preferences to introduce you to compatible partners.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Date Coaching</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Feeling nervous or unsure about dating? Our experienced coaches are here to guide you and boost your confidence.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Enhancement</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We'll help you create a compelling and authentic profile that showcases your best self and attracts the right people.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter">Ready to find your match?</h2>
        <Button asChild size="lg">
          <Link href="/auth?mode=signup">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}
