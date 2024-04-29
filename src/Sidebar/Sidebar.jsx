import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ onFilter, onAdd }) => {
  const [name, setName] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    productImage: "",
    color: "",
  });

  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();

  const handleFilter = () => {
    onFilter({ price: priceFilter, color: colorFilter });
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    setShowAddForm(false);
    onAdd(newProduct);
    setNewProduct({
      productName: "",
      price: "",
      productImage: "",
      color: "",
    });
    setFiles(null);
  };

  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result;
        setNewProduct({ ...newProduct, productImage: image });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div className="options">
        <label htmlFor="price">Price:</label>
        <select
          className="selector"
          id="price"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="0-100">0TL - 100TL</option>
          <option value="100-500">100TL - 500TL</option>
          <option value="500-1000">500TL - 1000TL</option>
          <option value="1000-2000">1000TL - 2000TL</option>
          <option value="2000+">2000TL and above</option>
        </select>

        <label htmlFor="color">Color:</label>
        <select
          className="selector"
          id="color"
          value={colorFilter}
          onChange={(e) => setColorFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="brown">Brown</option>
        </select>
      </div>
      <button className="apply-button" onClick={handleFilter}>
        Apply Filters
      </button>

      <div>
        <button className="addbutton" onClick={handleAdd}>
          Add Item
        </button>
      </div>

      {showAddForm && (
        <div className="add-form">
          <h2>Add Item</h2>
          <form onSubmit={handleAddFormSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <div className="imageLink">
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple
                onChange={handleImageChange}
              />
            </div>
            </div>
            {previews &&
              previews.map((pic, index) => {
                return <img key={index} src={pic} />;
              })}
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="productName">Name: </label>
              <input
              className="selector"
                type="text"
                id="productName"
                value={newProduct.productName}
                onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
              />
            </div>
           
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="price">Price: </label>
              <input
                className="selector"
                id="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
                
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="color">Color: </label>
              <select
                className="selector"
                id="color"
                value={newProduct.color}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, color: e.target.value })
                }
              >
                <option value="">Select Color</option>
                <option value="white">White</option>
                <option value="gray">Gray</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="brown">Brown</option>
              </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <button className="submit-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
