import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem, CartItem, DropTime, PickupHub } from "@/types";
import { dropTimes } from "@/data/menuData";

interface CartContextType {
  items: CartItem[];
  dropTime: DropTime | null;
  pickupHub: PickupHub | null;
  cartOpen: boolean;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  setDropTime: (dt: DropTime) => void;
  setPickupHub: (hub: PickupHub) => void;
  setCartOpen: (open: boolean) => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [dropTime, setDropTime] = useState<DropTime | null>(dropTimes[0]);
  const [pickupHub, setPickupHub] = useState<PickupHub | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = (item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        dropTime,
        pickupHub,
        cartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setDropTime,
        setPickupHub,
        setCartOpen,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
