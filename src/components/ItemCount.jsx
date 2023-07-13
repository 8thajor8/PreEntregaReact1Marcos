import { useState } from "react"

const ItemCount = ({max, counter, setCantidad}) => {
    
    
    const handleSumar = () => {
        counter < max && setCantidad(counter + 1)
    }

    const handleRestar = () => {
        counter > 1 && setCantidad(counter - 1)
    }

    return(
        <div className="d-flex mx-2 my-3 align-items-center justify-content-center">
            <button onClick={handleRestar} className ="btn btn-warning" disabled={counter === 1}>-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className ="btn btn-warning" disabled={counter === max}>+</button>
        </div>
        

    )

}

export default ItemCount