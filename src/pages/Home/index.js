import React, { useEffect, useState, useContext } from 'react'
import { getAllPosts, deletePost } from '../../api/api'
import './style.css'
import { useNavigate } from "react-router-dom"

import { Context } from '../../context/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { handleLogout } = useContext(Context)

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllPosts()
        setData(res)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  console.log(data)
  return (
    <div className='home-body'>
      <input type="text" placeholder='Criar post' onClick={() => { navigate("/home/postar") }} />
      <button className='home-logout' onClick={() => { handleLogout(); navigate("/login") }}>Logout</button>
      <div>
        {data.posts.map((element, key) => {
          if (element.userid === data.id_usuario_logado) {
            return (
              <div className='home-post-div' key={element.id}>
                <h2>{element.username}</h2>
                <h3>{element.titulo}</h3>
                <p>{element.texto}</p>
                <button className='button' onClick={() => {
                  localStorage.setItem('titulo', JSON.stringify(element.titulo));
                  localStorage.setItem('texto', JSON.stringify(element.texto));
                  localStorage.setItem('id', JSON.stringify(element.id));
                  navigate("/home/editar")
                  }}>Editar</button>
                <button type="submit" className='button' onClick={() => {deletePost({ id: element.id }); navigate(0)}}>Deletar</button>
              </div>
            )
          } else {
            return (
              <div className='home-post-div' key={key}>
                <h2>{element.username}</h2>
                <h3>{element.titulo}</h3>
                <p>{element.texto}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Home;