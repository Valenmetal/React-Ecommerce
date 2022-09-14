import { useState } from "react";
import productos from "../products"
import { useEffect } from "react";
import Item from "./Item";
import { useParams } from 'react-router-dom';

function ItemList() {

    const [p, setP] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        setTimeout(() => {
            fetch('../products.js')
                .then(setP(productos))
        }, 500);
    }, [])

    useEffect(() => {

        setTimeout(() => {

            if (categoryId) {
                fetch('../products.js')
                    .then(setP(productos.filter(producto => producto.category === categoryId)))
            } else {
                fetch('../products.js')
                    .then(setP(productos))
            }

        }, 500);

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