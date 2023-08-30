import React from "react";
import useFetchData from "./UseFetchData";
import '../Styles/Product.css';

function Product() {
  const { data } = useFetchData(`https://fakestoreapi.com/products`);

  return (
    <div className="product-list">
      <h1>Les plus vendus</h1>
      <div className="cards-container">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{parseFloat(product.price).toFixed(2)} €</p>
            <p>Catégorie:{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
