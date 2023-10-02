import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding: 35px 0;
  .rec.rec-arrow {
    background: #9758a6;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0.25));
    border: none;
    color: #efefef;
  }
  .rec.rec-arrow:hover {
    border: 5px solid #9758a6;
    background-color: #efefef;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const MainImage = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 12px;
`

export const Button = styled(Link)`
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  border: none;
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-align: center;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 0.8;
  }
`
