import { useCartContext } from '../context/CartContext';
import React from 'react'

const CartItem = ({ product }) => {

    const { removeItem } = useCartContext()

    return (
        <>

            <div className="prod_in_cart" id={product.id}>
                <p className="name_in_cart" id="name">{product.name}</p>
                <img alt={product.name} src={product.src} className="img-product-cart" />
                <p className="epigrafe" id="price">${product.price}</p>
                <div className="epigrafe-container">
                    <button className="remove_prod_cart" onClick={() => removeItem(product.id)}>Eliminar</button>
                    <p className="cantidad">Cantidad: {product.quantity}</p>
                </div>
            </div>

        </>
    )
}

export default CartItem