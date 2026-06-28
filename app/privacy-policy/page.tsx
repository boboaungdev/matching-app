import { PolicyPage } from "@/components/policy-page"
import { CONTACT } from "@/constants"

const POLICY_UPDATED_ON = "June 28, 2026"

const PRIVACY_SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    summary:
      "We collect personal information that you provide to us, information collected automatically, and information from third parties to operate our matchmaking service effectively.",
    paragraphs: [
      "To provide a personalized matchmaking experience, we need to collect certain information. This includes details you provide directly, data from your use of our service, and sometimes, information from other sources.",
    ],
    bullets: [
      "Account & Profile Information: Your name, email, phone number, birth date, gender, photos, and personal details you add to your profile (like interests, education, and lifestyle).",
      "Communications: Records of your conversations with us, including customer support chats and feedback.",
      "Usage Data: Information on how you use our services, such as your IP address, device type, and the features you interact with.",
      "Payment Information: For premium services, we collect necessary billing information through our secure payment partners.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    summary:
      "Your information is primarily used to create your profile, facilitate matches, and ensure the safety and security of our members.",
    paragraphs: [
      "The data we collect is essential for the core functions of our service. We are committed to using your information responsibly and for the following purposes:",
      "To create and manage your account, personalize your profile, and suggest potential matches based on compatibility.",
      "To enable secure communication between you and our team, as well as with potential matches.",
      "To protect our community by monitoring for and preventing fraudulent or harmful activity, and to enforce our Terms of Service.",
      "To communicate with you about service updates, new features, or promotional offers that may be of interest to you.",
    ],
  },
  {
    id: "how-we-share-information",
    title: "3. How We Share Your Information",
    summary:
      "Your information is shared with potential matches as part of the service, with trusted service providers who help us operate, and for legal reasons when required.",
    paragraphs: [
      "Your privacy is paramount, and we only share information under specific circumstances:",
      "With Other Members: Your public profile information is visible to potential matches. Your contact details are only shared with your consent.",
      "With Service Providers: We partner with third-party companies for services like data hosting, payment processing, and marketing. They are bound by confidentiality obligations.",
      "For Legal Obligations: We may disclose your information if required by law or to protect the safety of our members and the integrity of our service.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security and Retention",
    summary:
      "We implement robust security measures to protect your data and retain it only for as long as necessary.",
    paragraphs: [
      "We take the security of your personal information seriously and use technical and administrative measures to protect it from unauthorized access or misuse.",
      "However, no system is completely secure, and we cannot guarantee absolute security. We retain your information for as long as your account is active or as needed to provide you with our services and to comply with our legal obligations.",
    ],
  },
  {
    id: "your-rights",
    title: "5. Your Rights and Choices",
    summary:
      "You have control over your personal information and can access, update, or request the deletion of your data.",
    paragraphs: [
      "You have the right to access the personal information we hold about you. You can also request that we correct any inaccuracies or delete your data.",
      "You can manage your information through your account settings or by contacting our support team directly. Please note that we may need to retain certain information for legal or security reasons.",
    ],
  },
  {
    id: "policy-updates",
    title: "6. Policy Updates and Contact",
    summary:
      "This policy may be updated periodically. We will notify you of significant changes.",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The latest version will always be available on our website. For any questions or concerns about your privacy, please do not hesitate to contact us.",
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
