import "./header.css";
import Login from "../Login/Login";
import SignIn from "../SingIn/SingIn";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
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
  const userName = useAppSelector((state) => state.flag.name)

  const Navigate = useNavigate();

  const homePage = () => {
    Navigate(`/`);
  };

  const handleClick = () => {
    Navigate(`/shoppingCart`);
  };

  const productInCart = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    setQuantity(productInCart.length)
  }, [productInCart]);


  const handleSignOut = () => {
    localStorage.removeItem("userName");
  };


  return (
    <div className="header" style={{ justifyContent: "space-between", alignItems: "center", display: "flex" }}>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Login />
        <SignIn />
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Stack>


      <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Stack direction="row" spacing={3}>
          <HomeOutlinedIcon onClick={homePage} />
        </Stack>

        <IconButton onClick={handleClick} aria-label="cart">
          <StyledBadge badgeContent={quantity} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>


        <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <AccountCircleIcon />
          <Typography variant="h6">{userName}</Typography>
        </Stack>
      </Stack>

    </div>
  );
}
