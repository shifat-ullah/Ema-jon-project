/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ShowData from '../showData/ShowData';
import Ordersummery from '../Oderpage/Ordersummery';

const Home = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const hendleaddtocard = (dataitem) => {
        const newcart = [...cart, dataitem]
        setCart(newcart)
        //    console.log(newcart)
    }

    return (
        <div className='flex container mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    items.map(dataitem => <ShowData
                        key={dataitem.id}
                        dataitem={dataitem}
                        hendleaddtocard={hendleaddtocard}
                    ></ShowData>)
                }
            </div>

            <div className='container mx-auto bg-red-200 w-[20%] ml-8'>

                {/* {
                    cart.map(showcart => <Ordersummery
                    key={showcart.id}
                    showcart={showcart}
                    ></Ordersummery>)
                } */}

                <Ordersummery
                cart={cart}
                >

                </Ordersummery>

                
                
            </div>
        </div>
    );
};

export default Home;