import { Link } from "react-router-dom"
import { useRef, useEffect } from "react";

const ItemCard = ({id, nombre, precio, descripcion, img}) => {
    
    let direct
    const handleCategiory = (getId) => {
        if (id === "c1") {
            direct= "/products/spaceships";
        } else if (id === "c2") {
            direct= "/products/robots";
        } else if (id === "c3") {
            direct= "/products/parts";
        } else {
            direct = `/detail/${id}`;
        }
    };

    handleCategiory(id)

    return (
        
        <Link className='animate__animated animate__zoomIn card__container  col-md-5 col-lg-3 col-xl-2 ' to={direct}>
            <h4 className="card__tittle">{nombre}</h4>
            <div className="text-center"><img className='card__image' src={img} alt={nombre}/></div>
        </Link>
    )
}

export default ItemCard