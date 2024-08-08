import { useContext } from "react";
import { GoogleContext } from "../contexts/GoogleContext";

function useGoogleContext () {
    return useContext(GoogleContext)
}

// Reduces code needed to utilize this context in a given component
export default useGoogleContext;