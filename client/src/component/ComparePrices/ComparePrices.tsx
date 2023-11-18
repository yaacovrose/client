import "./comparePrices.css";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import ProductCard  from "../mui/Mui.ProductCard";
import { Button } from "@mui/material";

export default function ComparePrices() {
  const navigate = useNavigate();

  const id1 = localStorage.getItem("compare1");
  const id2 = localStorage.getItem("compare2");
  localStorage.removeItem("compare1");
  localStorage.removeItem("compare2");

  const data = useAppSelector((state) => state.products);

  const product1 = data.products.find((p) => p.id === Number(id1));
  const product2 = data.products.find((p) => p.id === Number(id2));
  const products = [product1, product2];

  const back = () => {
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
      {products.map((obj, index) => {
        if (obj) {
          return <ProductCard product={obj} key={index} />;
        }
      })}
      <Button variant="outlined" onClick={back}>
        back
      </Button>
    </div>
  );
}
