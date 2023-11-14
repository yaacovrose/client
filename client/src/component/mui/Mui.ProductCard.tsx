import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Product from "../interface";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../app/cartSlice";

interface ProductCardProps {
  product: Product;
}

 const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const addTooCart = {
    productId:product.id,
    quantity:1
  }

  const navigate = useNavigate();
  const getProductById = (id: number) => {
    navigate(`/productPage/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => getProductById(product.id)}>
        <CardMedia component="img" height="140" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={()=>dispatch(addProduct(addTooCart))}>add to cart</Button>
    </Card>
  );
};


export default ProductCard