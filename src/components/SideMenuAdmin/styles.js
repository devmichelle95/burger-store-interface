import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 264px;
  hr {
    margin-top: 90px;
  }
`

export const ItemsConatiner = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: ${props => (props.isActive ? '#565656' : 'none')};

  .icon {
    margin: 7px 5px;
    color: #ffffff;
  }
`

export const ListLinks = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin-left: 2px;
  &:active {
    color: #7b68ee;
  }
`
