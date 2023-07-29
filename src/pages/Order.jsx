/* eslint-disable no-unused-vars */
import React from 'react';
import Ordersummery from '../components/component/Oderpage/Ordersummery';
import { useLoaderData } from 'react-router-dom';
import Productitems from '../components/component/Oderpage/Productitems';

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='w-full mt-10 mx-auto justify-center gap-40 flex '>
            <div className='grid gap-5'>
                {
                    cart.map(productitem => <Productitems
                    key={productitem.id}
                    productitem={productitem}
                    ></Productitems>)
                }
            </div>

            <div className='bg-red-200 h-96'>
            <Ordersummery cart={cart}></Ordersummery>
            </div>
        </div>
    );
};

export default Order;