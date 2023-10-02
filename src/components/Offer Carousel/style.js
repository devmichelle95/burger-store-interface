import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ProductName = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: left;
  color: #424242;
`
export const ProductPrice = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: left;
  color: #212121;
`

export const Image = styled.img`
  width: 150px;
  padding: 60px;

  border-radius: 12px;
`

export const Button = styled.button`
  border-radius: 8px;
  background: #9758a6;
  box-shadow:
    0px 20px 40px 0px rgba(151, 88, 166, 0.24),
    0px 5px 10px 0px rgba(151, 88, 166, 0.22);
  border: none;
  padding: 21px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
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
