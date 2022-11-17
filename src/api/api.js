import axios from 'axios'

export const createPost = (dados) => axios.post("http://localhost:3001/homeFeed", dados)

export const deletePost = (dados) => axios.delete("http://localhost:3001/homeFeed", {data: dados})

export const updatePost = (dados) => axios.patch("http://localhost:3001/homeFeed", dados)

export const postUser = async (dados) => {
    const res = await axios.post("http://localhost:3001/posts", dados)
    const data = res.data
    return data
}

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

export const loginUser = async (dados) => {
    const res = await axios.post("http://localhost:3001/login", dados)
    const data = res.data
    return data
}