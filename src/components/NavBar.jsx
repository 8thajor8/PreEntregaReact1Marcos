
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const  NavBar = () => {

    return(
        <div className="navbar__container">
            <div className="navbar__brand">
                <Link className="navbar__brand__link" to="/">
                    <img src={logo} alt="astrosolutions" />
                </Link>
            </div>
            <nav>
                <ul className="navbar__list"> 
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products/robots">Robots</Link>
                    </li>
                    <li>
                        <Link to="/products/spaceships">Spaceships</Link>
                    </li>
                    <li>
                        <Link to="/products/parts">Parts</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </div>
        
    )
}

export default NavBar
