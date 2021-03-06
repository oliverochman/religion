import React from 'react'
import { Image, Segment, Divider, Header, Container, Button } from 'semantic-ui-react'

const Post = (props) => {
  return (
    <Segment padded>
      <Container text>
        {props.post.title && <Header as='h3'>{props.post.title}</Header>}
        {props.post.image && <Image size='medium' wrapped src={props.post.image} />}
        {props.post.body && <p>{props.post.body}</p>}
        {props.post.link && <Button href={props.post.link}>View</Button>}

      </Container>

      <Divider section />
    </Segment>
  )
}

export default Post
