import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I save like $40 a week using DormDash. Asha's pasta is literally better than any restaurant near campus.",
    name: "Jordan M.",
    role: "3rd Year, Porter College",
  },
  {
    quote: "The scheduled drops are genius. I just grab my lunch between classes at McHenry. No apps, no waiting.",
    name: "Priya S.",
    role: "2nd Year, Crown College",
  },
  {
    quote: "I started selling my dumplings through DormDash and now I make enough to cover my grocery budget.",
    name: "Kevin L.",
    role: "4th Year, Seller @ Porter Food Club",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          What students are saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border p-6"
            >
              <p className="text-foreground mb-4 italic">"{t.quote}"</p>
              <footer>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
