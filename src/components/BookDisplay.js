import Book from "./Book";
import useBooksContext from "../hooks/useBooksContext";

function BookDisplay(){

    const { books } = useBooksContext();

    return(
        <div className="display">
            {  books.length ? books.map((book) => {
                return <Book key={book.id} id={book.id} title={book.title}/>
            }) : <p className="display__text">Please add a book below</p>}
        </div>
    )
}

export default BookDisplay;