import { useState, useMemo } from "react";
import { menuItems, dropTimes, pickupHubs } from "@/data/menuData";
import type { MenuItem } from "@/types";
import MenuCard from "@/components/MenuCard";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dietaryFilters = ["Vegetarian", "Halal", "Gluten-Free"];

export default function Market() {
  const { addItem, setDropTime, setPickupHub, dropTime, pickupHub } = useCart();
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const filtered = useMemo(() => {
    let items = menuItems;
    if (selectedDietary.length > 0) {
      items = items.filter((item) => selectedDietary.every((d) => item.tags.includes(d)));
    }
    return items;
  }, [selectedDietary]);

  const toggleDietary = (tag: string) => {
    setSelectedDietary((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleAddToCart = () => {
    if (!selectedItem) return;
    for (let i = 0; i < quantity; i++) addItem(selectedItem);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Marketplace</h1>
      <p className="text-muted-foreground mb-8">Browse today's available meals and place your order.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-end">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Drop Time</label>
          <Select value={dropTime?.id || ""} onValueChange={(v) => setDropTime(dropTimes.find((d) => d.id === v)!)}>
            <SelectTrigger className="w-40"><SelectValue placeholder="Any time" /></SelectTrigger>
            <SelectContent>
              {dropTimes.map((dt) => <SelectItem key={dt.id} value={dt.id}>{dt.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Pickup Hub</label>
          <Select value={pickupHub?.id || ""} onValueChange={(v) => setPickupHub(pickupHubs.find((h) => h.id === v)!)}>
            <SelectTrigger className="w-48"><SelectValue placeholder="Any hub" /></SelectTrigger>
            <SelectContent>
              {pickupHubs.map((h) => <SelectItem key={h.id} value={h.id}>{h.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Dietary</label>
          <div className="flex gap-2">
            {dietaryFilters.map((d) => (
              <Badge
                key={d}
                variant={selectedDietary.includes(d) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleDietary(d)}
              >
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onViewDetail={(i) => { setSelectedItem(i); setQuantity(1); }} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No items match your filters.</p>
          <Button variant="ghost" className="mt-2" onClick={() => setSelectedDietary([])}>Clear filters</Button>
        </div>
      )}

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedItem && (
            <>
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full aspect-video object-cover rounded-lg" />
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selectedItem.name}</DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground">{selectedItem.description}</p>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">{selectedItem.seller}</span>
                <span className="flex items-center gap-0.5">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  {selectedItem.rating}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedItem.tags.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="accent" size="lg" onClick={handleAddToCart}>
                  Add — ${(selectedItem.price * quantity).toFixed(2)}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
