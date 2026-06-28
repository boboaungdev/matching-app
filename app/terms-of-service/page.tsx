import { PolicyPage } from "@/components/policy-page"
import {
  CONTACT,
  POLICY_UPDATED_ON,
  TERMS_SECTIONS,
} from "@/constants"

export default function TermsOfServicePage() {
  return (
    <PolicyPage
      eyebrow="Legal / Terms of Service"
      title="Terms that keep the process clear, private, and respectful"
      description="These terms explain how our matchmaking service works, what is included in a membership, and how we protect the integrity of the process."
      updatedOn={POLICY_UPDATED_ON}
      summaryPoints={[
        "Selective admissions",
        "Private introductions",
        "Transparent service fees",
      ]}
      sections={TERMS_SECTIONS}
      contactTitle="Questions about the terms?"
      contactDescription="Our team can explain the membership process, support options, and service boundaries before you enroll."
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
