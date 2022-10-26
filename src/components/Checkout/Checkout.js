import React, {} from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

const checkoutInfo = useLoaderData();

console.log(checkoutInfo)
    return (
        <div className='container mt-4'>
            <h1 className='mb-4'>{checkoutInfo.name} </h1>
            <div className='text-start'>
             <p className='fs-4'>Product Code: {checkoutInfo.code}</p>
             <p className='fs-4'>Product Price: {checkoutInfo.price}</p>
             <p className='fs-4'>Shipping Cost: {checkoutInfo.price}</p>
             <p className='fs-4'>Delivery Time: {checkoutInfo.code}</p>
             
            </div>
        </div>
    );
};

export default Checkout;