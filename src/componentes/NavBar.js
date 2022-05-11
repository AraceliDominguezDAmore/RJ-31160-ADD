import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import useCartContext from '../store/CartContext'

function NavBar () {
    const { contextFunction } = useCartContext();
    contextFunction()

    return(
        <header className="bg-indigo-300 container-fluid shadow-xl text-gray-600 body-font mb-5">
            <nav className="flex justify-between">
                <Link to="/" className="mr-5 hover:text-gray-900">Disqueria Online</Link>
                <ul>
                    <li>
                        <Link to="/category/One Direction" className="mr-5 hover:text-gray-900">1 D</Link>
                        <Link to="/category/5 Seconds of Summer" className="mr-5 hover:text-gray-900">5 SOS</Link>
                        <Link to="/category/BTS" className="mr-5 hover:text-gray-900">BTS</Link>
                    </li>
                </ul>  
                <div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar