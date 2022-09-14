import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
import Layout from "./Layout"
import Categories from "../Pages/Categories"
import ItemDetail from '../components/ItemDetail'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>

                    <Route index element={<ItemListContainer />} />
                    <Route path="/product/:prod" element={<ItemDetail />} />
                    <Route path="/categorias" element={<Categories />} />
                    <Route path="/categorias/:categoryId" element={<ItemListContainer />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router