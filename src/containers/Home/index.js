import React from 'react'

import Burgerheader from '../../assets/burgerheader.svg'
import { CategoriesCarousel, OffersCarousel } from '../../components'
import { Container, MainImage } from './style'

export function Home() {
  return (
    <Container>
      <MainImage src={Burgerheader} alt="Burger-Header"></MainImage>
      <CategoriesCarousel />
      <OffersCarousel />
    </Container>
  )
}
