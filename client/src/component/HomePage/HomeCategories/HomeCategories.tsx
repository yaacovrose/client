import { useNavigate } from "react-router-dom";
import "./homeCategories.css";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";
import CategoryCard from "../../mui/Mui.CategotyCard";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

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
    <div id="category">
      {uniqueProductsByCategory.map((obj, index) => (
        <Stack spacing={2} alignItems={"center"}>
          <CategoryCard
            key={index}
            category={obj.category}
            url={urls[obj.category]}
            onClick={handleClick}
          />
          <Typography variant="h5">{obj.category}</Typography>
        </Stack>
      ))}
    </div>
  );
}
