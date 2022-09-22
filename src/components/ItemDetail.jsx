import { useState, useEffect } from "react";
import productos from "../products";
import ItemCount from "./ItemCount"
import { Link, useParams } from "react-router-dom";
import { useCartContext } from '../context/CartContext';

function ItemDetail() {

    const [p, setP] = useState([])

    const { addProduct, cart } = useCartContext()

    const { prod } = useParams()

    const [show, setShow] = useState(true);


    const onAdd = (quantity) => {
        setShow(false)
        addProduct(p, quantity)
        console.log(`Se han agregado ${quantity} items`)
    }

    useEffect(() => {

        setTimeout(() => {
            fetch('../products.js')
                .then(() => {
                    setP(productos[prod - 1])
                })
        }, 500);


    }, [])

    return (
        <>

            {
                <div className="productDetail">
                    <h3 className="epigrafe"> {p.name}</h3>
                    <img className="img-detail-product" src={p.src} />
                    <p className="epigrafe">${p.price}</p>

                    {
                        show
                            ? <ItemCount stock={p.stock} initial={1} onAdd={onAdd} />
                            : <Link to="/cart"><button className="addCartBtn" onClick={() => console.log(cart)
                            }>Finalizar compra</button></Link>
                    }
                </div>
            }

        </>
    )
}

export default ItemDetail