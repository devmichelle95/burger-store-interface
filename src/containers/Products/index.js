import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import HaeaderMenu from '../../assets/HeaderMenu.svg'
import { CardProducts } from '../../components'
import apiBurgerStore from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  MainImage,
  CategoryMenu,
  CategoryOption,
  ProductsContainer
} from './style'

export function Menu() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategories, setActiveCategories] = useState(0)

  const { state } = useLocation()

  useEffect(() => {
    if (state?.categoryId) {
      setActiveCategories(state.categoryId)
    }
  }, [state?.categoryId])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiBurgerStore.get('categories')

      const newCategories = [{ id: 0, name: 'All' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await apiBurgerStore.get('products')
      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategories === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategories
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategories, products])

  return (
    <Container>
      <MainImage src={HaeaderMenu} alt="Header-Menu"></MainImage>
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryOption
              type="button"
              key={category.id}
              isActive={activeCategories === category.id}
              onClick={() => setActiveCategories(category.id)}
            >
              {category.name}
            </CategoryOption>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
