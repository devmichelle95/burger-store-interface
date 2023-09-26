import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 15px;

  .container-top {
    display: grid;
    grid-template-areas:
      'title  title '
      'items items-price'
      'delivery-tax delivery-price';
    grid-gap: 10px 50px;
  }
  .title {
    grid-area: title;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 16px;
  }
  .items {
    grid-area: items;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  .items-price {
    grid-area: items-price;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  .delivery-tax {
    grid-area: delivery-tax;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  .delivery-price {
    grid-area: delivery-price;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  }
`
