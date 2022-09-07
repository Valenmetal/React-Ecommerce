import React from 'react'
import { ItemCount } from './ItemCount';


function Item({ producto }) {

    const onAdd = (value) => {
        alert(`Se han agregado ${value} items`)
    }

    return (
        <div className="product">
            <h3 className="epigrafe"> {producto.name}</h3>
            <img className="img-product" src={producto.src} />
            <p className="epigrafe">${producto.price}</p>

            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default Item