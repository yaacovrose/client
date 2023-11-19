import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Product from "../interface";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../app/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addTooCart = {
    productId: product?.id,
    quantity: 1,
  };

  const clickOnCard = (id: number) => {
    const compare = localStorage.getItem("compare1");
    if (compare) {
      navigate("/comparePrices");
    } else {
      navigate(`/productPage/${id}`);
    }
  };

  return (
    <Card
      sx={{
        margin: '15px',
        width: "100%",
        maxWidth:'230px',
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s, transform 0.3s",
        ":hover": {
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-10px)",
        },
      }}
    >
      <CardActionArea onClick={() => clickOnCard(product.id)}>
        <CardMedia
          component="img"
          height="200"
          alt={`${product?.title}`}
          src={`${product?.image}`}
          sx={{ objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: "hidden", textOverflow: "ellipsis", height: "3em" }}>
            {product.description}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">${product.price}</Typography>
            <IconButton    sx={{"&:hover": {
              backgroundColor: "#1976d2",
            color:'white'},}}
     onClick={(e) => { e.stopPropagation(); dispatch(addProduct(addTooCart)); }} color="primary">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
