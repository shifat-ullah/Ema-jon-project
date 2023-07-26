/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Ordersummery = ({cart}) => {

let total =0;
let totalshiping = 0;
for(const products of cart){
     total =total + products.price;
     totalshiping = totalshiping + products.shipping;
}

const tax = total * 7 / 100;
const grandtotal = total + totalshiping + tax;
    return (
        <div className='p-3 sticky top-0'>
            <h1  className=' text-2xl'>Order Summery</h1>
            <div className='mt-3 '>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: $ {totalshiping}</p>
                <p>Tax : $ {tax}</p>
                <p>Grand Total: $ {grandtotal}</p>
            </div>

        </div>
    );
};

export default Ordersummery;