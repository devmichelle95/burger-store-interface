import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import apiBurgerStore from '../../../services/api'
import { Container, Input, StyledButton, LabelUpload } from './styles'

function NewCategory() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required("Insert the product's name"),
    file: Yup.mixed().test(
      'required',
      'Insert an image for your new category',
      value => {
        return value?.length > 0
      }
    )
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
      apiBurgerStore.post('categories', productDataFormData),
      {
        pending: 'Checking',
        success: 'Done!',
        error: 'Please, check your information and try again'
      }
    )

    setTimeout(() => {
      navigate('/list-of-products')
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
      <h1>New Category</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} placeholder="Name" />
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
            accept="image/png, image/jpeg, image/svg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        <StyledButton>Add</StyledButton>
      </form>
    </Container>
  )
}
export default NewCategory
