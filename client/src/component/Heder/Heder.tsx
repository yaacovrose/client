import "./heder.css";
import Login from "../Login/Login";
import SignIn from "../SingIn/SingIn";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const [quantity, setQuantity] = useState<number>(0);

  const Navigate = useNavigate();

  const homePage = () => {
    Navigate(`/`);
  };

  const handleClick = () => {
    Navigate(`/shoppingCart`);
  };

  const productInCart = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    let num = 0;
    productInCart.map((product) => {
      num += product.quantity;
      setQuantity(num);
    });
  }, [productInCart]);

  return (
    <div className="heder">
      <Login />
      <SignIn />

      <Stack direction="row" spacing={3}>
        <HomeOutlinedIcon onClick={homePage} />
      </Stack>

      <IconButton onClick={handleClick} aria-label="cart">
        <StyledBadge badgeContent={quantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>

      <div>
        <AccountCircleIcon />
        <span>{localStorage.getItem("userName")}</span>
      </div>
    </div>
  );
}
