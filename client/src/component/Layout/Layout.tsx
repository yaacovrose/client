import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Layout() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='lay' style={{ width: "100vw", backgroundColor:'white'}}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout