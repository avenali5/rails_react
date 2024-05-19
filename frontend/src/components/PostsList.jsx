import { useEffect, useState } from 'react'
import { API_URL } from '../constants'
import axios from "axios"

function getData() {
    return axios.get(API_URL).then(res => res.data)
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getData().then(data => setPosts(data))
    }, [])
    

  return (
    <div>
        {posts.map(post => (
            <div key={post.id} className='post-container'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default PostsList
