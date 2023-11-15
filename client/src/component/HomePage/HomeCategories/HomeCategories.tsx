import {  useNavigate } from "react-router-dom";
import "./homeCategories.css";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";
import CategoryCard from "../../mui/Mui.CategotyCard";
import Typography from "@mui/material/Typography";

export default function HomeCategories() {
  const data = useAppSelector((state) => state.products);

  const uniqueProductsByCategory: Product[] = [];

  const uniqueCategories = new Set();
  data.products.forEach((product) => {
    if (!uniqueCategories.has(product.category)) {
      uniqueCategories.add(product.category);
      uniqueProductsByCategory.push(product);
    }
  });
  
  const Navigate = useNavigate();

  const handleClick = (cat: string) => {
    Navigate(`/categories/${cat}`);
  };

  return (
    <div id="category">
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}
      >
        {uniqueProductsByCategory.map((obj, index) => (
          <div style={{ textAlign: "center" }}>
            <CategoryCard
              key={index}
              category={obj.category}
              onClick={handleClick}
            />
            <Typography variant="h5">{obj.category}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
