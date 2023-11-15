import "./heder.css";
import Login from "../Login/Login";
import SignIn from "../SingIn/SingIn";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


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

  const handleClick = () => {
    Navigate(`/shoppingCart`);
  };
  return (
    <div className="heder">
      <Login />
      <SignIn />

      <IconButton onClick={handleClick} aria-label="cart">
        <StyledBadge  badgeContent={8} color="secondary">
          <ShoppingCartIcon  />
        </StyledBadge>
      </IconButton>
    </div>
  );
}









