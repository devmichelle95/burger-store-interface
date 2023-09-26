import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`
export const Menu = styled.div`
  display: flex;
  gap: 75px;
  justify-content: start;
  margin-left: 5px;
  margin-bottom: 35px;
`
export const LinkMenu = styled.a`
  cursor: pointer;
  margin-top: 20px;
  color: #323d5d;
  font-size: 16px;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? ' 2px solid #9758A6' : '400'};
`
export const ProductImg = styled.img`
  width: 60px;
  border-radius: 10px;
`
export const ReactSelectStyled = styled(ReactSelect)`
  width: 280px;
  color: neutral10;
  .css-1hb7zxy-IndicatorsContainer {
    cursor: pointer;
  }
`
