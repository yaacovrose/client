import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useAppSelector } from "../../app/hooks";
import ProductCard from "../mui/Mui.ProductCard";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Prices from "../interfaces/Price";
import FilterByParams from "./filtersByParams";

const Categories = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filterProducts, setFilterProducts] = useState<Product[] | null>(null);
  const [value, setValue] = useState<string | number>("");
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

  const { minPrice, maxPrice }: Prices = products?.reduce(
    (acc, product) => ({
      minPrice: Math.min(acc.minPrice, product.price),
      maxPrice: Math.max(acc.maxPrice, product.price),
    }),
    { minPrice: Infinity, maxPrice: -Infinity }
  ) ?? { minPrice: 0, maxPrice: 0 };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
    if (typeof value === "number") {
      const filterPrice = products?.filter((product) => product.price <= value);
      if (filterPrice) setFilterProducts(filterPrice);
    }
  };

  return (
    <main>
      <div className="page">
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Default"
            value={typeof value === "number" ? value : maxPrice}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            aria-labelledby="dynamic-range-slider"
            valueLabelDisplay="auto"
          />
        </Box>
        {products && <FilterByParams products={products} />}
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
