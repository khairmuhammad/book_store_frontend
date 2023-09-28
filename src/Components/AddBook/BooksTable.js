import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BooksTable = () => {

    const [books, setBooks] = useState([])

    const getData = () => {
        console.log(localStorage.getItem('access_token'));
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }

        axios.get(
            `http://localhost:8080/api/v1/book`,
            config
        ).then((resp) => {
            console.log(resp.data);
            setBooks(resp.data);
        }).catch((err) => {
            console.log("error:");
            console.log(err);
        });
    }

    useEffect(() => {
        getData();
    }, []);


    return (

        <table class="min-w-full border-collapse block md:table">
            <thead class="block md:table-header-group">
                <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Book Name</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Author Name</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Genre</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ISBN</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Publish Date</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Available Copies</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Total Copies</th>
                    <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody class="block md:table-row-group">
                {books.map(book => {
                    return (
                        <tr key={book.bookId} class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.title}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.author}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.genre}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.isbn}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.publishDate}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.availableCopies}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{book.totalCopies}</td>
                        <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                            <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BooksTable