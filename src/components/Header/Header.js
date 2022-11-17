import './styles.css'
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from '../../context/AuthContext'
import { getUsername } from '../../api/api'

const Header = () => {
    const navigate = useNavigate()
    const { handleLogout } = useContext(Context)

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getUsername()
            setData(res)
            setLoading(false)

        }
        fetchData()
    }, [])

    if (loading) {
        return (<></>)
    }

    return (
        <div className='body-header'>
            <p className='body-header-loggedUser'>Bem vindo, <strong>{data.username}</strong></p>
            <button className='body-header-logout' onClick={() => { handleLogout(); navigate("/login") }}>Logout</button>
        </div>
    )
}

export default Header