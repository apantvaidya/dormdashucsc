import { DollarSign, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const props = [
  {
    icon: DollarSign,
    title: "Cheaper than campus",
    description: "Home-cooked meals starting at $4.50. Say goodbye to $15 dining hall plates.",
  },
  {
    icon: Clock,
    title: "Scheduled drops",
    description: "Pick a drop time that works — 10 AM, 1 PM, or 7 PM. No random waiting.",
  },
  {
    icon: Users,
    title: "Student-run",
    description: "Every seller is a verified student or campus club. Community-powered food.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
