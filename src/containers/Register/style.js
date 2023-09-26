import styled from 'styled-components'

import Backgroundburger from '../../assets/backgroundburger.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Backgroundburger}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImg = styled.img`
  height: 75%;
`
export const ContainerItens = styled.div`
  border-radius: 0px 10px 10px 0px;
  background: #373737;
  height: 75%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 100px;
    margin-top: 15px;
  }
  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.error ? '5px' : '5px')};
  margin-bottom: 5px;
`
export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  padding-left: 10px;
  width: 392px;
  height: 31px;
  border: ${props => (props.error ? '3px solid #cc1717;' : 'none')};
`

export const SingUpLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 13px;
`
