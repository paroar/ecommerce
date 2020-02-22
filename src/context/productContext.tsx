import React, { Component } from "react";
import { storeProducts } from "../data/data";

export type ProductProps = {
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
  addToCart: (id: number) => {},
  openModal: (id: number) => {},
  closeModal: () => {},
  modalProduct: {} as ProductProps,
  isModalOpen: false,
  increment: (id: number) => {},
  decrement: (id: number) => {},
  remove: (id: number) => {},
  clearCart: () => {},
  cart: [] as ProductProps[]
});

class ProductProvider extends Component {
  state = {
    products: [] as ProductProps[],
    detailProduct: {} as ProductProps,
    cart: [] as ProductProps[],
    isModalOpen: false,
    modalProduct: {} as ProductProps,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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

  handleDetail = (id: number) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  getItem = (id: number) => {
    return this.state.products.find(c => c.id === id);
  };

  addToCart = (id: number) => {
    let tempProducts = [...this.state.products];
    const item = this.getItem(id);
    if (item) {
      const index = tempProducts.indexOf(item);
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
      this.setState({
        products: tempProducts,
        cart: [...this.state.cart, product]
      });
    }
  };

  openModal = (id: number) => {
    const product = this.getItem(id);
    if (product) {
      this.setState({
        isModalOpen: true,
        modalProduct: product
      });
    }
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  increment = (id: number) => {
    const tempCart = [...this.state.cart];
    const item = this.getItem(id);
    if (item) {
      item.count++;
      item.total = item.price * item.count;
    }
    this.setState({
      cart: [...tempCart]
    });
  };

  decrement = (id: number) => {
    const tempCart = [...this.state.cart];
    const item = this.getItem(id);
    if (item && item.count > 1) {
      item.count--;
      item.total = item.price * item.count;
      this.setState({
        cart: [...tempCart]
      });
    } else {
      this.remove(id);
    }
  };

  remove = (id: number) => {
    const item = this.getItem(id);
    if (item) {
      const tempCart = this.state.cart.filter(c => c.id !== id);
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(item);
      const product = tempProducts[index];
      product.inCart = false;
      this.setState({
        products: tempProducts,
        cart: tempCart
      });
    }
  };

  clearCart = () => {
    this.state.cart.forEach(e => this.remove(e.id));
    this.setState({
      cart: []
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          products: this.state.products,
          detailProduct: this.state.detailProduct,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          modalProduct: this.state.modalProduct,
          isModalOpen: this.state.isModalOpen,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove,
          clearCart: this.clearCart,
          cart: this.state.cart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
