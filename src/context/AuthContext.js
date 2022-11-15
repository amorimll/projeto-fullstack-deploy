import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'
import { loginUser } from '../api/api'

const Context = createContext()

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
        setLoading(false)
    }, [])

    const handleLogin = async (email, senha) => {
        const data = await loginUser({
            email: email,
            senha: senha
        })
        localStorage.setItem('token', JSON.stringify(data.token))
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        setAuthenticated(true)
    }

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.removeItem('token')
        axios.defaults.headers.common["Authorization"] = undefined
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }