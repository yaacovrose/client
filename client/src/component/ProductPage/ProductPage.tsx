// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import './productPage.css'


export default function productDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  // const navigate = useNavigate();

  // const getProduct = () => {
    const product = .....find(product => product.id === id)
    setProduct(product)
  // };

  // useEffect(() => {
    // getProduct();
  // }, []);

  return (
    <main>
      {product === null ? (
        <p></p>
      ) : (
        <div className="page">
          <div id="onlyTripCard" key={product.id}>
            {/* <img
              id={product.id === "4" ? "ingOnlyCard4" : "imgOnlyCard"}
              src={product.image}
            /> */}
            <div>
              <h4>title</h4>
              <p>{product.title}</p>

              <h4>description</h4>
              <p>{product.description}</p>

              <h4>category</h4>
              <p>{product.category}</p>

              {product.attribute.map((individual) => {
                return (
                  <div>
                    <h4>{individual.Description}</h4>
                    <p>{individual.Details}</p>
                  </div>
                );
              })}

              <h4>price</h4>
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
