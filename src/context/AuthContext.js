import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'
import { loginUser } from '../api/api'

const Context = createContext()

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const token = localStorage.getItem('token')

    useEffect(() => {
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NjIwNjU4LCJleHAiOjE2Njg3MDcwNTh9.XGTNDS4FBtp5uDwnb073r2m9WWrZpQIWRP1QEs4wGls
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        } else {
            localStorage.removeItem('token')
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
        return data
    }

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.removeItem('token')
        axios.defaults.headers.common["Authorization"] = undefined
    }

    if (loading) {
        return (<></>)
    }
    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout, setAuthenticated }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }