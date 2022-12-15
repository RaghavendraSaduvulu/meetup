import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NotFoundImg = styled.img`
  width: 300px;
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 30px;
  color: #475569;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const NotFoundDescription = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  color: #64748b;
  line-height: 21px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
