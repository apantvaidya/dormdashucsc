export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
  tags: string[];
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface DropTime {
  id: string;
  time: string;
  label: string;
  cutoffHour: number;
}

export interface PickupHub {
  id: string;
  name: string;
  location: string;
}
