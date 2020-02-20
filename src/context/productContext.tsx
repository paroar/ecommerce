import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data/data";
import Cart from "../components/Cart";

type ProductProps = {
  id: number;
  title: string;
  img: string;
  price: number;
  company: string;
  info: string;
  inCart: boolean;
  count: number;
  total: number;
};

const ProductContext = React.createContext({
  products: [] as ProductProps[],
  detailProduct: {} as ProductProps,
  handleDetail: (id: number) => {},
  addToCart: (id: number) => {}
});

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [] as ProductProps[],
    detailProduct: detailProduct,
    cart: [] as ProductProps[]
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts: ProductProps[] = [];
    storeProducts.forEach(p => {
      const singleItem = { ...p };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = (id:number) => {
    console.log("hello from detail");
    const product = this.getItem(id);
    this.setState({detailProduct: product});
  };

  getItem = (id:number) => {
    const item = this.state.products.find(c => (
      c.id === id
    ));
    return item;
  }

  addToCart = (id: number) => {
    let tempProducts = [...this.state.products];
    const item = this.getItem(id);
    //TODO
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          products: this.state.products,
          detailProduct: this.state.detailProduct,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
