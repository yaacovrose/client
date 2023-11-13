import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";
import { useAppSelector } from '../../app/hooks';


const Categories = () => {

  const {cat} = useParams()
  const [products, setProducts] = useState<Product[] | null>(null);
  const navigate = useNavigate();

      const data = useAppSelector((state) => state.products);

  const getProducts = () => {
    const dataProducts = data.products.filter(product => product.category == cat)
  
    setProducts(dataProducts)
  };
  useEffect(() => {
    getProducts();
  }, [data.products]);
  
  console.log(products);
  const getProductById = (id: number) => {
    navigate(`/productPage/${id}`);
  };

  return (
    <main>
      <div className="page">
        <div id="cards">
          {products === null ? (
            <p>kjljjhjk</p>
          ) : (
            products.map((product) => {
              return (
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={()=>getProductById(product.id)}>
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
