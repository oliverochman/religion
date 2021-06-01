import React, {useEffect, useState} from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('posts.json')
      setPosts(response.data)
    }
     getPosts()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => {
        return <Post post={post}/>
      })}
    </div>
  )
}

export default Posts;
