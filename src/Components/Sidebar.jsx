import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import { Menu, Divider } from 'semantic-ui-react'
import AboutMe from './AboutMe'


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('posts')

  return (
    <>
      <Divider section>
        <Menu fluid vertical tabular>
          <Menu.Item
            active={activeItem === 'posts'}
            onClick={() => setActiveItem('posts')}
            as={Link}
            to="/"
          >
            Posts
          </Menu.Item>

          <Menu.Item
            active={activeItem === 'online-resources'}
            onClick={() => setActiveItem('online-resources')}
            as={Link}
            to="/online-resources"
          >
            Online resources
          </Menu.Item>


          <Divider section />
        </Menu>
        <AboutMe />
      </Divider>
    </>
  )
}

export default Sidebar
