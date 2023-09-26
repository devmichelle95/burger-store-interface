import Checkbox from '@mui/material/Checkbox'
import styled from 'styled-components'

import { ClickButton } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #efefef;
  h1 {
    margin-bottom: 20px;
    color: #4b0082;
    -webkit-text-stroke-width: 1.25px;
    -webkit-text-fill-color: #d8bfd8;
  }
  form {
    border-radius: 10px;
    background: #565656;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 25px;
  }
`

export const Input = styled.input`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
`
export const StyledButton = styled(ClickButton)`
  margin-top: 100px;
  align-self: center;
  width: 300px;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 20px;
  color: #a9a9a9;
  font-size: 16px;
  font-weight: 600;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const OfferLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #a9a9a9;
  font-size: 16px;
  font-weight: 600;
`
export const StyledCheck = styled(Checkbox)`
  cursor: pointer;
`
