import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const [greet, setGreet] = useState()
    const [avail, setAvail] =useState(false)
    
    useEffect(() => {
        setLoading(true)

        const detailRef = doc(db, "products", itemId)
        
        getDoc(detailRef)
            .then( (docSnapshot) => {
                if(docSnapshot.exists()){
                    const dbDetail  = {...docSnapshot.data(), id:docSnapshot.id}
                    setItem(dbDetail);
                    setAvail(true)
                    setGreet(dbDetail.nombre)
                    
                } else {
                    setItem({});
                    setGreet("Sorry!")
                    setAvail(false)
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