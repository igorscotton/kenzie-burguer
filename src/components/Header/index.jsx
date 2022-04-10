import './style.css'
import Logo from "./Logo";
import InputSearch from "./inputSearch";

const Header = ({products, setProductsFilter, filterProduct}) => {
  return (
    <>
      <header className="header--app">
        <Logo></Logo>
        <InputSearch products={products} setProductsFilter={setProductsFilter} filterProduct={filterProduct}></InputSearch>
      </header>
    </>
  );
};

export default Header;
