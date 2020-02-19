import React, { Component } from "react";
import { Product } from "./Product";
import Title from "./Title";
import { storeProducts } from "../data/data";
import { ProductConsumer } from "../context/productContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 25rem));
  justify-content: center;
  gap: 2rem;
`;

export class ProductList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <>
        <Title name={"Our"} title={"Products"} />
        <StyledProductList>
          <ProductConsumer>
            {value => {
              const {
                products,
                detailProduct,
                handleDetail,
                addToCart
              } = value;
              return products.map(p => <Product product={p} key={p.id} />);
            }}
          </ProductConsumer>
        </StyledProductList>
      </>
    );
  }
}

export default ProductList;
