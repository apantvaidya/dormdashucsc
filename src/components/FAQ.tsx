import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is the food safe to eat?",
    a: "All sellers go through a food safety orientation and agree to our handling guidelines. We require sellers to list all ingredients and allergens. If something doesn't meet our standards, we remove them from the platform.",
  },
  {
    q: "What if I miss my pickup?",
    a: "You have a 30-minute pickup window after the scheduled drop time. After that, unclaimed orders may be donated. No refunds for missed pickups, but we'll send you reminders!",
  },
  {
    q: "Can I get a refund?",
    a: "If there's a quality issue with your order, reach out within 24 hours and we'll make it right — refund or credit for your next order.",
  },
  {
    q: "How are sellers vetted?",
    a: "Every seller must be a current UCSC student or registered campus organization. We review applications within 24–48 hours and check food handling experience and kitchen setup.",
  },
  {
    q: "Are there vegetarian or halal options?",
    a: "Yes! We have dedicated tags for Vegetarian, Halal, and Gluten-Free items. Use the filters on the marketplace to find exactly what you need.",
  },
  {
    q: "How do I become a seller?",
    a: "Head to our Sell Food page and fill out the application. We'll review it in 24–48 hours. You'll need to describe what you want to sell, confirm food safety basics, and choose your preferred drop times.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6">
              <AccordionTrigger className="font-medium text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
