import './styles.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import HomeFeed from '../../components/HomeFeed/HomeFeed'
import Header from '../../components/Header/Header'
import { getUsername } from '../../api/api'

const Home = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsername()
        setData(res)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (<></>)
  }

  return (
    <div className='body-home'>
      <Header username={data.username} />
      <div className='body-home-div'>
        <form className='body-home-div-form'>
          <input className='body-home-div-form-input' type="text" placeholder='Criar post' onClick={() => { navigate("/home/postar") }} />
        </form>
        <HomeFeed />
      </div>
    </div>
  )
}

export default Home;