import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from "../app/dataSlice";
import Product from "./interface";

export function connectToData() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8181/api/products"
        );
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

}


export const sortByCount = (products: Product[]): Product[] => {
  const sortedProducts = [...products];

  for (let i = 0; i < sortedProducts.length - 1; i++) {
    for (let j = 0; j < sortedProducts.length - 1 - i; j++) {
      if (sortedProducts[j].count < sortedProducts[j + 1].count) {
        const temp = sortedProducts[j];
        sortedProducts[j] = sortedProducts[j + 1];
        sortedProducts[j + 1] = temp;
      }
    }
  }
  const topFive = sortedProducts.slice(0, 5);

  return topFive;
};


export const findProductById = (productId: number): Product | undefined => {
  const data= useAppSelector(state => state.products)
  return data.products.find(product => product.id === productId);
};