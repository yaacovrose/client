import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useAppSelector } from "../../app/hooks";
import ProductCard from "../mui/Mui.ProductCard";
import Filters from "./filters";
import Filter from "../interfaces/Filter";

const Categories = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filterProducts, setFilterProducts] = useState<Product[] | null>(null);
  const data = useAppSelector((state) => state.products);

  const getProducts = () => {
    const dataProducts = data.products.filter(
      (product) => product.category == cat
    );
    setProducts(dataProducts);
    setFilterProducts(dataProducts);
  };
  useEffect(() => {
    getProducts();
  }, [data.products]);

  const applyFilter = (products: Product[], filter: Filter): Product[] => {
    return products.filter((product) => {
      for (const [key, value] of Object.entries(filter)) {
        if (key === 'price') {
          if(typeof value === 'number'){
            if (product.price > value) return false; 
          }
        } else {
          const attribute = product.attributes.find(
            (attribute) => attribute.name === key && attribute.value === value
          );
          if (!attribute) {
            return false;
          }
        }
      }
      return true;
    });
  };
  
  const log = useAppSelector((state) => state.filter.filter);

  useEffect(() => {
    if(products){
      const x = applyFilter(products, log);
      if (x) setFilterProducts(x);
    }
  }, [log]);

  return (
    <main>
      <div className="page">
      
        {products && <Filters products={products} />}
        <div
          id="cards"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filterProducts?.map((obj, index) => (
            <ProductCard product={obj} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
