import axios from 'axios'

export const postUser = (dados) => axios.post("http://localhost:3001/posts", dados).then(res => {
    console.log('Dados Inseridos.')
})

export const createPost = (dados) => axios.post("http://localhost:3001/homeFeed", dados).then(res => {
    console.log('Dados Inseridos.')
})

export const deletePost = (dados) => axios.delete("http://localhost:3001/homeFeed", {data: dados}).then(res => {
    console.log('Post deletado')
})

export const updatePost = (dados) => axios.patch("http://localhost:3001/homeFeed", dados).then(res => {
    console.log('Post editado')
})

export const getAllPosts = async () => {
    const res = await axios.get("http://localhost:3001/homeFeed")
    const data = res.data
    return data
}

export const getUsername = async () => {
    const res = await axios.get("http://localhost:3001/username")
    const data = res.data
    return data
}

export const loginUser = (dados) => axios.post("http://localhost:3001/login", dados).then(res => {
    const data = res.data
    console.log(data)
    return data
})