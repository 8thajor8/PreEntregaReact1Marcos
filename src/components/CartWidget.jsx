import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {
    
    const { totalItems } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <div className="icon__surround">
                <FontAwesomeIcon icon={faCartShopping} className="cart__icon" />
                <span className="cart__count">{totalItems()}</span>
            </div>
        </Link>
    )
}

export default CartWidget;