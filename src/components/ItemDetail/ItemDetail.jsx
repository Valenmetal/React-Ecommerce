import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { Link, useParams } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import { getItemById } from '../../app/api';
import { Orbit } from '@uiball/loaders';

function ItemDetail() {

    const [p, setP] = useState()

    const { addProduct } = useCartContext()

    const { prod } = useParams()

    const [show, setShow] = useState(true);


    const onAdd = (quantity) => {
        setShow(false)
        addProduct(p, quantity)
    }

    useEffect(() => {
        getItemById(prod)
            .then(item => {
                setP(item);
            })
    }, [])

    return (
        <>
            {p ?
                <div className="productDetail">
                    <h3 className="epigrafe"> {p.name}</h3>
                    <img alt={p.name} className="img-detail-product" src={p.src} />
                    <p className="epigrafe_price">${p.price}</p>

                    {
                        show
                            ? <ItemCount stock={p.stock} initial={1} onAdd={onAdd} />
                            : <Link className="link" to="/cart"><button className="addCartBtn">Finalizar compra</button></Link>
                    }
                </div>
                :
                <div className="loader">
                    <Orbit
                        size={35}
                        speed={1.5}
                        color="white"
                    /></div>
            }
        </>
    )
}

export default ItemDetail