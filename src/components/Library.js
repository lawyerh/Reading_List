import useBooksContext from "../hooks/useBooksContext";
import {sortBooksByAuthor} from "../util/sortBooks";
import Author from "./Author";

function Library() {
    const {books} = useBooksContext();


    const mapAuthors = () => {
        // Map Author components with an array of their books
        const sortedBooks = sortBooksByAuthor(books);
        console.log(sortedBooks)
        const authorsWithBooks = [];
        let index = 0;
        for(let author in sortedBooks) {
            authorsWithBooks.push(<Author key={index} name={author} titles={sortedBooks[author]} />)
            index++;
        }
        return authorsWithBooks;
    }

    return (
        <div className="library">
            {mapAuthors()}
        </div>
    )
}

export default Library;