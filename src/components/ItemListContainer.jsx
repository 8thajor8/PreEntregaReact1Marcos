import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from "react-router-dom"
import Searchbar from './Searchbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import SELECT_CATEG from "../data/SELECT_CATEG"


const ItemListContainer = () => {
    const { categoryId } = useParams();
    let greeting;
    switch (categoryId){
        case 'robots':
            greeting = "Robots";
            break;
        case 'spaceships':
            greeting = "Spaceships";
            break;
        case 'parts':
            greeting = "Parts";
            break;
    }

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [greet, setGreet] = useState(greeting)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    

    useEffect(() => {
        setLoading(true)
        
        const productsRef = collection(db, "products")
        
        getDocs(productsRef)
        .then( (res) => {
            if(!categoryId){
                setProducts(SELECT_CATEG)
                setGreet("Welcome Traveller!")
            } else {
                const dbProducts = res.docs.map((doc) => ({...doc.data(), id: doc.id}))
                const filteredProducts = dbProducts.filter((item) => item.category === categoryId);
                if (filteredProducts.length === 0) {
                    setProducts(dbProducts);
                    setGreet("All Products")
            } else {
                setProducts(filteredProducts);
                setGreet(greeting)
                }
            }
        })


            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const list = search
        ? products.filter(prod => prod.nombre.toLowerCase().includes(search))
        : products

    return(
        <section className="list__section">
            <div className="section__container">
                <Searchbar />
                <h1 className="animate__animated animate__bounce section__tittle">{greet}</h1>
                <hr />
            </div>
            <div className="container-fluid pt-2">
            {
                loading ?
                    <div className='container-fluid loader d-inline-flex justify-content-center ' >
                        <div className="spinner-border text-warning spinner__size" role="status"></div>
                        <div className='loader__text'><span>Loading...</span></div>
                    </div>

                : <ItemList items={list}/>
            }
            </div>

        </section>
    )
}

export default ItemListContainer