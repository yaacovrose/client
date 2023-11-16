import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import "./productPage.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { addProduct } from "../../app/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null | undefined>(null);
  const { id } = useParams();
  const data = useAppSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newProduct = data.products.find((p) => p.id === Number(id));
    setProduct(newProduct);
  }, [id, data.products]);

  const comparePrices = () => {
    localStorage.setItem("compare1", `${product?.id}`);
    navigate(`/categories/${product?.category}`);
  };

  const addToCart = () => {
    if (product) {
      dispatch(
        addProduct({
          productId: product.id,
          quantity: 1,
        })
      );
    }
  };

  return (
    <main>
      {product === null ? (
        <p>Loading...</p>
      ) : (
        <div className="page">
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

              {product?.attributes.map((individual, index) => (
                <div key={index}>
                  <h4>{individual.name}</h4>
                  <p>{individual.value}</p>
                </div>
              ))}

              <h4>price</h4>
              <p>{product?.price}</p>
            </div>
          </div>
        </div>
      )}
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon onClick={() => addToCart()} />
      </IconButton>
    </main>
  );
}
