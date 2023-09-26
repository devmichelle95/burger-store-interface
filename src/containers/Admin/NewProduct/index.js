import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import apiBurgerStore from '../../../services/api'
import { Container, Input, StyledButton, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required("Insert the product's name"),
    price: Yup.string().required("Insert the product's price"),
    category: Yup.object().required("Choose the product's category"),
    file: Yup.mixed().test(
      'required',
      'Insert an image for your product',
      value => {
        return value?.length > 0
      }
    )
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(apiBurgerStore.post('products', productDataFormData), {
      pending: 'Checking',
      success: 'Done!',
      error: 'Please, check your information and try again'
    })

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
      <h1>New Product</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} placeholder="Name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Input type="number" {...register('price')} placeholder="Price" />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

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

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={category => category.name}
                getOptionValue={category => category.id}
                placeholder="Category"
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <StyledButton>Add</StyledButton>
      </form>
    </Container>
  )
}
export default NewProduct
