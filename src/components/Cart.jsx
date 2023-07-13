import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () =>{

    const { cart, totalCart, clearItem, clearCart } = useContext(CartContext)

    return (
        <section className="list__section">
                {
                    cart.length === 0
                    ? <div className="section__container text-center">
                        <h1 className="section__tittle">Your Cart is Empty</h1>
                    </div>

                    :<>
                    <div className="section__container">
                        <h1 className="section__tittle">Checkout List</h1>
                        <hr />
                    </div>
                    {
                        cart.map((prod) => (
                            <div key={prod.id} className="checkout__container d-block d-md-flex justify-content-between">
                                <div className="checkout__container__left d-block d-md-flex">
                                    <div className="d-flex flex-column align-content-center flex-wrap">
                                        <img className="card__image" src={prod.img} alt={prod.nombre} />
                                        <h4 className="card__tittle">Amount: {prod.cantidad}</h4>
                                    </div>
                                    <div className="px-4">
                                        <h4 className="card__tittle">{prod.nombre}</h4>
                                        <p className="card__desc">{prod.descripcion}</p>
                                    </div>
                                </div>
                                <div className="checkout__container__right d-flex flex-column text-center">
                                    <div>
                                        <p className="card__price">Precio: ${prod.precio}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => clearItem(prod.id)} className="btn btn-danger"><FaTrashAlt/></button>
                                    </div>
                                </div>
                            </div>


                        ))
                    }
                    
                    <div className="section__container pb-5">
                        <hr />
                        <h2 className="section__tittle">Total: ${totalCart()}</h2>
                        <button onClick={clearCart} className="btn btn-danger mx-auto d-flex align-items-center"><FaTrashAlt/>- CLEAR CART</button>
                        <Link className="my-2 mx-auto card__button" to="/checkout">Purchase</Link>
                        
                        
                    </div>

                </>}
                

        </section>
    )
}
export default Cart