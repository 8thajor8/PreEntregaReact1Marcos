

const ItemListContainer = ({greeting}) => {

    return(
        <section className="list__section">
            <div>
                <h1>{greeting}</h1>
                <hr/>
                <p>Proximamente partes y accesorios para toda la galaxia!</p>
            </div>
        </section>
    )
}

export default ItemListContainer