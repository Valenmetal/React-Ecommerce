import { useCartContext } from '../context/CartContext';


const CartItem = ({ product }) => {

    const { removeItem } = useCartContext()

    return (
        <>
            <div className='productInCart'>
                <div className="prod_in_cart" id={product.id}>
                    <p className="epigrafe" id="name">{product.name}</p>
                    <img src={product.src} className="img-product-cart" />
                    <div className="epigrafe-container">
                        <p className="epigrafe" id="price">${product.price}</p>
                        <button className="remove_prod_cart" onClick={() => removeItem(product.id)}>Eliminar</button>
                        <p className="cantidad">Cantidad: {product.quantity}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem