import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listlink from './menu-list'
import { Container, ItemsConatiner, ListLinks } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listlink.map(item => (
        <ItemsConatiner key={item.id} isActive={path === item.link}>
          <item.icon className="icon"></item.icon>
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemsConatiner>
      ))}
      <hr></hr>
      <ItemsConatiner
        style={{ position: 'fixed', left: '10px', bottom: '30px' }}
      >
        <LogoutOutlinedIcon style={{ color: '#FFFFFF' }}></LogoutOutlinedIcon>
        <ListLinks to={'/login'} onClick={logout}>
          Logout
        </ListLinks>
      </ItemsConatiner>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
