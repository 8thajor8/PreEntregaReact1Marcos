
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import useMobile from '../hooks/useMobile'
import { Dropdown } from 'react-bootstrap';

const  NavBar = () => {

    const isMobile = useMobile()

    return(
        <>
        {
            isMobile

            ?<div className='d-flex py-3 justify-content-center'>
                <Dropdown>
                    <Dropdown.Toggle className="menu__button" variant="secondary" id="dropdown-basic">
                    MAIN MENU
                    </Dropdown.Toggle>
            
                    <Dropdown.Menu className='dropdown__menu'>
                        <Dropdown.Item className='dropdown__item' as={Link} to="/products/robots">Robots</Dropdown.Item>
                        <Dropdown.Item className='dropdown__item' as={Link} to="/products/spaceships">Spaceships</Dropdown.Item>
                        <Dropdown.Item className='dropdown__item' as={Link} to="/products/parts">Parts</Dropdown.Item>
                        <Dropdown.Item className='dropdown__item' as={Link} to="/cart">Cart</Dropdown.Item>
                    
                    </Dropdown.Menu>
                </Dropdown>
            </div>   

            :<div className="navbar__container">
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
        }
        </>
        
    )
}

export default NavBar
