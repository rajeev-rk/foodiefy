"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, selectCartItems, selectTotalPriceInCart, selectTotalUniqueProductsInCart } from '../redux/cartSlice'
import ProductCard from '@/components/ProductCard'

const Cart = () => {

    const Carts = useSelector(selectCartItems)
    console.log("🚀 ~ Cart ~ Carts:", Carts)
    const TotalProducts = useSelector(selectTotalUniqueProductsInCart)
    const TotalPrice = useSelector(selectTotalPriceInCart)

    const dispatch = useDispatch()
    const handleIncreaseQuantity = (item) => {
        dispatch(increaseItemQuantity(item));
       
    };

    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseItemQuantity(item));
    };



    return (
        <div className='p-4'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-xl mb-4 text-blue-800'>Cart</h1>
                <h1 className='font-bold text-md mb-4 text-blue-800'>Total Products: {TotalProducts}</h1>
            </div>
            {Carts.map((cartItem) => (
                <ProductCard
                    key={cartItem.id}
                    item={cartItem}
                    isInCart={{ isInCart: true, quantity: cartItem.quantity }}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                />
            ))}
            <div>
                <div>
                    {TotalPrice}
                </div>
            </div>

        </div>
    )
}

export default Cart