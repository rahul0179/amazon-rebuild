import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {

        total = total + product.price;
        shipping = shipping + product.shipping

    }
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price : ${total} </p>
            <p>Total Shipping :{shipping} </p>
            <p>Tax</p>
            <h5>Grand Total</h5>


        </div>
    );
};

export default Cart;