import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import AddBook from './Components/AddBook/AddBook';
import BooksTable from './Components/AddBook/BooksTable';
import EditBook from './Components/AddBook/EditBook';
import Login from './Components/Login/Login';
import BookRequestsTable from './Components/AddBookRequest/BookRequestsTable';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/books",
    element: <BooksTable />,
  },
  {
    path: "/editBook",
    element: <EditBook />,
  },
  {
    path: "/bookRequests",
    element: <BookRequestsTable />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
