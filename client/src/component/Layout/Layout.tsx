import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.css'


function Layout() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='lay' style={{ width: "80vw"}}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout