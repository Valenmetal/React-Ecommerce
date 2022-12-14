import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import React from 'react'

function CartWidget() {

    const { totalItems } = useCartContext()

    return (
        <div>
            <Link to="/cart" className="nav-link cart">

                <p>{totalItems() || ''}</p>
                <button className='cartBtn'>
                    <svg viewBox="0 0 24 24" width="30" height="30" stroke="#eeeeed" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget