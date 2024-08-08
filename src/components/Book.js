import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";


function Book({title, id}){
    //LOCAL STATE
    // Input state for changing the book title
    const [newTitle, setNewTitle] = useState(title);
    // Toggles the input for changing book title
    const [showEdit, setShowEdit] = useState(false);

    // APP STATE
    const {editBook, deleteBook} = useBooksContext();


    // toggles new title input
    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }
    
    // input value handler
    const handleEditTitle = (e) => {
        setNewTitle(e.target.value)
    }

    // fires the App component's edit book function with new title
    const handleSubmitTitle = (e) => {
        e.preventDefault();
        editBook(newTitle, id);
        setShowEdit(!showEdit)
    }

    // deletes the book from the list
    const handleDeleteBook = () => {
        deleteBook(id)
    }

    return(
        <div className="book">
            <div onClick={handleDeleteBook} className="book__delete">&#9747;</div>
            <div onClick={handleShowEdit} className="book__edit">&#9998;</div>
            <div className="book__image"></div>
            {showEdit ? <form onSubmit={handleSubmitTitle}>
                            <input autoFocus value={newTitle} onChange={handleEditTitle} className="book__input"/>
                        </form> : <p className="book__title">{title}</p>}
        </div>
    )
}

export default Book;