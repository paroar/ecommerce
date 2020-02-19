import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: lightgray;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  border: 1px solid orangered;
  color: orangered;
  background-color: transparent;
  padding: 0.5rem 2rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid goldenrod;
    color: goldenrod;
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/">
          <span>Products</span>
        </Link>
        <Link to="/cart">
          <Button>Cart</Button>
        </Link>
      </Nav>
    );
  }
}

export default Navbar;
