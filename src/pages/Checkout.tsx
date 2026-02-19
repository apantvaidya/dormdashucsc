import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dropTimes, pickupHubs } from "@/data/menuData";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { items, subtotal, dropTime, pickupHub, setDropTime, setPickupHub, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Your cart is empty</h1>
        <Button asChild variant="accent">
          <Link to="/market">Browse the menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Contact Info</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Pickup Details</h2>
          <div className="space-y-2">
            <Label>Drop Time</Label>
            <Select value={dropTime?.id || ""} onValueChange={(v) => setDropTime(dropTimes.find((d) => d.id === v)!)}>
              <SelectTrigger><SelectValue placeholder="Select a drop time" /></SelectTrigger>
              <SelectContent>
                {dropTimes.map((dt) => <SelectItem key={dt.id} value={dt.id}>{dt.label} — {dt.time}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Pickup Hub</Label>
            <Select value={pickupHub?.id || ""} onValueChange={(v) => setPickupHub(pickupHubs.find((h) => h.id === v)!)}>
              <SelectTrigger><SelectValue placeholder="Select a pickup hub" /></SelectTrigger>
              <SelectContent>
                {pickupHubs.map((h) => <SelectItem key={h.id} value={h.id}>{h.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-xl font-semibold">Order Summary</h2>
          <div className="bg-secondary rounded-xl p-4 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </section>

        <Button type="submit" variant="accent" size="lg" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  );
}
