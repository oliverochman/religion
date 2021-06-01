import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
import {Menu } from 'semantic-ui-react'


const Header = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
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
    </Menu>

  )
}

export default Header
