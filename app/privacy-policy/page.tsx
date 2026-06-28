import { PolicyPage } from "@/components/policy-page"
import {
  CONTACT,
  POLICY_UPDATED_ON,
  PRIVACY_SECTIONS,
} from "@/constants"

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Legal / Privacy Policy"
      title="Privacy handled with the same care as the matching process"
      description="This policy explains what information we collect, how we use it, and how we keep member data confidential throughout the experience."
      updatedOn={POLICY_UPDATED_ON}
      summaryPoints={[
        "Minimal data collection",
        "Private profile handling",
        "Reasonable security safeguards",
      ]}
      sections={PRIVACY_SECTIONS}
      contactTitle="Need help with your data?"
      contactDescription="If you want to review your profile, update details, or ask how your information is used, reach out to the team directly."
      contactActions={[
        {
          label: "WhatsApp",
          href: CONTACT.whatsappPrimary.href,
          icon: "message",
        },
        {
          label: "Email",
          href: CONTACT.email.href,
          icon: "mail",
        },
      ]}
    />
  )
}
