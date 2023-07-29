/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import ShowData from '../../src/components/component/showData/ShowData';
import Ordersummery from '../components/component/Oderpage/Ordersummery';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    useEffect(()=>{
        // console.log(items)
        const storedcard = getShoppingCart();
        const savecard = []
        for(const id in storedcard){
            const addedproduct = items.find(product => product.id === id);
            if(addedproduct){
                const quantity = storedcard[id];
                addedproduct.quantity=quantity;
                savecard.push(addedproduct)
            }    
            console.log(addedproduct) 
        }
        setCart(savecard) 
    },[items])

    const hendleaddtocard = (dataitem) => {
        const newcart = [...cart, dataitem]
        setCart(newcart)
        //    console.log(newcart)
        addToDb(dataitem.id)
    }

    return (
        <div className='md:flex gap-4 sm:w-full container  mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:flex-auto gap-4'>
                {
                    items.map(dataitem => <ShowData
                        key={dataitem.id}
                        dataitem={dataitem}
                        hendleaddtocard={hendleaddtocard}
                    ></ShowData>)
                }
            </div>

            <div className='container mx-auto sm:w-72  bg-red-200 lg:w-[20%] md:w-auto '>

                {/* {
                    cart.map(showcart => <Ordersummery
                    key={showcart.id}
                    showcart={showcart}
                    ></Ordersummery>)
                } */}

                <Ordersummery cart={cart}></Ordersummery>
            </div>
        </div>
    );
};

export default Shop;