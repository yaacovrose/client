import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useAppSelector } from "../../app/hooks";
import Heder from "../Heder/Heder";
import ProductCard from "../mui/Mui.ProductCard";

const Categories = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState<Product[] | null>(null);

  const data = useAppSelector((state) => state.products);

  const getProducts = () => {
    const dataProducts = data.products.filter(
      (product) => product.category == cat
    );

    setProducts(dataProducts);
  };
  useEffect(() => {
    getProducts();
  }, [data.products]);

  return (
    <main>
      <div className="page">
        <div id="cards">
          <Heder />
          {products?.map((obj, index) => (
            <ProductCard product={obj} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
