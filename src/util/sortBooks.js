function sortBooksByAuthor(booksArr){
    // console.log(booksArr);
    if(!booksArr.length){
        return <p>No books in library</p>
    }
    else {
        const authorsAndBooks = {};

        for(let i = 0; i< booksArr.length; i++){
            // If author's works are already present in Obj
            if(authorsAndBooks[booksArr[i].authors[0]]){
                // Push title into authors array
                authorsAndBooks[booksArr[i].authors[0]].push(booksArr[i].title)
            }
            else { // Else make the array
                authorsAndBooks[booksArr[i].authors[0]] = [booksArr[i].title]
            }
            // console.log(booksArr[i].authors[0])
        }
        // console.log(authorsAndBooks);
        return authorsAndBooks;
    }
}

export {sortBooksByAuthor};