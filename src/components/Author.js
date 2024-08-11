import Book from "./Book";
import useBooksContext from "../hooks/useBooksContext";

function Author({name, titles}){
    const { books } = useBooksContext();

    const assignID = (title) => {
        let targetBook = books.find(book => book.title === title);
        return targetBook.id;
    }

    const mapBooks = () => {
        const preparedTitles = titles.map((title) => {
            return <Book title={title} id={assignID(title)} key={assignID(title)}/>
        })
        return preparedTitles;
    }

    

    return(
        <div className="book">
            
            <p className="book__title">{name}</p>
            {books.length ? mapBooks() : ""}
        </div>
    )
};

export default Author;
