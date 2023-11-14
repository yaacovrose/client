import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useAppSelector } from "../../app/hooks";
import Heder from "../Heder/Heder";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface Prices {
  minPrice: number;
  maxPrice: number;
}

const Categories = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [filterProducts, setFilterProducts] = useState<Product[] | null>(null);
  const [value, setValue] = useState<string | number>("");
  const navigate = useNavigate();
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

  const getProductById = (id: number) => {
    navigate(`/productPage/${id}`);
  };

  const { minPrice, maxPrice }: Prices = products?.reduce(
    (acc, product) => ({
      minPrice: Math.min(acc.minPrice, product.price),
      maxPrice: Math.max(acc.maxPrice, product.price),
    }),
    { minPrice: Infinity, maxPrice: -Infinity }
    ) ?? { minPrice: 0, maxPrice: 0 };
    
    // setValue(maxPrice),

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
        <div id="cards">
          <Heder />
          <Box sx={{ width: 300 }}>
            <Slider
              // defaultValue={50}
              // aria-label="Default"
              // valueLabelDisplay="auto"
              value={typeof value === "number" ? value : 0}
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              aria-labelledby="dynamic-range-slider"
              valueLabelDisplay="auto"
            />
          </Box>
          {filterProducts === null ? (
            <p></p>
          ) : (
            filterProducts.map((product) => {
              return (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => getProductById(product.id)}>
                    <CardMedia
                      component="img"
                      height="140"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Categories;
