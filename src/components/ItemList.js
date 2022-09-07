import { useState } from "react";
import productos from "../products"
import { ItemCount } from './ItemCount';
import { useEffect } from "react";

function ItemList() {

    const [p, setP] = useState([])


    useEffect(() => {

        setTimeout(() => {
            fetch('../products.js')
                .then(setP(productos))
        }, 2000);


    }, [])

    const onAdd = (value) => {
        alert(`Se han agregado ${value} items`)
    }

    return (
        <div className="products">
            {
                p.map((producto, id) => <div className="product" key={'producto' + id}>
                    <h3 className="epigrafe"> {producto.name}</h3>
                    <img className="img-product" src={producto.src} />
                    <p className="epigrafe">${producto.price}</p>

                    <ItemCount stock={4} initial={1} onAdd={onAdd} />
                </div>)
            }

        </div>
    )
}

export default ItemList