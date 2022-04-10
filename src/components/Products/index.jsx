import "./style.css";
import {useState} from 'react';

const Products = ({product, cartProducts, setCartProducts}) => {

  const {category, id, img, name, price} = product
  
  const priceReal = (number) => {
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  const addProduct = () => {
    const haveProduct = cartProducts.includes(product);
    haveProduct ? setCartProducts([...cartProducts]):  setCartProducts([...cartProducts, product]);
  }

  return (
    <div key={id} className="card">
      <figure>
        <img
          className="card--image"
          src={img}
          alt=""
        />
      </figure>
      <div className="infos--card">
        <p className="card--name align">{name}</p>
        <span className="card--type align">{category}</span>
        <span className="card--price align">{priceReal(price)}</span>
        <button className="card--button" onClick={addProduct}>Adicionar</button>
      </div>
    </div>
  );
};

export default Products;
