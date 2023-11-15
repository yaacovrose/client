import "./comparePrices.css";
import { useAppSelector } from "../../app/hooks";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../mui/Mui.ProductCard";


export default function ComparePrices() {
  const navigate = useNavigate();

  const id1 = localStorage.getItem("compare1");
  const id2 = localStorage.getItem("compare2");
  localStorage.removeItem('compare1')
  localStorage.removeItem('compare2')

  const data = useAppSelector((state) => state.products);

  const product1 = data.products.find((p) => p.id == id1);
  const product2 = data.products.find((p) => p.id == id2);
  const products = [product1, product2];

  const ok = () => {
    localStorage.removeItem("compare1");
    localStorage.removeItem("compare2");
    navigate(`/categories/${product1?.category}`);
  };

  return (
      <div
        id="cards"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products?.map((obj, index) => (
          <ProductCard product={obj} key={index} />
        ))}
      </div>
  );
}
