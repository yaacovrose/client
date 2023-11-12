import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
// import ".../style.css";
// import { Trip } from "../interface/interfaceTrip";
// import Footer from "../footer/footer";


const categories = ({category}) => {
    
    const [products, setProducts] = useState<any[] | null>(null);
    const navigate = useNavigate();

    const getProducts = () => {
        const product = .....filter(product => product.category === category)
        
    }

//   const getTrips = async () => {
//     try {
//       const res = await axios.get<Trip[]>("http://localhost:3000/api/trips");
//       if (res.data) {
//         const tripsFromServer: Trip[] = res.data;
//         setTrips(tripsFromServer);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  useEffect(() => {
    getProducts();
  }, []);

  const getProductById = (id: string) => {
    navigate(`/tripDetail/${id}`);
  };

//   const addTrip = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/negation");
//     } else {
//       navigate("/newTrip");
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

          <i
            id="addIcon"
            className="material-icons"
            onClick={() => {
              addTrip();
            }}
          >
            add_circle_outline
          </i>
        </div>
      </header> */}
   
   
      <div className="page">
        <div id="cards">
          {products === null ? (
            <p></p>
          ) : (
            products.map((product) => {
              return (
                <div
                  id="tripCard"
                  key={product.id}
                  onClick={() => getProductById(product.id)}
                >
                  <img src={product.image} />
                  <hr></hr>
                  <h3>{product.title}</h3>
                </div>
              );
            })
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );

      };

export default categories