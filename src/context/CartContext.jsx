'use client';
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product)=>
        setCart((prevCart) => [...prevCart, product]);{

    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };
    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        
    }

    return (
        <CartContext.Provider value={contextValue} >{children} </CartContext.Provider>
    )
} 