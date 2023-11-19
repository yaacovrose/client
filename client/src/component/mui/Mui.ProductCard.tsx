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

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
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
    <Card
      sx={{
        margin: "15px",
        width: "100%",
        maxWidth: "230px",
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
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product?.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ overflow: "hidden", textOverflow: "ellipsis", height: "3em" }}
          >
            {product.description}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">${product.price}</Typography>
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addProduct(addToCart));
              }}
              color="primary"
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
