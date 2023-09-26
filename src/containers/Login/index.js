import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import burgerlogo from '../../assets/bugerlogo.svg'
import burgerintro from '../../assets/burgerintro.svg'
import { ClickButton, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImg,
  ContainerItens,
  Label,
  Input,
  SingUpLink
} from './style'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('A valid email address is required'),
    password: yup
      .string()
      .required('A valid password is required')
      .min(6, 'Password must have aleast 6 characters')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Checking',
        success: 'Welcome!',
        error: 'Please, check your information and try again'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate(paths.Orders)
      } else {
        navigate(paths.Home)
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImg src={burgerintro} alt="Burger-Intro"></LoginImg>
      <ContainerItens>
        <img src={burgerlogo} alt="Buger-Logo"></img>
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

          <ClickButton type="Submit" style={{ marginTop: 72 }}>
            Sign In
          </ClickButton>
        </form>
        <SingUpLink to={paths.Register}>
          Dont you have an account?
          <Link
            style={{ color: 'white', cursor: 'pointer' }}
            to={paths.Register}
          >
            {' '}
            Sign Up{' '}
          </Link>
        </SingUpLink>
      </ContainerItens>
    </Container>
  )
}
