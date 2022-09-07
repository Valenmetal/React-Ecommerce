import { useState } from "react";
import productos from "../products"
import { useEffect } from "react";
import Item from "./Item";

function ItemList() {

    const [p, setP] = useState([])


    useEffect(() => {

        setTimeout(() => {
            fetch('../products.js')
                .then(setP(productos))
        }, 2000);


    }, [])



    return (
        <div className="products">
            {
                p.map((producto, id) =>
                    <Item key={'producto' + id} producto={producto} />

                )
            }

        </div>
    )
}

export default ItemList