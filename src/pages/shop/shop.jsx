import React, { useEffect, useState } from "react";
import { Product } from "./product";
import Sidebar from "../../Sidebar/Sidebar";
import { Products } from "../../products";

export const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setFilteredProducts(savedProducts);
    } else {
      setFilteredProducts(Products);
    }
  }, []);

  const handleFilter = ({ price, color }) => {
    let filtered = Products;

    if (price) {
      const [minPrice, maxPrice] = price.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
    }

    if (color) {
      filtered = filtered.filter((product) => product.color === color);
    }

    setFilteredProducts(filtered);
  };

  const handleDelete = (id) => {
    const updatedFilteredProducts = filteredProducts.filter(
      (product) => product.id !== id
    );
    setFilteredProducts(updatedFilteredProducts);
    localStorage.setItem('products', JSON.stringify(updatedFilteredProducts));
  };

  const handleAdd = (newProduct) => {
    const updatedProducts = [...filteredProducts, { ...newProduct, id: filteredProducts.length + 1 }];
    setFilteredProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="shop">
      <Sidebar onFilter={handleFilter} onAdd={handleAdd} />
      <div className="shopTitle">
        <h1>HACATSHOP</h1>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};