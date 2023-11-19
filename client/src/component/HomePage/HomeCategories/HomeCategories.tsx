// HomeCategories.tsx
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";
import CategoryCard from "../../mui/Mui.CategotyCard";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { CategoryUrls, urls } from "../../interfaces/CategoriesUrl";
import Slide from "@mui/material/Slide";
import "./homeCategoy.css"; // Import the CSS file with keyframes

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

  const url: CategoryUrls = urls;

  return (
    <Slide in={true} direction="right" timeout={1000}>
      <Stack className="slider" sx={{ flexWrap: "wrap", border: "solid 1px black" }} id="category" flexDirection={"row"} borderRight={"solid"} padding={"16px"}>
        {uniqueProductsByCategory.map((obj, index) => (
          <Stack sx={{ marginLeft: "12px" }} key={index} spacing={2} alignItems={"center"} display={"flex"}>
            <CategoryCard size={0} key={index} category={obj.category} url={url[obj.category]} onClick={() => handleClick(obj.category)} />
            <Stack>
              <Typography onClick={() => handleClick(obj.category)} style={{ marginBottom: "15px" }} variant="h6">
                {obj.category}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Slide>
  );
}
