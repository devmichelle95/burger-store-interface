import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`

export const MainImage = styled.img`
  width: 100%;
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 44px;
  margin-top: 20px;
`

export const CategoryOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => (props.isActive ? '#9758a6' : '#9a9a9d')};
  border-bottom: ${props => props.isActive && ' 2px solid #9758a6'};
  padding-bottom: 10px;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
`
