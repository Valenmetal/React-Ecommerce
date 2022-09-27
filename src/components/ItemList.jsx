import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";
import { useParams } from 'react-router-dom';
import { getItems } from '../app/api';

function ItemList() {

    const [p, setP] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getItems()
            .then(items => setP(items))
    }, [])

    useEffect(() => {

        if (categoryId) {
            getItems()
                .then(items => setP(items.filter(item => item.category === categoryId)))
        } else {
            getItems()
                .then(items => setP(items))
        }

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