import "./shoppingCart.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Remove } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, deleteProduct, increment, purchase } from "../../app/cartSlice";

const ShoppingCart = () => {
  const cart = useAppSelector(state => state.cart)
  const data = useAppSelector (state => state.products)
  const dispatch = useAppDispatch();
  
  return (
    <Stack spacing={3} sx={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography margin={"20px"} variant="h2">Shopping Cart</Typography>
      <Stack sx={{display: "flex", flexDirection: "row"}}>
      {cart.products.map((obj, index) => {
        const product = data.products.find(product => product.id === obj.productId);
        const quantity = obj.quantity
        return (
          
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" alt="green iguana" src={product?.image}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton onClick={()=>dispatch(deleteProduct(product?.id))} aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={()=>dispatch(increment(product?.id))} aria-label="add">
              <AddIcon />
            </IconButton>
            <IconButton onClick={()=>dispatch(decrement(product?.id))} aria-label="remove">
              <Remove />
            </IconButton>
            <Typography>
                {quantity}
            </Typography>
          </Card>
        );
      })}
      </Stack>
      
      <Button sx={{margin: "20px"}} variant="contained" disableElevation onClick={()=>dispatch(purchase())}>
        Make a Purchase
      </Button>
    </Stack>
  );
};
export default ShoppingCart;
