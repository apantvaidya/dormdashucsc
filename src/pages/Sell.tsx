import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { dropTimes } from "@/data/menuData";
import { CheckCircle } from "lucide-react";

export default function Sell() {
  const [submitted, setSubmitted] = useState(false);
  const [sellerType, setSellerType] = useState("individual");

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold mb-3">Application received! 🎉</h1>
        <p className="text-muted-foreground">
          We'll review your application within 24–48 hours and get back to you via email. In the meantime, start prepping your best recipes!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <h1 className="font-display text-3xl font-bold mb-2">Sell on DormDash</h1>
      <p className="text-muted-foreground mb-8">
        Got a killer recipe? Turn your cooking skills into cash. Apply to become a DormDash seller.
      </p>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="seller-name">Full Name</Label>
          <Input id="seller-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="seller-email">Email</Label>
          <Input id="seller-email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="seller-phone">Phone</Label>
          <Input id="seller-phone" type="tel" required />
        </div>

        <div className="space-y-3">
          <Label>Are you a club or individual?</Label>
          <RadioGroup value={sellerType} onValueChange={setSellerType}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual" className="font-normal">Individual student</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="club" id="club" />
              <Label htmlFor="club" className="font-normal">Student club / organization</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="menu-desc">What will you sell?</Label>
          <Textarea id="menu-desc" placeholder="Describe your menu items, ingredients, and prices..." required rows={4} />
        </div>

        <div className="space-y-3">
          <Label>Preferred drop times</Label>
          <div className="flex flex-wrap gap-3">
            {dropTimes.map((dt) => (
              <label key={dt.id} className="flex items-center gap-2 cursor-pointer">
                <Checkbox id={`drop-${dt.id}`} />
                <span className="text-sm">{dt.label} ({dt.time})</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Menu Photos</Label>
          <div className="border-2 border-dashed rounded-xl p-8 text-center text-muted-foreground">
            <p className="text-sm">📷 Drag photos here or click to upload</p>
            <p className="text-xs mt-1">(Upload feature coming soon)</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="food-safety" required />
          <Label htmlFor="food-safety" className="text-sm font-normal leading-snug">
            I confirm that I will follow DormDash's food handling and safety guidelines, including proper storage, labeling allergens, and maintaining a clean prep area.
          </Label>
        </div>

        <Button type="submit" variant="accent" size="lg" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  );
}
