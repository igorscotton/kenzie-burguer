import "./App.css";

import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  const filterProduct = (event, products, setProductsFilter) => {
    const produtos = products.filter((product) => {
      event.preventDefault()
      return product.name.toLowerCase().includes(event.target[0].value.toLowerCase())
    });
    setProductsFilter(produtos)
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => error);
  }, []);


  return (
    <div className="App">
      <Header products={products} setProductsFilter={setProductsFilter} filterProduct={filterProduct}></Header>
      <main>
        <ProductsList
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          productsFilter={productsFilter}
        ></ProductsList>
        <Cart
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></Cart>
      </main>
    </div>
  );
}

export default App;
