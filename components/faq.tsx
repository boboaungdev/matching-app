const faqs = [
  {
    question: "What is Siam Soulmates?",
    answer:
      "Siam Soulmates is a premium matchmaking service dedicated to helping you find a meaningful and long-lasting relationship. We focus on personalized matching based on your values, interests, and life goals.",
  },
  {
    question: "How does the matching process work?",
    answer:
      "Our process begins with a detailed consultation to understand your personality and preferences. We then use a combination of our experienced matchmakers' intuition and our proprietary compatibility algorithm to find potential partners for you.",
  },
  {
    question: "Is my privacy protected?",
    answer:
      "Absolutely. We prioritize your privacy and confidentiality. Your personal information is securely stored and is only shared with potential matches with your explicit consent.",
  },
  {
    question: "What makes Siam Soulmates different?",
    answer:
      "Unlike typical dating apps, we provide a highly personalized and discreet service. We focus on quality over quantity, ensuring that you meet genuinely compatible individuals who are also seeking serious relationships.",
  },
]

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {faqs.map(faq => (
        <div
          key={faq.question}
          className="rounded-lg border bg-background p-4"
        >
          <p className="font-semibold">{faq.question}</p>
          <p className="mt-2 text-muted-foreground">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}
