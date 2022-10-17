import React, { useState } from "react";
import "../../app/styles.css"

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="centered">
            <div className="container-precios">
                <button className="btnValue" onClick={() => {
                    quantity > initial
                        ? setQuantity(quantity - 1)
                        : setQuantity(quantity)

                }}> - </button>

                <p className="value">{quantity}</p>

                <button className="btnValue" onClick={() => {
                    quantity < stock
                        ? setQuantity(quantity + 1)
                        : setQuantity(quantity)

                }}> + </button>
            </div>

            <div className="precios">

                <button className="addCartBtn" onClick={() => { onAdd(quantity) }}>Agregar al carrito</button>
            </div>

        </div>
    )
}
export default ItemCount