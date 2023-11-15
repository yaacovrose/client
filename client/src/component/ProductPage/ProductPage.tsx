import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import "./productPage.css";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Heder from "../Header/Header";

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null | undefined>(null);
  const { id } = useParams();
  const data = useAppSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    const newProduct = data.products.find((p) => p.id === parseInt(id));
    setProduct(newProduct);
  }, [id, data.products]);

  const comparePrices = () => {
    localStorage.setItem('compare1', `${product?.id}`)
    navigate(`/categories/${product?.category}`);
  };

  const addToCart = () => {
    window.alert("נוסף לעגלה");
  };
  return (
    <main>
      {product === null ? (
        <p>Loading...</p>
      ) : (
        <div className="page">
          <Heder />
          <Button variant="contained" onClick={comparePrices}>
            Compare prices
          </Button>
          <div id="onlyTripCard" key={product?.id}>
            <div>
              <h4>Title</h4>
              <p>{product?.title}</p>

              <h4>Description</h4>
              <p>{product?.description}</p>

              <h4>Category</h4>
              <p>{product?.category}</p>

              {product?.attribute.map((individual, index) => (
                <div key={index}>
                  <h4>{individual.Description}</h4>
                  <p>{individual.Details}</p>
                </div>
              ))}

              <h4>price</h4>
              <p>{product?.price}</p>
            </div>
          </div>
        </div>
      )}
      <Button variant="contained" onClick={addToCart}>
        add to cart
      </Button>
    </main>
  );
}
