import useBooksContext from "../hooks/useBooksContext";

function BookDisplay(){

    const { books, updateTargetBook, targetBook, deleteBook  } = useBooksContext();

    const handleDelete = () => {
        deleteBook(targetBook.id)
        updateTargetBook(books[0].id)
    }

    if(targetBook.title){
        return(
            
            <div className="display">
                <div className="display__overview">
                    <img src={targetBook.image} alt={`Cover art for ${targetBook.title}`} className="display__photo"/>
                    <div className="display__title-container">
                        <p className="display__title">{targetBook.title}</p>
                        <p className="display__author">{targetBook.authors[0]}</p>
                        <p className="display__publisher">{targetBook.publisher}</p>
                    </div>
                    <button onClick={handleDelete} className="btn display__delete">Delete Book</button>
                </div>
                <div className="display__progress"></div>
                <div className="display__description">
                    {targetBook.description}
                </div>
            </div>
        )
    } else {
        return <p className="display__empty">Please select a book from your library</p>
    }
}

export default BookDisplay;