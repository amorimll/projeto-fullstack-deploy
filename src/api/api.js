import axios from 'axios'

export const createPost = (dados) => axios.post("https://projeto-fullstack-react-node.herokuapp.com/homeFeed", dados)

export const deletePost = (dados) => axios.delete("https://projeto-fullstack-react-node.herokuapp.com/homeFeed", {data: dados})

export const updatePost = (dados) => axios.patch("https://projeto-fullstack-react-node.herokuapp.com/homeFeed", dados)

export const postUser = async (dados) => {
    const res = await axios.post("https://projeto-fullstack-react-node.herokuapp.com/posts", dados)
    const data = res.data
    return data
}

export const getAllPosts = async () => {
    const res = await axios.get("https://projeto-fullstack-react-node.herokuapp.com/homeFeed")
    const data = res.data
    return data
}

export const getUsername = async () => {
    const res = await axios.get("https://projeto-fullstack-react-node.herokuapp.com/username")
    const data = res.data
    return data
}

export const loginUser = async (dados) => {
    const res = await axios.post("https://projeto-fullstack-react-node.herokuapp.com/login", dados)
    const data = res.data
    return data
}