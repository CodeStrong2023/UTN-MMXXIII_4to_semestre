import { Outlet } from 'react-router-dom'
import {Nav} from './Nav'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <Nav />
            <main className="min-h-[80vh] flex justify-center items-center">
                <Outlet />
                
            </main>
          
        </>
    )
}

export default Layout