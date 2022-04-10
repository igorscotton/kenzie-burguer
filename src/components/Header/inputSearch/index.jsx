import './style.css'

const InputSearch = ({products, setProductsFilter, filterProduct}) => { 

  return (
    <>
      <form className="search" onSubmit={(event) => {
          filterProduct(event, products, setProductsFilter)
        }}>
        <input
          className="input--search"
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <button className="button--search">Pesquisar</button>
      </form>
    </>
  );
};

export default InputSearch;
