// utk import type
// mas fachri
export interface Product {
  // json to ts
  _id: string; // here
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  name?: string;
  username: string;
  email: string;
  password: string;
}

export interface Wishlist {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  user: User[];
  product: Product[];
}
