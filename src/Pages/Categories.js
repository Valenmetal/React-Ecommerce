import { useState, useEffect } from 'react';
import categoryList from '../categories'
import productos from '../products';
import ItemCount from '../components/ItemCount';


const Categories = () => {

    const [c, setC] = useState([])


    useEffect(() => {

        setTimeout(() => {
            fetch('../categories.js')
                .then(setC(categoryList))
        }, 500);


    }, [])

    const filtrar = (id) => {
        console.log(id)
        if (id === 0) {
            let filtrado = productos.filter(e => e.category === "male")
            let final = filtrado.map(e => {
                return (
                    <div className='product'>
                        <p className="epigrafe">{e.name}</p>
                        <img alt={e.description} src={e.src} className="img-product" />
                        <p className="epigrafe">{e.price}</p>
                        <ItemCount />
                    </div>)
            })
            setC(final)
        } else {

        }


    }



    return (
        <div>
            <div className="grid-area-body">
                <div className="titulo">

                    <h2>Categorias</h2>

                </div>

                <div className="categories">
                    {
                        c.map((category, id) =>

                            <div className="product" key={'categoria' + id}>
                                <h3 className="epigrafe"> {category.name}</h3>
                                <img alt="categoria" className="img-product" src={category.src} />

                                <div className="centered">
                                    <button id={id} onClick={(e) => { filtrar(e.id) }} className="addCartBtn"> Elegir </button>
                                </div>
                            </div>

                        )

                    }
                </div>
            </div>
        </div>
    )
}

export default Categories