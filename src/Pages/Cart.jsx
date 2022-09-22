import CartItem from '../components/CartItem';
import { useCartContext } from '../context/CartContext';


const Cart = () => {

    const { clearCart, cart, totalPrice } = useCartContext()


    return (
        <div>
            {cart.length === 0
                ? <div className='cart_container'>
                    <div className="no-prod"> No hay productos en el carrito 🛒 </div>
                </div>
                : <div className='cart_container'>
                    {
                        cart.map(product => <CartItem key={product.id} product={product} />)
                    }

                    <h3 className='final_price'>Total: ${totalPrice()}</h3>
                    <button className='btn_comprar' onClick={() => alert("Comprado")}>Comprar</button>
                    <button className='remove_prod_cart' onClick={() => clearCart()}>Vaciar Carrito</button>

                </div>

            }</div>)


}
export default Cart