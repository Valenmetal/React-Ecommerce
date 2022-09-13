import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
import Layout from "./Layout"
import Categories from "../Pages/Categories"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>

                    <Route index element={<ItemListContainer />} />
                    <Route path="/categorias" element={<Categories />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router