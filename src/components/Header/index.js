import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/Cart.svg'
import User from '../../assets/User.svg'
import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  Link
} from './style'

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { logout, userData } = useUser()
  const { eraseAtFinish } = useCart()
  const clickLogout = () => {
    logout()
    eraseAtFinish()
    navigate('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <Link onClick={() => navigate(paths.Home)} isActive={pathname === '/'}>
          Home
        </Link>
        <Link
          onClick={() => navigate(paths.Menu)}
          isActive={pathname.includes('products')}
        >
          Products
        </Link>
      </ContainerLeft>
      <ContainerRight>
        <Link onClick={() => navigate(paths.Cart)}>
          <img src={Cart} alt="Cart-Img" />
        </Link>
        <Line></Line>
        <Link>
          <img src={User} alt="User-Img" />
        </Link>
        <ContainerText>
          <p>Hello, {userData.name}</p>
          <Link onClick={clickLogout}>Logout</Link>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
