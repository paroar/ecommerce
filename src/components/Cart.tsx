import React, { Component } from 'react'
import { ProductConsumer, ProductProps } from '../context/productContext'
import Columns from './Columns';

const reducer = (acc:number, cur:ProductProps) => acc + cur.total; 


export class Cart extends Component {
    render() {
        return (
            <ProductConsumer>

                {value=>{
                    const {cart, clearCart} = value;
                    return (
                        <>
                        <Columns cart={cart}/>
                        TOTAL{cart.reduce(reducer,0)}
                        <span onClick={clearCart}>Clear Cart</span>
                        </>
                    )
                }}

            </ProductConsumer>


        )
    }
}

export default Cart
