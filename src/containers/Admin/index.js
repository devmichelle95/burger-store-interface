import { PropTypes } from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditCategories from './EditCategory'
import EditProducts from './EditProduct'
import ListCategories from './ListCategories'
import ListProducts from './ListProducts'
import NewCategory from './NewCategory'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()
  return (
    <Container>
      <SideMenuAdmin path={locationPathname}></SideMenuAdmin>
      <ContainerItems>
        {locationPathname === paths.Orders && <Orders />}
        {locationPathname === paths.Products && <ListProducts />}
        {locationPathname === paths.NewProduct && <NewProduct />}
        {locationPathname === paths.Edit && <EditProducts />}
        {locationPathname === paths.NewCatgeory && <NewCategory />}
        {locationPathname === paths.EditCategory && <EditCategories />}
        {locationPathname === paths.AllCategories && <ListCategories />}
      </ContainerItems>
    </Container>
  )
}
Admin.propTypes = {
  pathname: PropTypes.string
}
