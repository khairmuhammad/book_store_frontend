import React from 'react'
import ProfileMenu from './Profile/ProfileMenu';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white text-2xl font-semibold">Book Store App</div>
                    <ul className="flex space-x-4">
                        <li className="text-white"><a href='#'>Home</a></li>
                        <li className="text-white"><a href='/addBook'>Add Book</a></li>
                        <li className="text-white"><a href='/books'>Books</a></li>
                        <li className="text-white"><a href='#'>Add Book Request</a></li>
                        <li className="text-white"><a href='/bookRequests'>Book Requests</a></li>
                        <li className="text-white">Contact</li>
                        <li>
                            <ProfileMenu />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar