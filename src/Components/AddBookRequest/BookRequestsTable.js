import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'

const BookRequestsTable = () => {

  const navigate = useNavigate();
  const [bookRequests, setBookRequests] = useState([])

  const getData = () => {
    console.log(localStorage.getItem('access_token'));
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }

    axios.get(
      `http://localhost:8080/api/v1/book-request`,
      config
    ).then((resp) => {
      console.log(resp.data);
      setBookRequests(resp.data);
    }).catch((err) => {
      console.log("error:");
      console.log(err);
    });
  }

  useEffect(() => {
    getData();
  }, []);


  const editBookRequest = (requestId) => {
    const selectedBookRequest = bookRequests.find((bookRequest) => bookRequest.requestId === requestId);
    navigate("/editBookRequest", { state: { selectedBookRequest } })
}

const deleteBookRequest = (requestId) => {
    /* const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    axios.delete(
        `http://localhost:8080/api/v1/book`,
        config
    ).then((resp) => {
        console.log(resp.data);
        setBooks(resp.data);
    }).catch((err) => {
        console.log("error:");
        console.log(err);
    }); */
}

  return (
    <>
      <NavBar />
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Book Name</th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Student Name</th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Request Date</th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>{/* 
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Publish Date</th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Available Copies</th>
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Total Copies</th> */}
            <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {bookRequests.map(bookRequest => {
            return (
              <tr key={bookRequest.requestId} class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.bookId}</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.studentId}</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.requestDate}</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.status}</td>{/* 
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.publishDate}</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.availableCopies}</td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{bookRequest.totalCopies}</td> */}
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-2" onClick={(e) => editBookRequest(bookRequest.requestId)}>Edit</button>
                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded" onClick={(e) => deleteBookRequest(bookRequest.requestId)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookRequestsTable