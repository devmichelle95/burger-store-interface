import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Categories from '../../assets/Categories.png'
import apiBurgerStore from '../../services/api'
import { Container, MainImage, ContainerItens, Image, Button } from './style'

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiBurgerStore.get('categories')
      setCategories(data)
    }
    loadCategories()
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
      <MainImage src={Categories} alt="Categories"></MainImage>
      <Carousel
        itemsToShow={1}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Image src={category.url} alt="Category-Image"></Image>
              <Button to={'/products'} state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
