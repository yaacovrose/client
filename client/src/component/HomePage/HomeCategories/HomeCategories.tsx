import { useNavigate } from "react-router-dom";
import "./homeCategories.css";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";
import CategoryCard from "../../mui/Mui.CategotyCard";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { CategoryUrls, urls } from "../../interfaces/CategoriesUrl";

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

  const url: CategoryUrls = urls

  return (
    <Stack id="category" flexDirection={"column"} borderRight={"solid"} padding={"16px"}>
      {uniqueProductsByCategory.map((obj, index) => (
        <Stack spacing={2} alignItems={"center"} display={"flex"} flexDirection={"row"}>
            <CategoryCard
              size={160}
              key={index}
              category={obj.category}
              url={url[obj.category]}
              onClick={handleClick}
            />
          <Stack >
            <Typography variant="h4">{obj.category}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
