import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { Trip } from "../interface/interfaceTrip";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import Footer from "../footer/footer";

export default function productDetail() {
  const [product, setProduct] = useState<any | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = () => {
    const product = .....find(product => product.id === id)
  };

//   const deleteTripFromServer = async () => {
//     try {
//       const options = {
//         headers: { authorization: localStorage.getItem("token") },
//       };
//       const res = await axios.delete(
//         `http://localhost:3000/api/trips/${id}`,
//         options
//       );

//       if (res.data) {
//         navigate(`/trips`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  useEffect(() => {
    getProduct();
  }, []);

//   const updateTrip = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/negation");
//     } else {
//       navigate(`/update/${id}`);
//     }
//   };

//   const deleteTrip = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/negation");
//     } else {
//       if (confirm("Delete trip?") === true) deleteTripFromServer();
//     }
//   };

  return (
    <main>
      {/* <header>
        <div id="icon-header">
          {
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
          }
          <Link to={"/"}>
            <i id="homeIcon" className="material-icons">
              home
            </i>
          </Link>
        </div>
        <Link to={"/trips"}>
          <button>All trips</button>
        </Link>
      </header> */}
      {product === null ? (
        <p></p>
      ) : (
        <div className="page">
          <div id="onlyTripCard" key={product.id}>
            <img
              id={product.id === "4" ? "ingOnlyCard4" : "imgOnlyCard"}
              src={product.image}
            />
            <div>
              <h4>title</h4>
              <p>{product.title}</p>

              <h4>destination</h4>
              <p>{product.destination}</p>

              <h4>category</h4>
              <p>{product.category}</p>

{product.attribute.map((individual) => {
    return(
<div>
            <h4>{individual.Description}</h4>
            <p>{individual.Details}</p>
</div>

    )
})}

<h4>price</h4>
              <p>{product.price}</p>
              <hr></hr>

              {/* <div id="icons">
                {
                  <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                  ></link>
                }
                <i
                  id="deleteIcon"
                  className="material-icons"
                  onClick={() => {
                    deleteTrip();
                  }}
                >
                  delete
                </i>
                <i
                  id="editIcon"
                  className="material-icons"
                  onClick={() => updateTrip()}
                >
                  edit
                </i>
              </div> */}
            </div>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </main>
  );
}
