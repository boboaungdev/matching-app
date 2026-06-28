import { APP_NAME } from "@/constants"

export default function PrivacyPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          Last updated on June 28, 2026
        </p>
      </div>
      <div className="prose dark:prose-invert mx-auto mt-12">
        <h2>{APP_NAME}</h2>
        <p>
          <em>Elite • Private • Confidential Matchmaking Service</em>
        </p>
        <p>
          At {APP_NAME}, we are committed to safeguarding your personal
          information and maintaining the highest standards of privacy,
          discretion, and data protection. Your privacy is our highest priority.
          All members are carefully screened and handled with the utmost
          discretion.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and manage
          your information when you use our website and our matchmaking
          services.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information that you voluntarily provide to
          us, including but not limited to:
        </p>
        <ul>
          <li>Name and contact details</li>
          <li>Date of birth and age</li>
          <li>Gender and relationship preferences</li>
          <li>Photographs and profile information</li>
          <li>Lifestyle, interests, and personal background</li>
          <li>Communication records with our team</li>
          <li>Payment and transaction details for our services</li>
        </ul>

        <h3>2. Purpose of Collecting Information</h3>
        <p>Your information is used for the purpose of:</p>
        <ul>
          <li>Providing personalized matchmaking services</li>
          <li>Assessing compatibility between members</li>
          <li>Creating and managing your private profile</li>
          <li>Communicating with you regarding our services</li>
          <li>Improving our service quality and client experience</li>
          <li>
            Organizing private events, introductions, and related services
          </li>
        </ul>

        <h3>3. Matchmaking Process & Confidentiality</h3>
        <p>
          {APP_NAME} operates a private and consent-based introduction system.
          Your profile and personal information may be presented to carefully
          selected and compatible members only as part of our matchmaking
          process and under strict internal privacy standards. We are committed
          to maintaining discretion and handling all member information with the
          highest level of confidentiality.
        </p>

        <h3>4. Data Storage & Security</h3>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data from:
        </p>
        <ul>
          <li>Unauthorized access</li>
          <li>Loss or misuse</li>
          <li>Alteration or disclosure</li>
        </ul>
        <p>
          Your information is accessible only to authorized personnel who are
          bound by confidentiality obligations.
        </p>

        <h3>5. Data Retention</h3>
        <p>We retain personal information for as long as necessary to:</p>
        <ul>
          <li>Provide our services</li>
          <li>Maintain client relationships</li>
          <li>Comply with applicable legal and regulatory requirements</li>
          <li>Resolve disputes and enforce our agreements</li>
        </ul>

        <h3>6. Your Rights</h3>
        <p>You may request to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Update or correct your data</li>
          <li>Withdraw your consent for future use</li>
          <li>Request removal of your profile from our active database</li>
        </ul>
        <p>
          Such requests will be processed within a reasonable timeframe, subject
          to service obligations and legal requirements.
        </p>

        <h3>7. Third-Party Services</h3>
        <p>
          In certain cases, we may work with trusted partners or service
          providers to support our business operations, including payment
          processing and IT systems. All such parties are required to maintain
          appropriate confidentiality and data protection standards.
        </p>
        <h3>8. External Links</h3>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those external
          sites.
        </p>
        <h3>9. Policy Updates</h3>
        <p>
          {APP_NAME} reserves the right to update or modify this Privacy Policy
          at any time. The updated version will be published on our website with
          the effective date.
        </p>
        <h3>10. Contact Information</h3>
        <p>
          For any questions regarding this Privacy Policy or your personal data,
          please contact:
        </p>
        <address>
          {APP_NAME}
          <br />
          Line: @thaiangelcupid
          <br />
          WhatsApp: +66 92 271 4488
          <br />
          WhatsApp: +66 96 871 4488
          <br />
          Website: www.thaiangelcupid.com
          <br />
          Email: info@thaiangelcupid.com
        </address>
      </div>
    </section>
  )
}
