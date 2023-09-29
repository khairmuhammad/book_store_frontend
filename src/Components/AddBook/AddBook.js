import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const AddBook = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "",
        author: "",
        isbn: 0,
        genre: "",
        publishDate: "",
        availableCopies: 0,
        totalCopies: 0,
    })

    const addBook = (e) => {
        e.preventDefault();
        console.log("add book");
        console.log(localStorage.getItem('access_token'));
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }

        axios.post(
            `http://localhost:8080/api/v1/book`,
            { ...values, },
            config
        ).then((resp) => {
            console.log(resp.data);
            navigate("/books")
        }).catch((err) => {
            console.log("error:");
            console.log(err);
        });
    }


    return (
        <body className="bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Add Book Information</h1>
                <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
                    onSubmit={(e) => addBook(e)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Book Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" name="title" placeholder="Book Name" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author Name</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" name="author" placeholder="Author Name" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">Genre</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" name="genre" placeholder="Genre" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">ISBN</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="number" name="isbn" placeholder="ISBN" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishDate">Publish Date</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="date" name="publishDate" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalCopies">Total Copies</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="number" name="totalCopies" placeholder="Total Copies" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableCopies">Available Copies</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="number" name="availableCopies" placeholder="Available Copies" required
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <button
                        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        type="submit">Add Book</button>
                </form>
            </div>
        </body>
    )
}

export default AddBook