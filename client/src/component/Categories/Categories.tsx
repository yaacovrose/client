import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product";


const categories = ({ category }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const navigate = useNavigate();

  const getProducts = () => {
    const products = .....filter(product => product.category === category)
    setProducts(products)
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProductById = (id: number) => {
    navigate(`/productPage/${id}`);
  };

  return (
    <main>
      <div className="page">
        <div id="cards">
          {products === null ? (
            <p></p>
          ) : (
            products.map((product) => {
              return (
                // <div
                //   id="tripCard"
                //   key={product.id}
                //   onClick={() => getProductById(product.id)}
                // >
                //   {/* <img src={product.image} /> */}
                //   <hr></hr>
                //   <h3>{product.title}</h3>
                // </div>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={()=>getProductById(product.id)}>
                  <CardMedia
                    component="img"
                    height="140"
                    // image={product.}
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

export default categories;
