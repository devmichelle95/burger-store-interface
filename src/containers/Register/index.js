import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import burgerlogo from '../../assets/bugerlogo.svg'
import burgerRegister from '../../assets/burgerRegister.svg'
import { ClickButton, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import api from '../../services/api'
import {
  Container,
  RegisterImg,
  ContainerItens,
  Label,
  Input,
  SingUpLink
} from './style'

export function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('A name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('A valid email address is required'),
    password: yup
      .string()
      .required('A valid password is required')
      .min(6, 'Password must have aleast 6 characters'),
    confirmpassword: yup
      .string()
      .required('A valid password is required')
      .oneOf([yup.ref('password')], 'Your password does not macht')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Successful Registration')
        navigate(paths.Login)
      } else if (status === 409) {
        toast.error('This user already exists')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Sorry, we are having problems. Please try again.')
    }
  }
  return (
    <Container>
      <RegisterImg src={burgerRegister} alt="Burger-Register"></RegisterImg>
      <ContainerItens>
        <img src={burgerlogo} alt="Buger-Logo"></img>
        <h1>Register</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            type="name"
            {...register('name', { required: true })}
            error={errors.name?.message}
          ></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email', { required: true })}
            error={errors.email?.message}
          ></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input
            type="password"
            {...register('password', { required: true })}
            error={errors.password?.message}
          ></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Confirm Your Password</Label>
          <Input
            type="password"
            {...register('confirmpassword', { required: true })}
            error={errors.confirmpassword?.message}
          ></Input>
          <ErrorMessage>{errors.confimrpassword?.message}</ErrorMessage>

          <ClickButton type="Submit" style={{ marginTop: 25 }}>
            {' '}
            Sign Up
          </ClickButton>
        </form>
        <SingUpLink>
          Do you already have an account?
          <Link style={{ color: 'white', cursor: 'pointer' }} to={paths.Login}>
            {' '}
            Sign In{' '}
          </Link>
        </SingUpLink>
      </ContainerItens>
    </Container>
  )
}
