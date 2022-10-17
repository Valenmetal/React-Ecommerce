import CartItem from '../components/CartItem/CartItem';
import Formulario from '../components/Formulario/Formulario';
import { useCartContext } from '../context/CartContext';
import React from 'react'
import { Orbit } from '@uiball/loaders';

const Cart = () => {

    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            {cart ?
                cart.length === 0
                    ? <div className='cart_container'>
                        <div className="no-prod centered"> No hay productos en el carrito <span role="img" aria-label="cart">🛒</span> </div>
                    </div>
                    : <div className='cart_container'>
                        {
                            cart.map(product => <CartItem key={product.id} product={product} />)
                        }
                        <div className="centered">
                            <Formulario />

                        </div>
                        <h3 className='total_container'>Total: ${totalPrice()}</h3>

                    </div>

                :
                <div className="loader">
                    <Orbit
                        size={35}
                        speed={1.5}
                        color="white"
                    /></div>
            }
        </div>
    )

}

export default Cart