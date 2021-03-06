import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {

        }
    }

    return (
        <div>
            <h1>Auth Page</h1>
            <div>
                <input type="text"
                       id="email"
                       placeholder="Enter email"
                       name="email"
                       onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <input type="password"
                       id="password"
                       placeholder="Enter password"
                       name="password"
                       onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
            </div>
            <button onClick={loginHandler} disabled={loading}>Login</button>
            <button onClick={registerHandler} disabled={loading}>Register</button>
        </div>
    );
};

export default AuthPage;
