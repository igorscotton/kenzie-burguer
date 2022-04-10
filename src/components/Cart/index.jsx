import "./style.css";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";

const Cart = ({cartProducts, setCartProducts}) => {
  const cartEmpty = () => {
    return (
      <>
        <div className="cart--name">
          {" "}
          <h2>Carrinho de compras</h2>
        </div>

        <div className="cart--empty">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      </>
    );
  };

  const cartWithProduct = () => {
    return (
      <>
        <div className="cart--name">
          {" "}
          <h2>Carrinho de compras</h2>
        </div>
        <div className="cart--products">
          {cartProducts.map((product) => {
            return  <CartProduct product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></CartProduct>
          })}
          <CartTotal cartProducts={cartProducts} setCartProducts={setCartProducts}></CartTotal>
        </div>
        
      </>
    );
  };

  return (
    <>
      <aside className="cart">{cartProducts.length !== 0 ? cartWithProduct() : cartEmpty()}</aside>
    </>
  );
};

export default Cart;
