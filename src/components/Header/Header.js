import './styles.css'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from '../../context/AuthContext'

const Header = (props) => {
    const navigate = useNavigate()
    const { handleLogout } = useContext(Context)

    return (
        <div className='body-header'>
            <p className='body-header-loggedUser'>Bem vindo, <strong>{props.username}</strong></p>
            <button className='body-header-logout' onClick={() => { handleLogout(); navigate("/login") }}>Logout</button>
        </div>
    )
}

export default Header