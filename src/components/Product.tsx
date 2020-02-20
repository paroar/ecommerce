import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { ProductConsumer } from "../context/productContext";

const StyledProduct = styled.div`
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(100, 100, 100, 0.5);
  margin: 1rem;
  display: grid;
  justify-content: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    .img {
      transform: scale(1.05);
    }
    .btn {
      transform: translateX(0);
    }
  }
`;

const BtnProduct = styled.button`
  justify-self: flex-end;
  margin-right: 0.5rem;
  cursor: pointer;
  transform: translateX(115%);
  transition: all 0.3s;
`;

const FooterProduct = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-around;
`;

type ProductProps = {
  product: {
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
};

export class Product extends Component<ProductProps> {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          const { addToCart, handleDetail } = value;

          return (
            <StyledProduct onClick={()=> handleDetail(id)}>
              <Link to="/details">
                <img className="img" src={img} alt="" />
              </Link>
              <BtnProduct
                disabled={inCart ? true : false}
                className="btn"
                onClick={() => addToCart(id)}
              >
                {inCart ? "in Cart" : <GiShoppingCart />}
              </BtnProduct>
              <FooterProduct>
                <p>{title}</p>
                <p>${price}</p>
              </FooterProduct>
            </StyledProduct>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;
