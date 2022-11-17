import './styles.css'
import React, { useEffect, useState } from 'react'
import { getAllPosts, deletePost } from '../../api/api'
import { useNavigate } from "react-router-dom"

const Posts = () => {
	const navigate = useNavigate()

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
		return (<></>)
	}

	return (
		<>
			{data.posts.map((element) => {
				if (element.userid === data.id_usuario_logado) {
					return (
						<div className='post-div' key={element.id}>
							<div className='post-div-header'>
								<div className='post-div-header-sub'>
									<p className='post-div-header-sub-username'>{element.username}</p>
									<div>
										<button className='button' onClick={() => {
											localStorage.setItem('titulo', JSON.stringify(element.titulo));
											localStorage.setItem('texto', JSON.stringify(element.texto));
											localStorage.setItem('id', JSON.stringify(element.id));
											navigate("/home/editar");
										}}>Editar</button>
										<button type="submit" className='button' onClick={() => {
											deletePost({
												id: element.id
											});
											navigate(0);
										}}>Deletar</button>
									</div>
								</div>

							</div>
							<div className='post-div-content'>
								<div>
									<h1 className='post-div-content-text'>{element.titulo}</h1>
									<p className='post-div-content-text'>{element.texto}</p>
								</div>
							</div>
						</div>
					);
				} else {
					return (
						<div className='post-div' key={element.id}>
							<div className='post-div-header'>
								<div className='post-div-header-sub'>
									<p className='post-div-header-sub-username'>{element.username}</p>
								</div>
							</div>
							<div className='post-div-content'>
								<div>
									<h1 className='post-div-content-text'>{element.titulo}</h1>
									<p className='post-div-content-text'>{element.texto}</p>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

export default Posts;