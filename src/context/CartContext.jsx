import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id )
    }

    const totalCart = () => {
        return cart.reduce((acc, prod) =>  acc + prod.precio * prod.cantidad, 0) 
    }

    const totalItems = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const clearItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            totalCart,
            totalItems,
            clearItem,
            clearCart

        }}>
            {children}
        </CartContext.Provider>
    )

}