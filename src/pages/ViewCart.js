import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import { CiDeliveryTruck } from "react-icons/ci";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";


const ViewCart = () => {
    const { cart, total, itemAmount } = useContext(CartContext);

    return (
        <div className="flex flex-col lg:flex-row justify-center w-full lg:w-3/4 mx-auto mt-40">
          
            <div className="lg:w-1/2 lg:pr-4">
                <h2 className="text-xl font-bold mb-4">Shopping Bag</h2>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>

            <div className="lg:w-1/2 lg:pl-4">
                <h2 className="text-xl font-bold mb-4">Summary</h2>
                <div className='flex flex-col gap-y-3 py-4 mt-4'>
                    <div className='flex w-full justify-between items-center'>
                        <div className='uppercase font-semibold'>
                            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                        </div>
                    </div>
                    
                    <Link
                        to='/'
                        className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'
                    >
                        Checkout
                    </Link>
                    
                    <div className="flex items-center mt-4 text-gray-600">
                        <CiDeliveryTruck className="mr-4 text-2xl" /> Free delivery
                    </div>

                    <div className="flex items-center mt-2 text-gray-600">
                        <BsArrowCounterclockwise className="mr-4 text-2xl" /> Free returns in 30 days
                    </div>

                    <div className="flex items-center mt-2 text-gray-600">
                        <RiSecurePaymentLine className="mr-4 text-2xl" /> Secure payment
                    </div>
                    
                    <div className="flex items-center mt-2 text-gray-600">
                        We accept: 
                        <FaCcVisa className="ml-2 mr-2 text-3xl" />
                        <FaCcMastercard className="mr-2 text-3xl" />
                        <FaCcPaypal className="mr-2 text-3xl" />
                        <SiAmericanexpress className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;








