import './style.css'
import Products from '../Products'

const ProductsList = ({products, cartProducts, setCartProducts, productsFilter}) => {


      return (
            <>
                  <section className="container--products">
                        {productsFilter.length > 0 ? productsFilter.map((product) => {
                               return <Products product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></Products>
                        }) : products.map((product) => {
                              return <Products product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></Products>
                        })}
                  </section>
            </>
      )
}

export default ProductsList