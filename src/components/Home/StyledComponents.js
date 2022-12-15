import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 10px;
`

export const HomeUnRegisteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeTitle = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 35px;
  line-height: 21px;
  letter-spacing: 0.02em;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const HomeCaption = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
  line-height: 10px;
  color: #64748b;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const HomeRegisterBtn = styled.button`
  background-color: #2563eb;
  color: #fff;
  height: 35px;
  width: 80px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-family: roboto;
  font-weight: 500;
  cursor: pointer;
  margin: 10px 0px;
`

export const HomeRegisteredContent = styled.div``

export const HomeRegisteredName = styled.h1`
  font-family: roboto;
  font-weight: 700;
  font-size: 45px;
  line-height: 30px;
  letter-spacing: 0.02em;
  margin: 0;
  text-align: center;
  color: #2563eb;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

export const HomeRegisteredCategory = styled.p`
  font-family: roboto;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #334155;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`

export const HomeRegisterImg = styled.img`
  width: 700px;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const RegisterLink = styled(Link)`
  text-decoration: none;
`
