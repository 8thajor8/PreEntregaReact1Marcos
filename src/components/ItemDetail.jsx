import { Link } from "react-router-dom"


const ItemList = ({id, nombre, precio, descripcion, img, category, stateproduct}) => {

    return (

        stateproduct ?

        <div className='animate__animated animate__slideInDown d-flex card__container  justify-content-center col-md-5'>
            <h4 className="card__tittle">{nombre}</h4>
            <div className="text-center"><img className='card__image' src={img} alt={nombre}/></div>
            <p className="card__desc">{descripcion}</p>
            <p className="card__price">Precio: ${precio}</p>
            <div className="d-flex justify-content-center"><Link className="card__button" to={`/products/${category}`}>Return to {category}</Link></div>
        </div>

        :

        <h4 className="card__tittle error__tittle">Can't find the product required</h4>

    )
}

export default ItemList