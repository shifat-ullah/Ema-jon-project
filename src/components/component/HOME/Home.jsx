/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ShowData from '../showData/ShowData';

const Home = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[]);

    const hendleaddtocard =(dataitem)=>{
       console.log(dataitem)
    }

    return (
        <div className='flex'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    items.map(dataitem => <ShowData
                        key={dataitem.id}
                        dataitem={dataitem}
                        hendleaddtocard={hendleaddtocard}
                    ></ShowData>)
                }
            </div>

            <div className=' bg-red-200 w-[24%]   ml-8'>
                    <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Home;