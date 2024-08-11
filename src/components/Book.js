import useBooksContext from "../hooks/useBooksContext";

function Book({title, id}){

    const { targetBook, updateTargetBook } = useBooksContext();

    const handleClick = () => {
        updateTargetBook(id)
    }

    return(
        <div onClick={handleClick} className={`book ${targetBook.id === id ? "selected" : ""}`}>
            
            <p className="book__title ">{title}</p>
        </div>
    )
}

export default Book;