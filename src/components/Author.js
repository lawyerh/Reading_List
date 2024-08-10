import Book from "./Book";

function Author({name, titles}){

    //Receive books this author has worked on
    const mapBooks = () => {
        return titles.map((title) => {
            return <Book title={title}/>
        })
    }

    return(
        <div className="book">
            
            <p className="book__title">{name}</p>
            {mapBooks()}
        </div>
    )
};

export default Author;