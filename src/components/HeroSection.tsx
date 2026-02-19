import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
              🎓 By students, for students
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Home-cooked meals,{" "}
              <span className="text-primary">delivered on campus.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Skip the overpriced dining hall. Order affordable, real food made by fellow students — picked up at your favorite campus spot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="accent" size="hero">
                <Link to="/market">Browse today's drop</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sell">Sell food →</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Delicious home-cooked meals"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border">
              <p className="text-sm font-medium">🔥 12 meals available</p>
              <p className="text-xs text-muted-foreground">Next drop at 1:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
