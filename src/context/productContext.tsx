import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data/data";

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
  handleDetail: () => {},
  addToCart: () => {}
});

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
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
