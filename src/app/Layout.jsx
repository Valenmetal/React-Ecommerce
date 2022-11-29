import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import React from 'react'
import Footer from "../components/Footer"

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout