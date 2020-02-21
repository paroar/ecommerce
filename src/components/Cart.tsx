import React, { Component } from 'react'
import { ProductConsumer } from '../context/productContext'
import Columns from './Columns';

export class Cart extends Component {
    render() {
        return (
            <ProductConsumer>

                {value=>{
                    const {cart} = value;
                    return (
                        
                        <Columns cart={cart}/>
                    )
                }}

            </ProductConsumer>


        )
    }
}

export default Cart
