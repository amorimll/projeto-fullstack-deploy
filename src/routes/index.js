import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import CriarPost from "../pages/CriarPost";
import EditarPost from "../pages/EditarPost";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route exact path="/register" element={<Register />}/>
                    <Route path="*" element={<Register />} />
                    <Route path="/home/postar" element={<CriarPost />} />
                    <Route path="/home/editar" element={<EditarPost />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp