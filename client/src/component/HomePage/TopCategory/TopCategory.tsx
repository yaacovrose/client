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

  interface CategoryUrls {
    [key: string]: string;
  }
  
  const urls: CategoryUrls = {
    fitness: "https://wnbf-il.com/wp-content/uploads/%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%A7-%D7%A4%D7%99%D7%96%D7%99%D7%A7-%D7%92%D7%91%D7%A8%D7%99%D7%9D-302x400.jpeg",
    sports: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vu03_j5Tao7SMpkEhLeccU_bIoLWFkbnvw&usqp=CAU",
    electronics: 'https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/06/01095053/Automotive-electronics-Cover-01-06.jpg',
    furniture: 'https://www.helencummins.com/wp-content/uploads/2022/09/sociasyrosello-02-resized-hc.jpg',
    home: 'https://lomi.com/cdn/shop/articles/kitchen-essentials-list.jpg?v=1661129742',
    health: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/03/960x0.jpeg.jpg',
    outdoors: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssR2Fo63ea0MXb0Ubht8lCh1PVG0VoXzLFA&usqp=CAU'
  };

  return (
    <Stack sx={{justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h3">Top Categories</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row", border: "2px black solid", width: "95%", justifyContent: "center", alignItems: "center"}}>
        {data?.map((obj: Product, index: number) => (
          <Stack key={index} sx={{alignItems: "center"}}>
          <CategoryCard
            url={urls[obj.category]}
            category={obj.category}
            onClick={handleClick}
          />
          <Typography variant="h5">{obj.category}</Typography>
          </Stack>
        ))}
      </Stack>
      <Typography variant="h3">Top Product</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row"}}>
        {topFive.map((obj, index) => (
          <ProductCard product={obj} key={index} />
        ))}
      </Stack>
    </Stack>
  );
}
