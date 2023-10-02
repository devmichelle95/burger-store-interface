import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import apiBurgerStore from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { ClickButton } from '../Button'
import { Container } from './style'
export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts, ereaseAtFinish } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(apiBurgerStore.post('order', { products: order }), {
      pending: 'Processing your order',
      success: 'Order realized successfully',
      error: 'Something went wrong, please try again'
    })
  }
  const onSubmit = () => {
    submitOrder()
    ereaseAtFinish()
    navigate('/')
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h1 className="title">Review</h1>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Delivery Tax</p>
          <p className="delivery-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p className="total">Total</p>
          <p className="total-price">
            {formatCurrency(finalPrice + deliveryTax)}
          </p>
        </div>
      </Container>
      <ClickButton style={{ width: '100%', marginTop: 30 }} onClick={onSubmit}>
        Finish Order
      </ClickButton>
    </div>
  )
}
