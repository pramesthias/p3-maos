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
