import useBooksContext from "../hooks/useBooksContext";
import {sortBooksByAuthor} from "../util/sortBooks";
import Author from "./Author";

function Library() {
    const {books} = useBooksContext();


    const mapAuthors = () => {
        // Map Author components with an array of their books
        const sortedBooks = sortBooksByAuthor(books);
        const authorsWithBooks = [];
        // Authors need a unique key
        let index = 0;
        // sortedBooks contains {authors: [works]}
        //Generating an Author component with their works as a prop
        for(let author in sortedBooks) {
            authorsWithBooks.push(<Author key={index} name={author} titles={sortedBooks[author]} />)
            index++;
        }
        return authorsWithBooks;
    };

    return (
        <div className="library">
            {mapAuthors()}
        </div>
    )
};

export default Library;