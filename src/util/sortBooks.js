function sortBooksByAuthor(booksArr){
    // console.log(booksArr);
    if(!booksArr.length){
        return <p>No books in library</p>
    }
    else {
        const authorsAndBooks = {};
        

        for(let i = 0; i< booksArr.length; i++){
            if(booksArr[i].authors){
                // If author's works are already present in Obj
                if(authorsAndBooks[booksArr[i].authors[0]]){
                    // Push title into authors array
                    authorsAndBooks[booksArr[i].authors[0]].push(booksArr[i].title)
                }
                else { // Else make the array
                    authorsAndBooks[booksArr[i].authors[0]] = [booksArr[i].title]
                }
                // console.log(booksArr[i].authors[0])
            } else {
                // If no author is given, add the title to a list of books with unknown authors
                if(!authorsAndBooks.unknown) authorsAndBooks.unknown = [booksArr[i].title];
                else authorsAndBooks.unknown.push(booksArr[i].title);         
                } 
        }
        console.log(authorsAndBooks);
        return authorsAndBooks;
    }
}

//Expects object containing {authorsName: ["title1", "title2"...],}
function sortAuthorsAlphabetically (AuthorsArr) {
    
}

export {sortBooksByAuthor};