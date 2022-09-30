import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
import ItemList from "../components/ItemList"
import Layout from "./Layout"
import Categories from "../Pages/Categories"
import ItemDetail from '../components/ItemDetail'
import Cart from "../Pages/Cart"
import { CartProvider } from '../context/CartContext';
import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route element={<Layout />}>

                        <Route index element={<ItemList />} />
                        <Route path="/product/:prod" element={<ItemDetail />} />
                        <Route path="/categorias" element={<Categories />} />
                        <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />

                    </Route>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Router