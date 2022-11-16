import React, { Fragment, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import CriarPost from "../pages/CriarPost";
import EditarPost from "../pages/EditarPost";
import { Context } from "../context/AuthContext"

const RoutesApp = () => {
    const { authenticated } = useContext(Context)

    const handleAuthentication = (authenticatedRoute) => {
        return authenticated ? authenticatedRoute : <Login />
    }

    const handleAuthenticationLogged = (unaunthenticatedRoute) => {
        return authenticated ? <Home /> : unaunthenticatedRoute
    }
    
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="*" element={handleAuthenticationLogged(<Register />)} />
                    <Route path="/login" element={handleAuthenticationLogged(<Login />)}/>
                    <Route path="/register" element={handleAuthenticationLogged(<Register />)}/>
                    <Route path="/home" element={handleAuthentication(<Home />)}/>
                    <Route path="/home/postar" element={handleAuthentication(<CriarPost />)} />
                    <Route path="/home/editar" element={handleAuthentication(<EditarPost />)} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp