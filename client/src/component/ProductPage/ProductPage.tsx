// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Product from "../interfaces/Product";
// import "./productPage.css";
// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import { addProduct } from "../../app/cartSlice";
// import NestedModal from "../maps/Modal";

// export default function ProductPage() {
//   const [product, setProduct] = useState<Product | undefined>(undefined);
//   const { id } = useParams();
//   const data = useAppSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const newProduct = data.products.find((p) => p.id === Number(id));
//     setProduct(newProduct);
//   }, [id, data.products]);

//   const comparePrices = () => {
//     localStorage.setItem("compare1", `${product?.id}`);
//     navigate(`/categories/${product?.category}`);
//   };

//   const addToCart = () => {
//     if (product) {
//       dispatch(
//         addProduct({
//           productId: product.id,
//           quantity: 1,
//         })
//       );
//     }
//   };

//   return (
//     <main>
//       {product === null ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="page">
//           <div id="onlyTripCard" key={product?.id}>
//             <div>
//               <h4>Title</h4>
//               <p>{product?.title}</p>

//               <h4>Description</h4>
//               <p>{product?.description}</p>

//               <h4>Category</h4>
//               <p>{product?.category}</p>

//               {product?.attributes?.map((individual, index) => (
//                 <div key={index}>
//                   <h4>{individual.key}</h4>
//                   <p>{individual.value}</p>
//                 </div>
//               ))}

//               <h4>price</h4>
//               <p>{product?.price}</p>
//             </div>
//           </div>
//         </div>
//       )}
//           <Button variant="contained" onClick={comparePrices}>
//             Compare prices
//           </Button>
//       <Button variant="contained" onClick={addToCart}>
//         add to cart
//       </Button>
//       <NestedModal/>
//     </main>
//   );
// }


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Product Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    Title
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product?.title}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product?.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Category
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product?.category}
                  </Typography>

                  {product?.attributes?.map((individual, index) => (
                    <div key={index}>
                      <Typography variant="h6" gutterBottom>
                        {individual.key}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {individual.value}
                      </Typography>
                    </div>
                  ))}

                  <Typography variant="h6" gutterBottom>
                    Price
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {product?.price}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={8} md={6}>
        <Grid container direction="column" alignItems="center" style={{ marginTop: "20px" }}>
          {product?.image && (
            <img
              src={product.image}
              alt="Product"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
            />
          )}
          <Button variant="contained" color="primary" onClick={addToCart}>
            Add to Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={comparePrices}
            style={{ marginTop: "10px" }}
          >
            Compare Prices
          </Button>
          <NestedModal/>
        </Grid>
      </Grid>
    </Grid>
  );
}
