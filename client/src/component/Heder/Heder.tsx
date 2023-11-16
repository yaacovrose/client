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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const Navigate = useNavigate()

  const homePage = () => {
    Navigate(`/`);
  };

  const handleClick = () => {
    Navigate(`/shoppingCart`);
  };
  return (
    <div className="heder">
      <Login />
      <SignIn />

      <Stack direction="row" spacing={3}>
          <HomeOutlinedIcon onClick={homePage} />
        </Stack>

      <IconButton onClick={handleClick} aria-label="cart">
        <StyledBadge  badgeContent={8} color="secondary">
          <ShoppingCartIcon  />
        </StyledBadge>
      </IconButton>

  
    
    </div>
  );
}









