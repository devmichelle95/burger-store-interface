import CancelIcon from '@mui/icons-material/Cancel'
import VerifiedIcon from '@mui/icons-material/Verified'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import paths from '../../../constants/paths'
import apiBurgerStore from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, Edit } from './style'

function ListProducts() {
  const [products, setProducts] = useState()
  const navigate = useNavigate()

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <VerifiedIcon style={{ color: '#32CD32	' }} />
    }
    return <CancelIcon style={{ color: '	#FF0000' }} />
  }

  function editProduct(product) {
    navigate(paths.Edit, { state: { product } })
  }
  console.log(editProduct)
  useEffect(() => {
    async function loadProducts() {
      const { data } = await apiBurgerStore.get('products')

      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Offer</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell>{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="img" />
                  </TableCell>
                  <TableCell>
                    <Edit onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
