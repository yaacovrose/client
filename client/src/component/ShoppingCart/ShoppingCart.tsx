import "./shoppingCart.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { findProductById } from "../functions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const ShoppingCart = () => {

  const cart = useAppSelector(state => state.cart.products)

  const dispatch = useAppDispatch();

  const handlePurchase = () => {
    // console.log('Purchase completed:', cart);
    // setCart([]);
  };

  return (
    <div>
      {cart.map((obj, index) => {
        const product = findProductById(obj.productId);
        const quantity = obj.quantity

        return (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" alt="green iguana" src={product!.image}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
            <IconButton aria-label="remove">
              <Remove />
            </IconButton>
            <Typography>
                {quantity}
            </Typography>
          </Card>
        );
      })}
      <Button variant="contained" disableElevation onClick={handlePurchase}>
        Make a Purchase
      </Button>
    </div>
  );
};

export default ShoppingCart;
