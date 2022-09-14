
import { Link } from 'react-router-dom'


function Item({ producto }) {


    return (
        <div className="product">
            <h3 className="epigrafe"> {producto.name}</h3>
            <img className="img-product" src={producto.src} />
            <p className="epigrafe">${producto.price}</p>

            <div className="centered">
                <Link to={`/product/${producto.id}`}>
                    <button className="addCartBtn"> Mas detalles </button>
                </Link>
            </div>
        </div>
    )
}

export default Item