import { PolicyPage } from "@/components/policy-page"
import { COMPANY_NAME, CONTACT } from "@/constants"

const POLICY_UPDATED_ON = "June 28, 2026"

const TERMS_SECTIONS = [
  {
    id: "service-scope",
    title: "1. Service scope",
    summary:
      "Our role is to guide introductions through a private, curated matchmaking process.",
    paragraphs: [
      `${COMPANY_NAME} provides personalized matchmaking and relationship consultation services for people seeking sincere, long-term connections.`,
      "Our services are advisory and coordination-based. They are not brokerage, guarantee, or transaction services, and no specific relationship outcome is promised.",
    ],
  },
  {
    id: "admission",
    title: "2. Membership and screening",
    summary:
      "We keep the network selective so that every introduction starts from a higher-trust baseline.",
    paragraphs: [
      "Applications may be reviewed through identity checks, background verification, and compatibility screening.",
      "We may accept or decline any application at our discretion, and we are not required to provide a reason for that decision.",
    ],
    note:
      "Selective admission helps us protect privacy, maintain service quality, and keep introductions focused on genuine compatibility.",
  },
  {
    id: "services",
    title: "3. What the service may include",
    summary:
      "Each membership tier can include a different mix of strategy, planning, and private coordination.",
    paragraphs: [
      "Depending on the selected membership plan, services may include profile preparation, compatibility analysis, curated introductions, private date coordination, consultation, and relationship guidance.",
    ],
    bullets: [
      "Identity and profile screening",
      "Compatibility strategy and matching support",
      "Date planning and private coordination",
      "Consultation for relationship and marriage goals",
    ],
  },
  {
    id: "fees",
    title: "4. Fees and refunds",
    summary:
      "Fees reflect the level of personalization, discretion, and service scope selected by the client.",
    paragraphs: [
      "Membership pricing is determined by the selected tier, the length of engagement, and the amount of customization required.",
      "Once work has started, fees are non-refundable because they cover time, review, consultation, and coordination already provided.",
    ],
    bullets: [
      "Services begin when screening, consultation, or profile preparation starts",
      "Refunds are not issued for change of mind or personal circumstances",
      "Service outcomes are not guaranteed",
    ],
  },
  {
    id: "privacy",
    title: "5. Privacy and conduct",
    summary:
      "We handle personal information with care and expect the same level of respect from members.",
    paragraphs: [
      "Information shared with us may be used for screening, matching, scheduling, and communication related to your membership.",
      "You agree to provide accurate information and to use introductions respectfully, discreetly, and in good faith.",
    ],
  },
  {
    id: "liability",
    title: "6. Liability and acceptance",
    summary:
      "We facilitate introductions, but the decisions and outcomes remain with the people involved.",
    paragraphs: [
      "The company is not responsible for the conduct, statements, or actions of any member introduced through the service.",
      "By using our services, you confirm that you have read and accepted these terms and understand that all relationship decisions remain your own responsibility.",
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
