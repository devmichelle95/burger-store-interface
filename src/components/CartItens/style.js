import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    color: #9a9a9d;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 20px;
  padding: 10px;

  img {
    width: 150px;
    height: 150px;
    margin-left: 5px;
    border-radius: 15px;
  }
  p {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
    margin-left: 5px;
  }
  .quantityContainer {
    display: flex;
    gap: 20px;
    button {
      height: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 22px;
    }
  }
`
export const EmptyCart = styled.p`
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`
