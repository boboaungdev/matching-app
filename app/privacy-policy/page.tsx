import { PolicyPage } from "@/components/policy-page"
import { CONTACT } from "@/constants"

const POLICY_UPDATED_ON = "June 28, 2026"

const PRIVACY_SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information we collect",
    summary:
      "We only collect the details needed to provide a careful, private matchmaking service.",
    paragraphs: [
      "Information may include your name, contact details, age, date of birth, relationship preferences, profile photos, lifestyle details, communication history, and payment-related records.",
    ],
    bullets: [
      "Identity and contact information",
      "Profile, preferences, and background details",
      "Messages, consultation notes, and service records",
      "Billing and transaction information",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How we use information",
    summary:
      "Your data helps us screen, match, and communicate with you in a focused way.",
    paragraphs: [
      "We use your information to deliver matchmaking services, assess compatibility, manage your profile, coordinate introductions, and improve the quality of our client experience.",
      "We may also use it to support private events, service follow-up, and related administrative work.",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing and confidentiality",
    summary:
      "We share only what is necessary and only with the right people.",
    paragraphs: [
      "Your profile may be shown only to carefully selected and compatible members as part of the introduction process.",
      "Trusted vendors may support payments or technical operations, but they are expected to protect confidentiality and use the data only for their assigned work.",
    ],
    note:
      "We do not sell your personal information, and we limit access to authorized personnel who need it to do their jobs.",
  },
  {
    id: "security",
    title: "4. Security and retention",
    summary:
      "We use reasonable technical and organizational safeguards to keep your information protected.",
    paragraphs: [
      "We work to prevent unauthorized access, misuse, alteration, disclosure, and loss.",
      "Personal information is retained only as long as needed for service delivery, relationship management, legal obligations, and dispute resolution.",
    ],
  },
  {
    id: "rights",
    title: "5. Your choices and rights",
    summary:
      "You can ask us to review, update, or remove your information when appropriate.",
    paragraphs: [
      "You may request access to your data, ask us to correct inaccuracies, withdraw consent for future use, or request removal from the active database.",
      "We will process requests within a reasonable timeframe, subject to service commitments and legal requirements.",
    ],
  },
  {
    id: "updates-contact",
    title: "6. Policy updates and contact",
    summary:
      "We may update this policy from time to time, and we will keep the latest version on the website.",
    paragraphs: [
      "If you have a question about privacy, your profile, or how your information is handled, please contact our team using the details below.",
    ],
  },
]

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
          href: `https://wa.me/${CONTACT.whatsapp}`,
          icon: "message",
        },
        {
          label: "Email",
          href: `mailto:${CONTACT.email}`,
          icon: "mail",
        },
      ]}
    />
  )
}
