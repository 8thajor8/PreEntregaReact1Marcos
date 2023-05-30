
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'

const  NavBar = () => {

    return(
        <div className="navbar__container">
            <div className="navbar__brand">
                <a className="navbar__brand__link" href="#">
                    <img src={logo} alt="astrosolutions" />
                </a>
            </div>
            <nav>
                <ul className="navbar__list"> 
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </div>
        
    )
}

export default NavBar
