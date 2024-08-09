import "./App.css"
import BookDisplay from "./components/BookDisplay";
import BookCreate from "./components/BookCreate";
import Search from "./components/Search";

import useGoogleContext from "./hooks/useGoogleContext";

function App(){
const {query} = useGoogleContext();
    return(
        <div className="App">
            <h1 className="header">Reading list</h1>
            <BookDisplay />
            <BookCreate />
            {query.length ? <Search /> : ""}
        </div>
    )
}

export default App;