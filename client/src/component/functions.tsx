import { useAppDispatch,useAppSelector } from "../app/hooks";
import { useEffect} from 'react';
import axios from 'axios';
import { setProducts } from "../app/dataSlice";
import Product from "./interface";

export function connectToData(){

    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:8181/api/products"
            );
            dispatch(setProducts(response.data ));
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

}


// export function getTopFiveCategoriesByCount(products:Product[]) {
 
//   const categoryCounts = {};

 
//   products.forEach((product) => {
//     const category = product.category;
//     const count = product.count;

//     categoryCounts[category] = (categoryCounts[category] || 0) + count;
//   });

//   const categoryArray = Object.keys(categoryCounts).map((category) => ({
//     category: category,
//     count: categoryCounts[category],
//   }));


//   categoryArray.sort((a, b) => b.count - a.count);

//   return categoryArray.slice(0, 5);
// }

// const topFiveCategories = getTopFiveCategoriesByCount(products);
// console.log(topFiveCategories);
