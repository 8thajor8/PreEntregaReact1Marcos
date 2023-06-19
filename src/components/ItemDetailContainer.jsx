import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getData } from '../helpers/getData'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const [greet, setGreet] = useState()
    const [avail, setAvail] =useState(false)
    
    useEffect(() => {
        setLoading(true)
        
        getData(itemId)
            .then( (res) => {
                if(!itemId){
                    setItem(res)
                    setGreet("Welcome Traveller!")
                } else {
                    const filteredProduct = res.find((item) => item.id === itemId);
                    if (!filteredProduct) {
                        setItem(res);
                        setGreet("Sorry!")
                        setAvail(false)
                } else {
                    setItem(filteredProduct);
                    setAvail(true)
                    setGreet(filteredProduct.nombre)
                    }
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    

    return(
        <section className="list__section">
            <div className="section__container">
                <h1 className="section__tittle">{greet}</h1>
                <hr />
            </div>
            <div className="d-flex justify-content-center container-fluid pt-2">
            {
                loading ?
                    <div className='container-fluid loader d-inline-flex justify-content-center ' >
                        <div className="spinner-border text-warning spinner__size" role="status"></div>
                        <div className='loader__text'><span>Loading...</span></div>
                    </div>

                : <ItemDetail {...item} stateproduct={avail}/>
            }
            </div>

        </section>
    )
}

export default ItemDetailContainer