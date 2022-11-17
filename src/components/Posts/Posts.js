import './styles.css'
import Icon from '@mdi/react'
import React, { useEffect, useState } from 'react'
import { getAllPosts, deletePost } from '../../api/api'
import { useNavigate } from "react-router-dom"
import { mdiPencil, mdiDelete } from '@mdi/js';

const Posts = () => {
	const navigate = useNavigate()

	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllPosts()
			setData(res)
			setLoading(false)
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
									<div className='post-div-header-sub-buttons'>
										<button className='post-div-header-sub-buttons-button' onClick={() => {
											localStorage.setItem('titulo', JSON.stringify(element.titulo));
											localStorage.setItem('texto', JSON.stringify(element.texto));
											localStorage.setItem('id', JSON.stringify(element.id));
											navigate("/home/editar");
										}}><Icon className='post-div-header-sub-buttons-button-icon' path={mdiPencil}></Icon></button>
										<button type="button" className='post-div-header-sub-buttons-button' onClick={() => {
											deletePost({
												id: element.id
											});
											navigate(0);
										}}><Icon className='post-div-header-sub-buttons-button-icon' path={mdiDelete}></Icon></button>
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