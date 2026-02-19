import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-lg">
      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
      <h1 className="font-display text-3xl font-bold mb-3">Order confirmed! 🎉</h1>
      <p className="text-muted-foreground mb-6">
        You're all set. Head to your pickup hub at the scheduled drop time and grab your food.
      </p>

      <div className="bg-secondary rounded-xl p-6 mb-8 text-left space-y-2">
        <h3 className="font-semibold mb-2">Pickup Instructions</h3>
        <p className="text-sm text-muted-foreground">1. Go to your selected pickup hub at the drop time.</p>
        <p className="text-sm text-muted-foreground">2. Show this confirmation or give your name.</p>
        <p className="text-sm text-muted-foreground">3. Grab your food and enjoy!</p>
      </div>

      <div className="bg-muted rounded-xl p-8 mb-8">
        <p className="text-xs text-muted-foreground mb-2">Your QR Code</p>
        <div className="w-32 h-32 mx-auto bg-foreground/10 rounded-lg flex items-center justify-center">
          <span className="text-4xl">📱</span>
        </div>
      </div>

      <Button asChild variant="default" size="lg">
        <Link to="/market">Order more</Link>
      </Button>
    </div>
  );
}
