import { useRef } from "react"
import { useSearchParams } from "react-router-dom"

const Searchbar = () => {

    const [, setSearchParams] = useSearchParams()
    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value.toLowerCase()
        
        if (value === ''){
            setSearchParams({})
            return
        }

       setSearchParams({
            search: value
        })
    }

    return (
        <form className="d-flex searchbar mb-4" onSubmit={handleSubmit}>
            <input 
                ref={ref}
                className="form-control"
                type="text"
            
            />
            
            <button type="submit" className="btn btn-warning mx-2">Search</button>
        </form>
    )
}

export default Searchbar