import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface MenuCardProps {
  item: MenuItem;
  onViewDetail?: (item: MenuItem) => void;
}

export default function MenuCard({ item, onViewDetail }: MenuCardProps) {
  const { addItem } = useCart();

  return (
    <div
      className="group bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onViewDetail?.(item)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-lg">{item.name}</h3>
          <span className="font-semibold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground">{item.seller}</span>
          <span className="flex items-center gap-0.5 text-xs">
            <Star className="h-3 w-3 fill-accent text-accent" />
            {item.rating}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Button
          variant="default"
          size="sm"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            addItem(item);
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
