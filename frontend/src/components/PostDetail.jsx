import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../constants'

const PostDetail = () => {
  const [post, setPost] = useState(null)
  const {id} = useParams()

  console.log(API_URL)

  useEffect(() => {
    const fetchCurrentPost = async () => {
        try {
          const response = await fetch(`${API_URL}/${id}`)
          console.log(response)
          if(response.ok){
            const json = await response.json()
            setPost(json)
            console.log(post)
          } else {
            throw response
          }
        } catch (err){
          console.log(err)
        } 
    } 

    fetchCurrentPost()
  }, [id])  

  
  return  (
    post && <div>
      <p>post</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/">Back to posts</Link>
    </div>
  )
}

export default PostDetail
