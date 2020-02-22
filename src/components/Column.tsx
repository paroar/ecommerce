import React from "react";
import { ProductProps, ProductConsumer } from "../context/productContext";
import { GiTrashCan } from "react-icons/gi";
import styled from "styled-components";

type ColumnProps = {
  item: ProductProps;
};

const Column: React.FC<ColumnProps> = ({ item }) => {
  const { id, title, img, price, count, total } = item;
  return (

    <ProductConsumer>
        {value=>{
            const {increment, decrement, remove} = value;
            return (
                <>
                <Img src={img} />
                <span>{title}</span>
                <span>{price}</span>
                <Quantity>
                  <Operation onClick={() => decrement(id)}>-</Operation>
                  <span>{count}</span>
                  <Operation onClick={() => increment(id)}>+</Operation>
                </Quantity>
                <GiTrashCan onClick={() => remove(id)} />
                <span>TOTAL: {total}</span>
                </>
            )

        }}
      
      </ProductConsumer>

  );
};

export default Column;

const Img = styled.img`
  width: 3rem;
`;

const Operation = styled.div`
  background-color: gray;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
`;

const Quantity = styled.div`
  display: flex;
`;
