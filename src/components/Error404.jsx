import { Link } from "react-router-dom"

const Error404 = () =>{
    
    return(
        <section className="list__section" style={{ textAlign: 'center'}}>
            <div className="section__container">
                <h2 className="section__tittle">Parece que te has salido de orbita</h2>
            </div>
            <Link to="/"><button className="section__button">Calibrar Rumbo</button></Link>
        </section>
    )
}

export default Error404