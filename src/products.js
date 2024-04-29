/*import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export function Products() { // Renamed from `datas`
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3110/getProducts")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.productImage} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.color}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
*/
import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

export const Products = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
    color:"gray"
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
    color:"gray"
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
    color:"black"
  },
  {
    id: 4,
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: product4,
    color:"gray"
  },
  
  {
    id: 5,
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: product6,
    color:"green"
  },
  {
    id: 6,
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: product7,
    color:"white"
  },
  {
    id: 7,
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: product8,
    color:"brown"
  },
];
