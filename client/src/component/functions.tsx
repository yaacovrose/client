import { useAppDispatch } from "../app/hooks";
import { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from "../app/dataSlice";

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