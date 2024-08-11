import defaultBookImage from "../img/book.jpeg";

function SearchResult ({book, selected, onSelect}){


    const handleSelect = () => {
        onSelect(book.id)
    }
    return (
        <div onClick={handleSelect} className={`result ${selected ? "selected" : ""}`}>
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : defaultBookImage} alt={book.volumeInfo.title}  className="result__image"/>
            <p className="result__title">{book.volumeInfo.title}</p>
        </div>
    )
}

export default SearchResult;