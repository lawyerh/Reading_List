import { useEffect, useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import defaultBookImage from "../img/book.jpeg"

function BookDisplay(){
    const [pageProgress, setPageProgress] = useState(1)

    const { books, updateTargetBook, targetBook, deleteBook  } = useBooksContext();

    const handleDelete = () => {
        deleteBook(targetBook.id)
        updateTargetBook(books[0].id)
    }

    // Style object to change the progress bar width
    const progressStyle = {
        
        "--progress": `${pageProgress}%`
    }

    const handleUpdateProgress = () => {
        let percentage = (targetBook.progress / targetBook.pageCount) * 100;
        setPageProgress(Math.ceil(percentage));
    }

    useEffect(() => {
        handleUpdateProgress();
    }, [targetBook]);

    if(targetBook.title){
        return(
            
            <div className="display">
                <div className="display__overview">
                    {/* If .image is saved as default, google books did not have cover art and we display a default */}
                    <img src={targetBook.image === "default" ? defaultBookImage : targetBook.image} alt={`Cover art for ${targetBook.title}`} className="display__photo"/>
                    <div className="display__title-container">
                        <p className="display__title">{targetBook.title}</p>
                        <p className="display__author">{targetBook.authors[0]}</p>
                        <p className="display__publisher">{targetBook.publisher}</p>
                    </div>
                    <button onClick={handleDelete} className="btn display__delete">Delete Book</button>
                </div>
                <div onLoad={handleUpdateProgress} className="display__progress-container">
                    <p className="display__progress-text">{`${targetBook.progress} / ${targetBook.pageCount}  pages`}</p>
                    <div className="display__progress" style={progressStyle}></div>
                </div>
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