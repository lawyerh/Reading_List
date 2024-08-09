function SearchResult ({book, selected, onSelect}){

    const handleSelect = () => {
        onSelect(book.id)
    }
    return (
        <div onClick={handleSelect} className={`result ${selected ? "result__selected" : ""}`}>
            <img src={book.volumeInfo.imageLinks.thumbnail}  className="result__image"/>
            <p className="result__title">{book.volumeInfo.title}</p>
        </div>
    )
}

export default SearchResult;