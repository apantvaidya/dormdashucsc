import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Better food, built by students.
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          DormDash started from a simple frustration: dining halls are expensive, delivery apps charge insane fees, and students who love to cook have no way to share their food. So we built something better.
        </p>
      </motion.div>

      <section className="space-y-12">
        <div>
          <h2 className="font-display text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe every student deserves access to affordable, home-cooked meals — not just whoever can afford a $16 poke bowl from the campus food court. DormDash connects hungry students with talented student cooks, making real food accessible to everyone on campus.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold mb-3">Why Scheduled Drops?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Instead of paying someone to deliver one meal at a time (and tacking on a $7 fee), we batch orders into scheduled drops — 10 AM, 1 PM, and 7 PM. Sellers prep in bulk, students pick up at convenient campus hubs, and everyone saves money. It's more efficient, more sustainable, and way cheaper.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold mb-3">Built at UCSC 🐌</h2>
          <p className="text-muted-foreground leading-relaxed">
            DormDash was born in the redwoods of UC Santa Cruz. Our first pickup hub was a folding table outside McHenry Library. Today we're expanding to more hubs across campus — and dreaming about other college campuses too. We're students building for students, and we wouldn't have it any other way.
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Want to get involved?</h2>
          <p className="text-muted-foreground mb-4">
            Whether you want to sell, partner, or just help spread the word — we'd love to hear from you.
          </p>
          <a href="mailto:hello@dormdash.app" className="text-primary font-semibold hover:underline">
            hello@dormdash.app
          </a>
        </div>
      </section>
    </div>
  );
}
