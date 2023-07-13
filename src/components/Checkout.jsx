import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Navigate, Link } from "react-router-dom"
import { collection, addDoc, updateDoc, doc, writeBatch, documentId , getDocs, query, where} from "firebase/firestore"
import { db } from "../firebase/config"

const Checkout = () =>{

    const { cart, totalCart, totalItems, clearCart } = useContext(CartContext)
    const [ orderId, setOrderId ] = useState(null)
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: ''

    })

    const handleInput = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

       
        const order = {
            client: values,
            items: cart,
            date: new Date(),
            cant: totalItems(),
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'products')
        
        const q = query(productsRef, where(documentId(), 'in', cart.map(item => item.id)))
        
        const products = await getDocs(q)
        
        const noStock = []

        products.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                noStock.push(item)
            }
        })

        if (noStock.length === 0){
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, order)
                        .then((doc) => {
                
                        setOrderId(doc.id)
                        clearCart()
                        })
                        .catch(err => console.log(err))

                })
        } else {
            alert('We seem to be out of stock for some of the products you selected')
        }

        

        
    }   

    if (orderId){
        return (
            <section className="list__section">
                <div className="section__container text-center">
                    <h2 className="section__tittle">Your Order Has Been Confirmed!</h2>
                    
                    <h3 className="section__tittle">Order Number: <strong>{orderId}</strong></h3>
                    <Link className="btn btn-warning mx-auto my-3 fw-bold" to='/'>Return Home</Link>
                </div>
            </section>
        )
    }
    
    if (cart.length === 0){
        return <Navigate to ='/'/>
    }
    
    return (
        <section className="list__section">
            <div className="section__container">
                <h1 className="section__tittle">Payment Details</h1>
                <hr />
            </div>

            <div className="d-flex justify-content-center">
                <form className="checkout__form ">
                    <input
                        value={values.name}
                        type="text"
                        placeholder="Name"
                        className="form-control my-3"
                        onChange={handleInput}
                        name='name'
                    />
                    <input
                        value={values.address}
                        type="text"
                        placeholder="Delivery Address"
                        className="form-control my-3"
                        onChange={handleInput}
                        name='address'
                    />
                    <input
                        value={values.email}
                        type="email"
                        placeholder="E-mail"
                        className="form-control my-3"
                        onChange={handleInput}
                        name='email'
                    />

                    <button onClick={handleSubmit} type="submit" className="btn btn-warning fw-bold my-2">CONFIRM</button>  
                </form>
            </div>

        </section>
    )
}

export default Checkout