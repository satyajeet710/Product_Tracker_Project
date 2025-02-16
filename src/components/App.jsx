import React from "react";
import Card from "./Card";
import products from "../products";

function createCard(product) {
  return (
    <Card
      key={product.id}
      name={product.title}
      img={product.images}
      brand={`Brand: ${product.brand}`}
      price={`Price: ${product.price}`}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Products</h1>
      {products.map(createCard)}

      {/* <Card
        key={product[0].id}
        name={product[0].title}
        img={product[0].images}
        brand={`Brand: ${product[0].brand}`}
        price={`Price: ${product[0].price}`}
      />
      <Card
        key={product[1].id}
        name={product[1].title}
        img={product[1].images}
        brand={`Brand: ${product[1].brand}`}
        price={`Price: ${product[1].price}`}
      />
      <Card
        key={product[2].id}
        name={product[2].title}
        img={product[2].images}
        brand={`Brand: ${product[2].brand}`}
        price={`Price: ${product[2].price}`}
      /> */}
    </div>
  );
}

export default App;
