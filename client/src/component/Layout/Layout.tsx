import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function Layout() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='lay' style={{ width: "80vw", backgroundColor: "rgb(236, 239, 228)"}}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout