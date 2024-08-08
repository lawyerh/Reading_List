import "./App.css"
import BookDisplay from "./components/BookDisplay";
import BookCreate from "./components/BookCreate";

function App(){

    return(
        <div className="App">
            <h1 className="header">Reading list</h1>
            <BookDisplay />
            <BookCreate />
        </div>
    )
}

export default App;