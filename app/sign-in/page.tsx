import { AuthPage } from "@/components/auth-page"

export default function SignInPage() {
  return (
    <AuthPage
      title="Sign in"
      description="Welcome back. Use your email and password to continue with your Siam Soulmates account."
      primaryCta="Sign in"
      secondaryCta="Create account"
      secondaryHref="/sign-up"
      footerLinkLabel="Back home"
      footerLinkHref="/"
    >
      <div className="grid gap-4">
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
            placeholder="Enter your password"
            className="h-11 rounded-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
      </div>
    </AuthPage>
  )
}
