import React, {useEffect, useState} from 'react'
import Post from './Post'
import axios from 'axios'
import { Divider } from 'semantic-ui-react'


const OnlineResources = () => {
  const [resources, setResources] = useState()

  useEffect(() => {
    const getResources = async () => {
      const response = await axios.get('resources.json')
      setResources(response.data)
    }
    getResources()
  }, [])

  return (
    <div>
      <h1>Online Resources</h1>
      <h2>Youtube videos</h2>
      {resources && resources.youtube.map(resource => {
        return <Post post={resource}/>
      })}
      <Divider section />

      <h2>Forums</h2>

      {resources && resources.forums.map(forum => {
        return <Post post={forum}/>
      })}
      <Divider section />

      <h2>Articles and Studies</h2>
      {resources && resources.resources.map(resource => {
        return <Post post={resource}/>
      })}
    </div>
  )
}

export default OnlineResources
