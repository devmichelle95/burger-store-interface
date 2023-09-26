import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import apiBurgerStore from '../../../services/api'
import { Container, Input, StyledButton, LabelUpload } from './styles'

function EditCategories() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const {
    state: { category }
  } = useLocation()

  const schema = Yup.object().shape({
    name: Yup.string().required('Name your category')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('file', data.file[0])

    await toast.promise(
      apiBurgerStore.put(`categories/${category.id}`, productDataFormData),
      {
        pending: 'Checking',
        success: 'Done!',
        error: 'Please, check your information and try again'
      }
    )

    setTimeout(() => {
      navigate('/all-categories')
    })
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
      <h1>Edit Your Category</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} defaultValue={category.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
              Upload Your Image
            </>
          )}

          <input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg, image/jpg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        <StyledButton>Done</StyledButton>
      </form>
    </Container>
  )
}
export default EditCategories
