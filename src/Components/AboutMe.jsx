import React from 'react'
import { Segment, Divider, Container } from 'semantic-ui-react'

const AboutMe = () => {
  return (
    <Segment>
      <Container fluid>
        <p>Hey, welcome to "What is out there"!</p>
        <p>
          The purpose of this website is to share resources to people that are interested in loneliness, the consumption of popular culture and social media and how it all links together.
        </p>
        <Divider section />

        <p>
          In the internet society we live in today we are consuming more media than ever. What I want to share on this website are some different types of resources that explore the idea of media consumption in regards to dealing with loneliness.  Especially how mental illness and loneliness can be portrayed in memes.
        </p>
        <Divider section />

        <p>This website is created for my university course and the course litterature that I made use of for this is "Wiktorin - Religion och Populärkultur" & Sara Duppils chapter "Var får man tag i vampyrgift?" in the book "Det postsekulära klassrummet
 - Mot ett vidgat religionskunskapsbegrepp" </p>
        <Divider section />
      </Container>

    </Segment>
  )
}

export default AboutMe
