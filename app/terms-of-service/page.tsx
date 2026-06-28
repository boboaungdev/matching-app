import { PolicyPage } from "@/components/policy-page"
import { COMPANY_NAME, CONTACT } from "@/constants"

const POLICY_UPDATED_ON = "June 28, 2026"

const TERMS_SECTIONS = [
  {
    id: "agreement-to-terms",
    title: "1. Agreement to Terms",
    summary:
      "By using our service, you agree to these Terms of Service. You must be at least 18 years old to use our platform.",
    paragraphs: [
      `Welcome to ${APP_NAME}. These Terms of Service ('Terms') govern your use of our matchmaking services. By creating an account, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement.`,
      "You also warrant that you have never been convicted of a felony and are not required to register as a sex offender with any government entity.",
    ],
  },
  {
    id: "account-responsibilities",
    title: "2. Your Account and Information",
    summary:
      "You are responsible for maintaining the confidentiality of your account and for providing accurate information.",
    paragraphs: [
      "To create a profile, you must provide accurate, current, and complete information. You are responsible for all activities that occur under your account.",
      "We reserve the right to suspend or terminate accounts that provide false information or violate our terms.",
    ],
    note:
      "The integrity of our community depends on the honesty and cooperation of our members. Please ensure your details are always up to date.",
  },
  {
    id: "code-of-conduct",
    title: "3. Code of Conduct",
    summary:
      "We expect all members to interact with others respectfully and honestly. Harassment and fraudulent activity are strictly prohibited.",
    paragraphs: [
      "You agree not to use the service for any unlawful purpose, to harass or harm others, or to misrepresent your identity. You are solely responsible for your interactions with other members.",
    ],
    bullets: [
      "No harassment, abuse, or harmful behavior.",
      "Do not post offensive or illegal content.",
      "Do not impersonate any person or entity.",
      "Commercial solicitation is not permitted.",
    ],
  },
  {
    id: "service-and-fees",
    title: "4. Service, Payments, and Refunds",
    summary:
      "We offer personalized matchmaking services for a fee. All payments are final and non-refundable.",
    paragraphs: [
      `${APP_NAME} provides premium, personalized matchmaking services. If you purchase a membership, you agree to our pricing and payment terms.`,
      "Subscription fees are billed in advance and will auto-renew unless canceled. Due to the personalized nature of our work, all fees are non-refundable once service has begun.",
    ],
  },
  {
    id: "privacy-and-safety",
    title: "5. Privacy and Safety",
    summary:
      "Your privacy is important to us. Please review our Privacy Policy. Always use caution when interacting with new people.",
    paragraphs: [
      "Your use of our service is also governed by our Privacy Policy, which details how we collect and use your data. We do not conduct criminal background checks on all users.",
      "You are responsible for your own safety and should exercise caution when sharing personal information or meeting anyone in person.",
    ],
  },
  {
    id: "disclaimers-and-liability",
    title: "6. Disclaimers and Limitation of Liability",
    summary:
      "Our service is provided 'as is,' and we are not liable for any damages that may arise from your use of it.",
    paragraphs: [
      "The service is provided without warranties of any kind. We do not guarantee any specific matchmaking outcomes.",
      `${COMPANY_NAME} will not be liable for any indirect, incidental, or consequential damages resulting from your use of the service or interactions with other members.`,
    ],
  },
  {
    id: "termination",
    title: "7. Termination",
    summary:
      "We reserve the right to terminate your account if you violate these terms.",
    paragraphs: [
      "We may suspend or terminate your account at any time without notice if we believe you have breached these Terms. Upon termination, your right to use the service will cease immediately.",
    ],
  },
]

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
