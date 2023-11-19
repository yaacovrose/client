import  { useEffect, useState } from "react";
import {AppBar, Toolbar,Button,IconButton, Stack,Typography,Badge,styled,InputBase,alpha,} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setName } from "../../app/flagSlice";
import Login from "../Login/Login";
import SignIn from "../SingIn/SingIn";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const InputBaseStyled = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const [quantity, setQuantity] = useState<number>(0);
  const userName = useAppSelector((state) => state.flag.name);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  const homePage = () => {
    Navigate(`/`);
  };

  const handleClick = () => {
    Navigate(`/shoppingCart`);
  };

  const productInCart = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    setQuantity(productInCart.length);
  }, [productInCart]);

  const handleSignOut = () => {
    dispatch(setName(""));
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Login />
          <SignIn />
          <Button onClick={handleSignOut} sx={{ color: "white" }}>
            Sign Out
          </Button>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginX: 2,
          }}
        >
          <Stack direction="row" spacing={3}>
            <HomeOutlinedIcon onClick={homePage} sx={{ color: "white" }} />
          </Stack>

          <IconButton onClick={handleClick} aria-label="cart">
            <StyledBadge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </StyledBadge>
          </IconButton>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "white",
            }}
          >
            <AccountCircleIcon />
            <Typography variant="h6">{userName}</Typography>
          </Stack>
        </Stack>

        <Search>
          <SearchIcon sx={{ color: "white" }} />
          <InputBaseStyled placeholder="Search…" />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
