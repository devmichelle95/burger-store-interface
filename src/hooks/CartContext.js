import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductsInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async ProductId => {
    const newCart = cartProducts.filter(product => product.id !== ProductId)
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async ProductId => {
    const newCart = cartProducts.map(product => {
      return product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    updateLocalStorage(newCart)
  }

  const reduceProducts = async ProductId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === ProductId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)
      await updateLocalStorage(newCart)
    } else {
      deleteProducts(ProductId)
    }
  }
  const eraseAtFinish = async ProductId => {
    const clearCart = await localStorage.removeItem('codeburger:cartInfo')
    const cleanScreen = cartProducts.filter(pd => pd.id !== ProductId)

    setCartProducts(clearCart, cleanScreen)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])
  return (
    <CartContext.Provider
      value={{
        putProductsInCart,
        cartProducts,
        deleteProducts,
        increaseProducts,
        reduceProducts,
        eraseAtFinish
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
