import './styles.css'
import React from 'react'
import { useNavigate } from "react-router-dom"
import HomeFeed from '../../components/HomeFeed/HomeFeed'
import Header from '../../components/Header/Header'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='body-home'>
      <Header />
      <div className='body-home-div'>
        <form className='body-home-div-form'>
          <input className={`body-home-div-form-input`} type="text" placeholder='Criar post' onClick={() => { navigate("/home/postar") }} />
        </form>
        <HomeFeed />
      </div>
    </div>
  )
}

export default Home;