import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import MyRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <MyRoutes></MyRoutes>
    </AppProvider>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      theme="colored"
    ></ToastContainer>
    <GlobalStyles></GlobalStyles>
  </React.StrictMode>
)
