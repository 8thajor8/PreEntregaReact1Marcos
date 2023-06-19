import ItemCard from './ItemCard'

const ItemList = ({items}) => {

    return (
        <div className='row justify-content-center'>
                {
                    items.map((prod,index) => <ItemCard key={prod.id} {...prod} />)
                }
        </div>
    )
}

export default ItemList