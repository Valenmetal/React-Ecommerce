import { createContext, useState, useContext } from 'react'

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(prod => prod.id === item.id)
        if (product) {
            product.quantity += quantity
            newCart = [...cart]
        } else {
            product = { ...item, quantity: quantity };
            newCart = [...cart, product]
        }
        setCart(newCart)
    };

    const totalItems = () => cart.reduce((acc, cur) => acc + cur.quantity, 0);

    const totalPrice = () => cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)

    const clearCart = () => setCart([]);

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            cart,
            clearCart,
            removeItem,
            addProduct,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

