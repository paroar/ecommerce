import React, { Component } from "react";
import { ProductConsumer } from "../context/productContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  justify-content: center;
  align-items: center;
  z-index:1;
`;

const ModalContent = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  background-color: white;
  padding: 5rem;
`;

export class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { isModalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (isModalOpen) {
            return (
              <ModalContainer onClick={closeModal}>
                <ModalContent onClick={e => e.stopPropagation()}>
                  <h3>{title}</h3>
                  <h3>price: ${price}</h3>
                  <img src={img} />
                  <div className="buttons">
                    <Link to="/">
                      <button onClick={closeModal}>Go Back to Shopping</button>
                    </Link>
                    <Link to="/cart">
                      <button onClick={closeModal}>Go to Cart</button>
                    </Link>
                  </div>
                </ModalContent>
              </ModalContainer>
            );
          }
          return null;
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
