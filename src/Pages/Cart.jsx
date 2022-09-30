import CartItem from '../components/CartItem';
import Formulario from '../components/Formulario';
import { useCartContext } from '../context/CartContext';
import React from 'react'

const Cart = () => {

    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            {cart.length === 0
                ? <div className='cart_container'>
                    <div className="no-prod"> No hay productos en el carrito <span role="img" aria-label="cart">🛒</span> </div>
                </div>
                : <div className='cart_container'>
                    {
                        cart.map(product => <CartItem key={product.id} product={product} />)
                    }
                    <div className="centered">
                        <Formulario />

                    </div>
                    <h3 className='final_price'>Total: ${totalPrice()}</h3>

                </div>

            }</div>)

}

export default Cart