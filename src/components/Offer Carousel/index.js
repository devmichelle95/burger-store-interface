import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/Offers.png'
import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import apiBurgerStore from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  MainImage,
  ContainerItens,
  ProductName,
  ProductPrice,
  Image,
  Button
} from './style'

export function OffersCarousel() {
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await apiBurgerStore.get('products')
      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <MainImage src={Offers} alt="Offers"></MainImage>
      <Carousel
        itemsToShow={1}
        style={{ width: '65%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(products => (
            <ContainerItens key={products.id}>
              <Image src={products.url} alt="Product-Image"></Image>
              <ProductName>{products.name}</ProductName>
              <ProductPrice>{products.formatedPrice}</ProductPrice>
              <Button
                onClick={() => {
                  putProductsInCart(products)
                  navigate(paths.Cart)
                }}
              >
                Order Now
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
