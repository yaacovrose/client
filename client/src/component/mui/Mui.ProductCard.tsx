// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Product from "../interface";
// import { useAppDispatch } from "../../app/hooks";
// import { addProduct } from "../../app/cartSlice";
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const dispatch = useAppDispatch()

//   const addTooCart = {
//     productId: product?.id,
//     quantity: 1
//   }

//   const navigate = useNavigate();

//   let compare2: string
//   const clickOnCard = (id: number) => {
//     const compare = localStorage.getItem("compare1");
//     if (compare) {
//       compare2 = `${id}`
//       localStorage.setItem("compare2", compare2);
//       navigate("/comparePrices");
//     } else {
//       navigate(`/productPage/${id}`);
//     }
//   };


//   return (
//     <Card sx={{ Width: "345px", border: "solid", borderRadius: "10px" }}>
//       <CardActionArea onClick={() => clickOnCard(product!.id)}>
//         <CardMedia component="img" height="140" alt={`${product?.title}`} src={`${product?.image}`} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {product?.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {product.description}
//           </Typography>
//           <Typography gutterBottom variant="body1" component="div">
//             {product.price + '$'}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <Button>
//         <IconButton color="primary" aria-label="add to shopping cart">
//           <AddShoppingCartIcon onClick={() => dispatch(addProduct(addTooCart))} />
//         </IconButton>
//       </Button>
//     </Card>
//   );
// };


// // export default ProductCard

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// import Product from "../interface";
// import { useAppDispatch } from "../../app/hooks";
// import { addProduct } from "../../app/cartSlice";
// import IconButton from '@mui/material/IconButton';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { CardActionArea } from "@mui/material";

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const addToCart = {
//     productId: product?.id,
//     quantity: 1
//   };

//   const clickOnCard = (id: number) => {
//     const compare = localStorage.getItem("compare1");
//     if (compare) {
//       navigate("/comparePrices");
//     } else {
//       navigate(`/productPage/${id}`);
//     }
//   };

//   return (
//     <Card sx={{ Width: "345px", border: "solid", borderRadius: "10px" }}>
//       <CardActionArea onClick={() => clickOnCard(product!.id)}>
//         <CardMedia component="img" height="140" alt={`${product?.title}`} src={`${product?.image}`} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {product?.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {product.description}
//           </Typography>
//           <Typography gutterBottom variant="body1" component="div">
//             {product.price + '$'}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <IconButton color="primary" aria-label="add to shopping cart" onClick={() => dispatch(addProduct(addToCart))}>
//         <AddShoppingCartIcon />
//       </IconButton>
//     </Card>
//   );
// };

// export default ProductCard;


import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Product from "../interface";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../app/cartSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addToCart = {
    productId: product?.id,
    quantity: 1,
  };

  let compare2: string;
  const clickOnCard = (id: number) => {
    const compare = localStorage.getItem("compare1");
    if (compare) {
      compare2 = `${id}`;
      localStorage.setItem("compare2", compare2);
      navigate("/comparePrices");
    } else {
      navigate(`/productPage/${id}`);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ border: "solid", borderRadius: "10px" }}>
        <CardActionArea onClick={() => clickOnCard(product!.id)}>
          <CardMedia component="img" height="140" alt={`${product?.title}`} src={`${product?.image}`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {product.price + '$'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => dispatch(addProduct(addToCart))}>
          <AddShoppingCartIcon />
        </IconButton>
      </Card>
    </Grid>
  );
};

export default ProductCard;