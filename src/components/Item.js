import React from 'react'


function Item({ producto }) {


    return (
        <div className="product">
            <h3 className="epigrafe"> {producto.name}</h3>
            <img className="img-product" src={producto.src} />
            <p className="epigrafe">${producto.price}</p>

            <div className="centered">
                <button className="addCartBtn"> Mas detalles </button>
            </div>
        </div>
    )
}

export default Item