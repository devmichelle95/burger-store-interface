import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 10px;

  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 20px;
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  color: #555;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    color: #9758a6;
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
export const Link = styled.a`
  cursor: pointer;
  border: none;
  background: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-weight: ${props => (props.isActive ? 'bold' : '')};
  font-size: ${props => (props.isActive ? '20px' : '16px')};
  text-decoration: ${props => (props.isActive ? 'underline' : '')};
`
