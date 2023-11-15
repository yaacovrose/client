import CategoryCard from "../../mui/Mui.CategotyCard";
import ProductCard from "../../mui/Mui.ProductCard";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Product from "../../interface";
import { useAppSelector } from "../../../app/hooks";
import { sortByCount } from "../../functions";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";


const gridTemplateLargeScreen = `
"a b c d e"

"f g h i j"

"k l m n o"
`

const gridTemplateSmallScreen = `
"a b c"
"d e f"
"g h i"
"j k l"
"m n o"
`

export default function TopCategoryAndProduct() {
  const Navigate = useNavigate();

  const allData = useAppSelector((state) => state.products);

  const [data, setData] = useState<Product[] | undefined>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8181/api/products/topcategory"
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

  const topFive = sortByCount(allData.products);

  return (
    <Stack sx={{justifyContent: "center",}}>
      <Stack sx={{ display: "flex", flexDirection: "row"}}>
        {data?.map((obj: any, index: any) => (
          <Stack sx={{alignItems: "center"}}>
          <CategoryCard
            key={index}
            category={obj.category}
            onClick={handleClick}
          />
          <Typography variant="h5">{obj.category}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "row"}}>
        {topFive.map((obj, index) => (
          <ProductCard product={obj} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
