import { useEffect, useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import defaultBookImage from "../img/book.jpeg"

function BookDisplay(){
    const [pageProgress, setPageProgress] = useState(1);
    const [newProgress, setNewProgress] = useState(0);

    const { books, 
        targetBook, 
        deleteBook, 
        editBookProgressByID  } = useBooksContext();


    // Delete book from Library
    const handleDelete = () => {
        deleteBook(targetBook.id)
        console.log(targetBook)
        // updateTargetBook(books.length ? books[0].id : 0 )
    }

    // LOGIC FOR PROGRESS BAR AND PAGE COUNT ***
    // Style object to change the progress bar width
    const progressStyle = {
        
        "--progress": `${pageProgress}%`
    }

    // Gets progress / pageCount as percentage and updates UI
    const updatePageProgressBar = () => {
        let percentage = (targetBook.progress / targetBook.pageCount) * 100;
        setPageProgress(Math.ceil(percentage));
    }

    // For submission of new page progress
    const handleProgressSubmit = async (e) => {
        e.preventDefault();
        await editBookProgressByID(targetBook.id, newProgress);
    }
    
    const handleProgressChange = (e) => {
        setNewProgress(e.target.value);
    }

    // Makes sure progress bar and new page progress input have correct data
    useEffect(() => {
        updatePageProgressBar();
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
                <div className="display__progress-container">
                    <p className="display__progress-text">{`${targetBook.progress} / ${targetBook.pageCount}  pages`}</p>
                    <form onSubmit={handleProgressSubmit} className="display__progress-form">
                        <input value={newProgress} onChange={handleProgressChange} type="number" className="display__progress-input"/>
                        <button>Submit Progress</button>
                    </form>
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