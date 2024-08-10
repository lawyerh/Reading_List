import useBooksContext from "../hooks/useBooksContext";

function BookDisplay(){

    const { books } = useBooksContext();

    return(
        <div className="display">
            
        </div>
    )
}

export default BookDisplay;