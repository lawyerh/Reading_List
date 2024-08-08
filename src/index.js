import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Provider } from './contexts/BooksContext';
import { GoogleBooksProvider } from './contexts/GoogleContext';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider>
        <GoogleBooksProvider>
            <App />
        </GoogleBooksProvider>
    </Provider>
);