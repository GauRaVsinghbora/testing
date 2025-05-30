import React from 'react'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import Services from '../components/services/services.jsx'
import { Outlet } from 'react-router-dom'
import About from '../components/about/about.jsx'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        <Services/>
        <About/>
        <Footer />
        </>
    )
}

export default Layout