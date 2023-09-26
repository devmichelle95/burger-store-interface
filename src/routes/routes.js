import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Menu, Register, Cart, Admin } from '../containers'
import PrivateRoutes from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login />}></Route>
        <Route path={paths.Register} element={<Register />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path={paths.Home} element={<Home />} />
          <Route path={paths.Menu} element={<Menu />} />
          <Route path={paths.Cart} element={<Cart />} />
        </Route>
        <Route element={<PrivateRoutes isAdmin />}>
          <Route path={paths.Orders} element={<Admin />} />
          <Route path={paths.Products} element={<Admin />} />
          <Route path={paths.NewProduct} element={<Admin />} />
          <Route path={paths.Edit} element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default MyRoutes
