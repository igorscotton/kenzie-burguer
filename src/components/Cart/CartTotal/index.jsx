import './style.css'
const CartTotal = ({cartProducts, setCartProducts}) => {

      const totalPrice = () => {
            const totalValue = cartProducts.reduce((total, {price}) => {
                  return total + price
            }, 0);

            return totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      }

      return (
            <div className="cart--total">
                  <div className="total--value">
                        <p>Total</p>
                        <span>{totalPrice()}</span>
                  </div>
                  <button className="total--button" onClick={() => setCartProducts([])}>Remover Todos</button>
            </div>
      )
}

export default CartTotal