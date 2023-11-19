import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import Product from "../../interface";
import CategoryCard from "../../mui/Mui.CategotyCard";
import Typography from "@mui/material/Typography";
import { CategoryUrls, urls } from "../../interfaces/CategoriesUrl";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import './homeCategoy.css'

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
  const url: CategoryUrls = urls;

  const handleClick = (cat: string) => {
    Navigate(`/categories/${cat}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <Carousel  responsive={responsive} infinite={true}>
      {uniqueProductsByCategory.map((cat, index) => (
        <div>
        <div key={index} onClick={() => handleClick(cat.category)}>
          <CategoryCard 
            category={cat.category}
            url={url[cat.category]} 
            size={0} 
            onClick={() => handleClick(cat.category)}
          />
        </div>
          <Typography >
            {cat.category}
          </Typography>
          </div>
      ))}
    </Carousel>
    
  );
}
