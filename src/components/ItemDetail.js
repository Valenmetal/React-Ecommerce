import { useState } from "react";
import productos from "../products"
import { useEffect } from "react";
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom";

function ItemDetail() {

    const [p, setP] = useState([])

    const { prod } = useParams()

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
                <div className="productDetail">
                    <h3 className="epigrafe"> {productos[prod - 1].name}</h3>
                    <img className="img-detail-product" src={productos[prod - 1].src} />
                    <p className="epigrafe">${productos[prod - 1].price}</p>

                    <ItemCount stock={productos[prod - 1].stock} initial={1} onAdd={onAdd} />
                </div>
            }

        </>
    )
}

export default ItemDetail