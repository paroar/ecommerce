import React, { Component } from "react";
import { ProductConsumer } from "../context/productContext";
import { Link } from "react-router-dom";
import Title from "./Title";
import styled from "styled-components";

type BtnDetailsProps = {
  inCart: boolean;
};

const BtnDetails = styled.button<BtnDetailsProps>`
  color: ${p => (p.inCart ? "goldenrod" : "green")};
  border: 1px solid ${p => (p.inCart ? "goldenrod" : "green")};
  background-color: transparent;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { detailProduct,addToCart } = value;

          return (
            <>
              <Title name={detailProduct.title} title="" />
              <img src={detailProduct.img} />
              <h2>Model:{detailProduct.title}</h2>
              <h4>Made by {detailProduct.company}</h4>
              <h4>Price: ${detailProduct.price}</h4>
              <h3>Some info about product: {detailProduct.info}</h3>
              <Link to="/">Back to products</Link>
              <Link to="/details">
                <BtnDetails
                  inCart={detailProduct.inCart}
                  disabled={detailProduct.inCart}
                  onClick={() => addToCart(detailProduct.id)}
                >
                  {detailProduct.inCart ? "in Cart" : "Add to Cart"}
                </BtnDetails>
              </Link>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
