import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext';
import { createOrder } from '../app/api';


const Formulario = () => {

    const { clearCart, cart, totalPrice } = useCartContext()
    const [formSent, setFormSent] = useState(false)

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    telefono: ''
                }}

                validate={(formData) => {
                    let errores = {};

                    //Validacion nombre

                    if (!formData.nombre) {
                        errores.nombre = 'Por favor ingrese un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    //Validacion email

                    if (!formData.email) {
                        errores.email = 'Por favor ingrese un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)) {
                        errores.email = 'El email solo puede contener letras, numeros, guiones, guiones bajos y puntos'
                    }

                    //Validacion telefono

                    if (!formData.telefono) {
                        errores.telefono = 'Por favor ingrese un telefono'
                    } else if (!/^\s*[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})\s*$/.test(formData.telefono)) {
                        errores.telefono = 'El telefono debe contener de 8 a 10 numeros'
                    }

                    return errores;
                }}

                onSubmit={(formData, { resetForm }) => {
                    resetForm();
                    /* clearCart(); */

                    let cartData = {
                        ...formData,
                        Total: totalPrice(),
                        productos: cart.map(p => ({ nombre: p.name, precio: p.price, cantidad: p.quantity, stock: p.stock, }))
                    }
                    console.log(cartData)
                    createOrder({ ...cartData })

                    setFormSent(true);
                    setTimeout(() => setFormSent(false), 3000);
                }}
            >

                {({ errors }) => (
                    <Form>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre"
                            />

                            <ErrorMessage name='nombre' component={(() => (
                                <div className=''>{errors.nombre}</div>
                            ))} />

                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />

                            <ErrorMessage name='email' component={(() => (
                                <div className=''>{errors.email}</div>
                            ))} />

                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <Field
                                type="text"
                                id="telefono"
                                name="telefono"
                                placeholder="Telefono"
                            />

                            <ErrorMessage name='telefono' component={(() => (
                                <div className=''>{errors.telefono}</div>
                            ))} />

                        </div>

                        <div className="centered">
                            <button className='btnComprar' type="submit">Comprar</button>
                            <button className='deleteCartBtn' onClick={() => clearCart()}>Vaciar Carrito</button>
                            {formSent && <p className=''>Comprado</p>}
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default Formulario