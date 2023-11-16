import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'


function Layout() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "70vw", background: "coral" }}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout