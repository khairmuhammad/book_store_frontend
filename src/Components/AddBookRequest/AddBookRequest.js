import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import NavBar from '../NavBar'

const AddBookRequest = () => {

  const navigate = useNavigate();

    const [values, setValues] = useState({
        studentId: "",
        bookId: "",
        requesDate: "",
        status: "",
    })

    const addBookRequest = (e) => {
      e.preventDefault();
      console.log("add book request");
      console.log(localStorage.getItem('access_token'));
      const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
      }

      axios.post(
          `http://localhost:8080/api/v1/book-request`,
          { ...values, },
          config
      ).then((resp) => {
          console.log(resp.data);
          navigate("/book-requests")
      }).catch((err) => {
          console.log("error:");
          console.log(err);
      });
  }
  
  return (
    <>
    <NavBar />
    <body className="bg-gray-100">
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Add Book Request Information</h1>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
                onSubmit={(e) => addBookRequest(e)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author Name</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text" name="author" placeholder="Author Name" required
                        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishDate">Publish Date</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="date" name="publishDate" required
                        onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                </div>
                <button
                    className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                    type="submit">Add Book Request</button>
            </form>
        </div>
    </body>
</>
  )
}

export default AddBookRequest