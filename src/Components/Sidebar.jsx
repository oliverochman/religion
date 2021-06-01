import React, { useState, createRef } from 'react'
import {
  Link
} from "react-router-dom";
import { Menu, Divider, Ref, Sticky, Rail } from 'semantic-ui-react'
import AboutMe from './AboutMe'


const Sidebar = () => {
  const contextRef = createRef()
  const [activeItem, setActiveItem] = useState('home')

  return (
    <>
      <Ref innerRef={contextRef}>
        <Rail>
          <Sticky active={true} context={contextRef}>
            <Divider section>
              <Menu fluid vertical tabular>
                <Menu.Item
                  active={activeItem === 'home'}
                  onClick={() => setActiveItem('home')}
                  as={Link}
                  to="/"
                >
                  Home
        </Menu.Item>

                <Menu.Item
                  active={activeItem === 'books'}
                  onClick={() => setActiveItem('books')}
                  as={Link}
                  to="/books"
                >
                  Books
        </Menu.Item>

                <Menu.Item
                  active={activeItem === 'online-resources'}
                  onClick={() => setActiveItem('online-resources')}
                  as={Link}
                  to="/online-resources"
                >
                  Online resources
        </Menu.Item>

                <Menu.Item
                  active={activeItem === 'posts'}
                  onClick={() => setActiveItem('posts')}
                  as={Link}
                  to="/posts"
                >
                  Posts
        </Menu.Item>
                <Divider section />
              </Menu>
              <AboutMe />
            </Divider>

          </Sticky>
        </Rail>
      </Ref>
    </>
  )
}

export default Sidebar
