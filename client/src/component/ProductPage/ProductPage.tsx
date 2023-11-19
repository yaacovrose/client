import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { addProduct } from "../../app/cartSlice";
import NestedModal from "../maps/Modal";

export default function ProductPage() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
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
    <Grid container spacing={3} justifyContent={"center"} alignItems={"center"} maxWidth={"80%"} maxHeight={"50%"}>
      <Grid item xs={9} sm={7} md={6} alignItems={"center"} display={"flex"} flexDirection={"column"}>
        <Typography variant="h4" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Title:
        </Typography>
        <Typography variant="body1" gutterBottom style={{ fontStyle: 'italic' }}>
          {product?.title}
        </Typography>

        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Description:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product?.description}
        </Typography>

        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Category:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product?.category}
        </Typography>
        <div >
        {product?.attributes?.map((individual, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
              {individual.key}:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {individual.value}
            </Typography>
          </div>
        ))}
        </div>

        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Price:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product?.price}
        </Typography>
      </Grid>
      <Grid item xs={9} sm={7} md={6}>
        <Grid container direction="column" alignItems="center" style={{ marginTop: "20px" }}>
          <Grid item>
            {product?.image && (
              <img
                src={product.image}
                alt="Product"
                style={{ width: "100%", height: "auto", marginBottom: "10px" }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item justifyContent={"space-evenly"} display={"flex"} width={"450px"}>
        <div>
          <Button variant="contained" color="primary" onClick={addToCart} >
            Add to Cart
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"

            onClick={comparePrices}
          >
            Compare Prices
          </Button>
        </div>
        <div>
          <NestedModal />
        </div>
      </Grid>
    </Grid>

  );
}
