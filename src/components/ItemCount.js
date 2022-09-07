import { useState } from "react";
import "../app/styles.css"

export function ItemCount({ stock, initial, onAdd }) {
    const [value, setValue] = useState(1)

    return (
        <div>
            <div className="container-precios">
                <button className="btnValue" onClick={() => {
                    value > initial
                        ? setValue(value - 1)
                        : setValue(value)

                }}> - </button>

                <p className="value">{value}</p>

                <button className="btnValue" onClick={() => {
                    value < stock
                        ? setValue(value + 1)
                        : setValue(value)

                }}> + </button>
            </div>

            <div className="precios">

                <button className="addCartBtn" onClick={() => { onAdd(value) }}>Add to Cart</button>
            </div>

        </div>
    )
}