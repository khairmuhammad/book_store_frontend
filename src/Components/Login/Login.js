import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const generateError = () =>
        toast.error("email or password is incorrect.", {
            position: "top-center",
        });


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit");
        await axios.post(
            `http://localhost:8080/api/v1/auth/authenticate`,
            { ...values, }
        ).then((resp) => {
            console.log(resp.data);
            localStorage.setItem("access_token", resp.data.access_token);
            localStorage.setItem("refresh_token", resp.data.refresh_token);
            localStorage.setItem("authenticated", true);
            localStorage.setItem("name", resp.data.firstName + " " + resp.data.lastName);
            localStorage.setItem("email", resp.data.email);
            localStorage.setItem("role", resp.data.role);
            //setauthenticated(true);
            navigate("/books");
        }).catch((err) => {
            console.log("error:");
            console.log(err);
            generateError();
        });
    }

    return (

        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder='Email'
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" placeholder='Password'
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                        <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                    </div>
                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                <div className="mt-6 text-blue-500 text-center">
                    <a href="/signup" className="hover:underline">Sign up Here</a>
                </div>
            </div>
        </div>
    )
}

export default Login