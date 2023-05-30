import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    const items = 5;

    return (
        <div className="icon__surround">
            <FontAwesomeIcon icon={faCartShopping} className="cart__icon" />
            <span className="cart__count">{items}</span>
        </div>
    )
}

export default CartWidget;