import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getData } from '../helpers/getData'
import { useParams } from "react-router-dom"


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

    

    useEffect(() => {
        setLoading(true)
        
        getData(categoryId)
            .then( (res) => {
                if(!categoryId){
                    setProducts(res)
                    setGreet("Welcome Traveller!")
                } else {
                    const filteredProducts = res.filter((item) => item.category === categoryId);
                    if (filteredProducts.length === 0) {
                        setProducts(res);
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

    

    return(
        <section className="list__section">
            <div className="section__container">
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

                : <ItemList items={products}/>
            }
            </div>

        </section>
    )
}

export default ItemListContainer