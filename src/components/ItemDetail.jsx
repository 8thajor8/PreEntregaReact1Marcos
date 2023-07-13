import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({id, nombre, precio, descripcion, img, category, stock, stateproduct}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        const product = {
            id, nombre, precio, descripcion, img, category, stock, stateproduct, cantidad
        }

        addToCart(product)
    }

    return (

        stateproduct ?

        <div className='animate__animated animate__slideInDown d-flex card__container  justify-content-center col-md-5'>
            <h4 className="card__tittle">{nombre}</h4>
            <div className="text-center"><img className='card__image' src={img} alt={nombre}/></div>
            <p className="card__desc">{descripcion}</p>
            <p className="card__price">Precio: ${precio}</p>
            
            {
                isInCart(id)
                ?   <div className="d-flex flex-column justify-content-center">
                        <Link className="my-2 mx-auto card__button" to="/cart">Proceed to Checkout</Link>
                    </div>
                : <><ItemCount 
                    max={stock}
                    counter={cantidad}
                    setCantidad={setCantidad}
                    
                />  <div className="d-flex flex-column justify-content-center">
                        <button onClick={handleAgregar} className="my-2 mx-auto card__button">Add to Cart</button>
                    </div>
                </>
            }   

            
            

            <div className="d-flex flex-column justify-content-center">
                <Link className=" mx-auto card__button" to={`/products/${category}`}>Return to {category}</Link>
            </div>
        </div>

        :

        <h4 className="card__tittle error__tittle">Can't find the product required</h4>

    )
}

export default ItemDetail