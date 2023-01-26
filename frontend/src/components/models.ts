export interface Services {
  id: string;
  name: string;
  description: string;
  basedPrice: number;
  category: string;
}

export interface Quote {
  services: [Services];
  userName: number;
  totalPrice: number;
}

export interface Courses {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
} 