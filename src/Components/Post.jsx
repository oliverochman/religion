import React from 'react'
import { Image, Segment, Divider, Header, Container } from 'semantic-ui-react'

const Post = (props) => {
  return (
    <Segment padded>
      <Container text>
        {props.post.title && <Header as='h3'>{props.post.title}</Header>}
        <Image size='medium' wrapped src={props.post.image} />
        {props.post.body && <p>{props.post.body}</p>}

      </Container>

      <Divider section />
    </Segment>
  )
}

export default Post
