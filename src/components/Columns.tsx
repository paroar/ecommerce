import React from "react";
import Product from "./Product";
import { ProductProps } from "../context/productContext";
import Column from "./Column";

type ColumnsProps = {
  cart: ProductProps[];
};

const Columns: React.FC<ColumnsProps> = ({ cart }) => {
  return (
    <>
      <div>Columns</div>
      {cart.map(e => (
        <Column />
      ))}
    </>
  );
};

export default Columns;
