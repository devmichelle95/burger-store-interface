import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import { ClickButton } from '../index'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()
  return (
    <Container>
      <Image src={product.url} alt="Product-Image"></Image>
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <ClickButton
          onClick={() => {
            putProductsInCart(product)
            navigate(paths.Cart)
          }}
        >
          To Add
        </ClickButton>
      </div>
    </Container>
  )
}
CardProducts.propTypes = {
  product: PropTypes.object
}
