import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { purple } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import apiBurgerStore from '../../../services/api'
import {
  Container,
  Input,
  StyledButton,
  LabelUpload,
  OfferLabel,
  StyledCheck
} from './styles'

function EditProducts() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const {
    state: { product }
  } = useLocation()

  const schema = Yup.object().shape({
    name: Yup.string().required("Insert the product's name"),
    price: Yup.string().required("Insert the product's price"),
    category: Yup.object().required("Choose the product's category"),
    offer: Yup.bool()
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
    productDataFormData.append('offer', data.offer)

    await toast.promise(
      apiBurgerStore.put(`products/${product.id}`, productDataFormData),
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
      <h1>Edit Your Product</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('name')} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Input
          type="number"
          {...register('price')}
          defaultValue={product.price}
        />
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
          defaultValue={product.category}
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={category => category.name}
                getOptionValue={category => category.id}
                defaultValue={product.category}
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <OfferLabel>
          <StyledCheck
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
            sx={{
              color: purple[300],
              '&.Mui-checked': {
                color: purple[400]
              }
            }}
          ></StyledCheck>{' '}
          Is this product on offer?
        </OfferLabel>
        <StyledButton>Done</StyledButton>
      </form>
    </Container>
  )
}
export default EditProducts
