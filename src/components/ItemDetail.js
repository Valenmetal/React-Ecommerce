import { useState } from "react";
import productos from "../products"
import { useEffect } from "react";
import ItemCount from "./ItemCount"

function ItemDetail({ producto }) {

    const [p, setP] = useState([])
    const onAdd = (value) => {
        alert(`Se han agregado ${value} items`)
    }

    useEffect(() => {

        setTimeout(() => {
            fetch('../products.js')
                .then(setP(productos))
        }, 1000);


    }, [])



    return (
        <>
            {
                <div>
                    <h3 className="epigrafe"> {productos[1].name}</h3>
                    <img className="img-detail-product" src={productos[1].src} />
                    <p className="epigrafe">${productos[1].price}</p>

                    <ItemCount stock={productos[1].stock} initial={1} onAdd={onAdd} />
                </div>
            }

        </>
    )
}

export default ItemDetail