import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate(){
    // LOCAL STATE
    const [query, setQuery] = useState("")

    // APP STATE
    const {newBook} = useBooksContext();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newBook(query)
        setQuery('')
    }
    return(
        <div className="create">
            <form onSubmit={handleSubmit} className="create-form">
                <input value={query} onChange={handleChange} className="create-input" />
                <button className="create-button">
                    Add Book
                </button>
            </form>
        </div>
    )
}

export default BookCreate;