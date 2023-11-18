import CategoryCard from "../../mui/Mui.CategotyCard";
import ProductCard from "../../mui/Mui.ProductCard";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "../../interface";
import { useAppSelector } from "../../../app/hooks";
import { sortByCount } from "../../functions";
import { urls, CategoryUrls } from "../../interfaces/CategoriesUrl";
import { Stack } from "@mui/material";

export default function TopCategoryAndProduct() {
  const Navigate = useNavigate();
  const allData = useAppSelector((state) => state.products);
  const topFive = sortByCount(allData.products);
  const url: CategoryUrls = urls
  const [data, setData] = useState<Product[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-store-f2id.onrender.com/api/products/topcategory"
          // "http://localhost:8181/api/products/topcategory"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (cat: string) => {
    Navigate(`/categories/${cat}`);
  };

  return (
    <Stack sx={{justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h3">Top Categories</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row", border: "2px black solid", width: "95%", justifyContent: "center", alignItems: "center"}}>
        {data?.map((obj: Product, index: number) => (
          <Stack key={index} sx={{alignItems: "center"}}>
          <CategoryCard
          size={0}
            url={url[obj.category]}
            category={obj.category}
            onClick={handleClick}
          />
          <Typography variant="h5">{obj.category}</Typography>
          </Stack>
        ))}
      </Stack>
      <Typography variant="h3">Top Product</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row",padding: "4px", border: "2px black solid"}}>
        {topFive.map((obj, index) => (
          <ProductCard product={obj} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
