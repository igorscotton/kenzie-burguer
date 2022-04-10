import "./style.css";

const CartProduct = ({product, cartProducts, setCartProducts}) => {
   
  const {category, id, img, name, price} = product;

  const removeProduct = () => {
    const remove = cartProducts.indexOf(product.name && product.id, 0);

    cartProducts.splice(remove, 1);
    
    setCartProducts([...cartProducts]);    
  }

  return (
    <div key={id} className="cart--product">
      <figure className="cart--figure">
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="cart--infos">
        <div>
          <p>{name}</p>
        </div>
        <span>{category}</span>
      </div>
      <button className="cart--button" onClick={removeProduct}>Remover</button>
    </div>
  );
};

export default CartProduct;
