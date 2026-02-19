import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍱</span>
              <span className="font-display text-xl font-bold text-primary">DormDash</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Affordable, home-cooked meals made by students, for students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/market" className="hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link to="/sell" className="hover:text-primary transition-colors">Sell Food</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="mailto:hello@dormdash.app" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
              <li><a href="mailto:hello@dormdash.app" className="hover:text-primary transition-colors">hello@dormdash.app</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          © 2026 DormDash. Built with ❤️ at UCSC.
        </div>
      </div>
    </footer>
  );
}
