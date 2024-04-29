import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  // Ensure that props.data is defined before destructuring its properties
  const { id, productName, price, productImage } = props.data || {};
  const { addToCart, cartItems } = useContext(ShopContext);

  // Check if id exists before rendering cart item count
  const cartItemCount = id ? cartItems[id] : 0;

  const handleDelete = () => {
    props.onDelete(id);
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} TL</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};
