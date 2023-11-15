import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Product from "../interface";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../app/cartSlice";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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
  // const getProductById = (id: number) => {
  //   navigate(`/productPage/${id}`);
  // };
  const clickOnCard = (id: number) => {
    const compare = localStorage.getItem("compare1");
    if (compare) {
      localStorage.setItem("compare2", `${id}`);
      navigate("/comparePrices");
      // localStorage.removeItem('compare1')
    } else {
      navigate(`/productPage/${id}`);
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => clickOnCard(product.id)}>
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
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon onClick={()=>dispatch(addProduct(addTooCart))}/>
      </IconButton>
      {/* <Button onClick={()=>dispatch(addProduct(addTooCart))}>add to cart</Button> */}
    </Card>
  );
};


export default ProductCard