/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Ordersummery = ({cart}) => {
let total =0;
let totalshiping = 0;
let quantity =0;
for(const products of cart){
    // if(products.quantity === 0){
    //     products.quantity =1;
    // }
    products.quantity = products.quantity || 1;
    // products.quantity = products.quantity || 1;
     total =total + products.price * products.quantity;
     totalshiping = totalshiping + products.shipping;
     quantity = quantity + products.quantity;
}

const tax = total * 7 / 100;
const grandtotal = total + totalshiping + tax;
    return (
        <div className='sticky top-0'>
            <h1  className='mt-5 ml-5 text-2xl'>Order Summery</h1>
            <div className='mt-2 p-5 grid gap-3'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: $ {totalshiping}</p>
                <p>Tax : $ {tax}</p>
                <p>Grand Total: $ {grandtotal}</p>
            </div>

        </div>
    );
};

export default Ordersummery;