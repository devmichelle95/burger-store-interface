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
import { Container, Img, Edit } from './style'

function ListCategories() {
  const [categories, setCategories] = useState()
  const navigate = useNavigate()

  function editCategory(category) {
    navigate(paths.EditCategory, { state: { category } })
  }
  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiBurgerStore.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map(category => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="center">
                    <Img src={category.url} alt="img" />
                  </TableCell>
                  <TableCell>
                    <Edit onClick={() => editCategory(category)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListCategories
