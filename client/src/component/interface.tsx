export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    attributes: Attribute[];
    count: number;
    quantity: number;
    image: string;
  }
  interface Attribute {
    name: string;
    value: number | string;
  }