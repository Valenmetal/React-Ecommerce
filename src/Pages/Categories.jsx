import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategory } from '../app/api';
import React from 'react'
import { Orbit } from '@uiball/loaders';

const Categories = () => {

    const [c, setC] = useState()

    useEffect(() => {

        getCategory()
            .then(category => setC(category))
    }, [])


    return (
        <div>

            {c ?
                <div className="grid-area-body">
                    <div className="titulo">

                        <h2>Categorias</h2>

                    </div>
                    <div className="categories">
                        {c.map((category, id) =>

                            <div className="product" key={'categoria' + id}>
                                <h3 className="epigrafe"> {category.name}</h3>
                                <img alt="categoria" className="img-product" src={category.src} />

                                <div className="centered">
                                    <Link className='link' to={`/categorias/${category.category}`}>
                                        <button className="addCartBtn"> Elegir </button>
                                    </Link>
                                </div>
                            </div>

                        )}
                    </div>
                </div>

                :
                <div className="loader">
                    <Orbit
                        size={35}
                        speed={1.5}
                        color="white"
                    />
                </div>
            }

        </div>
    )
}

export default Categories