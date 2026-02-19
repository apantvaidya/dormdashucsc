import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Pick a drop time", desc: "Choose 10 AM, 1 PM, or 7 PM — whatever fits your schedule." },
  { num: "02", title: "Choose a pickup hub", desc: "McHenry Library, Porter, Crown/Merrill, or S&E Library." },
  { num: "03", title: "Grab your food", desc: "Show up, grab your order — no waiting, no delivery fees." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <span className="font-display text-6xl font-extrabold text-primary/15">{s.num}</span>
              <h3 className="font-display text-xl font-bold mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
