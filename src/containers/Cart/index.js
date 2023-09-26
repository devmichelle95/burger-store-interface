import React from 'react'

import CartImg from '../../assets/CartImg.svg'
import { CartItens, CartResume } from '../../components/index'
import { Container, CartImage, Wrapper } from './style'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartImg} alt="Cart-Image"></CartImage>
      <Wrapper>
        <CartItens></CartItens>
        <CartResume></CartResume>
      </Wrapper>
    </Container>
  )
}
