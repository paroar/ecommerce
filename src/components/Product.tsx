import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const StyledProduct = styled.div`
  box-shadow: .3rem .3rem 0.3rem rgba(100, 100, 100, .5);
  margin: 1rem;
  display: grid;
  justify-content:center;
  gap: .5rem;
  overflow: hidden;
  transition: all .3s;

  &:hover{
      .img{
          transform:scale(1.05);
      }
      .btn{
        transform:translateX(0);
      }
  }
`;

const BtnProduct = styled.button`
    justify-self: flex-end;
    margin-right: .5rem;
    cursor: pointer;
    transform:translateX(115%);
    transition: all .3s;
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
      <StyledProduct>
        <Link to="/details">
          <img className="img" src={img} alt="" />
        </Link>
        <BtnProduct disabled={inCart ? true : false} className="btn">
          {inCart ? "in Cart" : <GiShoppingCart />}
        </BtnProduct>
        <FooterProduct>
          <p>{title}</p>
          <p>${price}</p>
        </FooterProduct>
      </StyledProduct>
    );
  }
}

export default Product;
