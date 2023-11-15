export default interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  attribute: Attribute[];
  count: number;
  quantity: number;
  image: string;
}

export interface Attribute {
  Description: string;
  Details: number | string;
}