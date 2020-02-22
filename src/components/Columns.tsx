import React from "react";
import { ProductProps } from "../context/productContext";
import Column from "./Column";
import styled from "styled-components";

type ColumnsProps = {
  cart: ProductProps[];
};


const Columns: React.FC<ColumnsProps> = ({ cart }) => {
  return (
    <>
    <ProductGrid>
      <div>products</div>
      <div>name of product</div>
      <div>price</div>
      <div>quantity</div>
      <div>remove</div>
      <div>total</div>
      {cart.map(e => (
        <Column item={e} key={e.id}/>
      ))}
    </ProductGrid>

    </>
  );
};

export default Columns;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  gap: 2rem;
`;