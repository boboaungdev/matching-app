import { AuthPage } from "@/components/auth-page"

export default function SignUpPage() {
  return (
    <AuthPage
      title="Create account"
      description="Join Siam Soulmates to start a private matchmaking profile and connect with our team."
      primaryCta="Sign up"
      secondaryCta="Already have an account?"
      secondaryHref="/sign-in"
      footerLinkLabel="Back home"
      footerLinkHref="/"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Full name
          <input
            type="text"
            placeholder="Your name"
            className="h-11 rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Password
          <input
            type="password"
            placeholder="Create a password"
            className="h-11 rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
      </div>
    </AuthPage>
  )
}
