export const APP_NAME = "Siam Soulmates"
export const APP_TAGLINE = "One to One Matchmaking"
export const COMPANY_NAME = "Thai Angel Cupid Co., Ltd."

export const SITE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Service", href: "/#service" },
  { label: "Gallery", href: "/#gallery" },
] as const

export const CONTACT = {
  email: {
    label: "contact@thaisoulmates.com",
    href: "mailto:contact@thaisoulmates.com",
  },
  whatsappPrimary: {
    label: "+66 62 060 4940",
    href: "https://wa.me/66620604940",
  },
} as const

export const SOCIAL_LINKS = [
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
] as const

export const POLICY_UPDATED_ON = "June 28, 2026"

export type PolicySection = {
  id: string
  title: string
  summary: string
  paragraphs: string[]
  bullets?: string[]
  note?: string
}

export const TERMS_SECTIONS: PolicySection[] = [
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

export const PRIVACY_SECTIONS: PolicySection[] = [
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
