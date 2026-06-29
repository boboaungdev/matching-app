"use client"

import { useSearchParams } from "next/navigation"

import { AuthPage } from "@/components/auth-page"
import { Input } from "@/components/ui/input"
import { APP_NAME } from "@/constants"

export function AuthForm() {
  const searchParams = useSearchParams()
  const isSignUp = searchParams.get("mode") === "signup"

  return (
    <AuthPage
      title={isSignUp ? `Join ${APP_NAME}` : `Welcome to ${APP_NAME}`}
      description={
        isSignUp
          ? "Create an account to get started."
          : "Sign in to access your account."
      }
      primaryCta={isSignUp ? "Create Account" : "Sign In"}
      secondaryCta={isSignUp ? "Already have an account?" : "Create an account"}
      secondaryHref={isSignUp ? "/auth" : "/auth?mode=signup"}
      footerLinkLabel="Forgot password?"
      footerLinkHref="#"
    >
      <div className="space-y-3">
        {isSignUp && <Input type="text" placeholder="Full Name" required />}
        <Input type="email" placeholder="Email Address" required />
        <Input type="password" placeholder="Password" required />
      </div>
    </AuthPage>
  )
}
