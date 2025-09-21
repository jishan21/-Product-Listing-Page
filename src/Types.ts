export interface ProductType {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  colors: string[];
  category: 'Sneakers' | 'Belt' | 'Bag' | 'Watch';
  imageUrl: string;
}