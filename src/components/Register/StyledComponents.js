import styled from 'styled-components'

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const RegisterContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const RegisterImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImg = styled.img`
  width: 320px;

  @media screen and (max-width: 767px) {
    width: 80%;
    margin-left: 20px;
  }
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const RegisterFormHeading = styled.h1`
  font-family: roboto;
  font-weight: 600;
  font-size: 40px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #334155;
`

export const RegisterFormLabel = styled.label`
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
  margin: 10px 0px;
`

export const RegisterFormTextInput = styled.input`
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #cbd5e1;
  outline: none;
  font-family: roboto;
  font-weight: 500;
  border-radius: 4px;
  padding: 0px 10px;
`

export const RegisterFormSelectCategory = styled.select`
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid #cbd5e1;
  outline: none;
  font-family: roboto;
  font-weight: 500;
  border-radius: 4px;
  padding: 0px 10px;
`

export const RegisterFormSelectOption = styled.option``

export const RegisterFormRegisterBtn = styled.button`
  align-self: flex-start;
  height: 35px;
  padding: 0px 15px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: roboto;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  outline: none;
`

export const RegisterFormErrMsg = styled.p`
  margin: 0px;
  font-family: roboto;
  font-size: 12px;
  color: #ff0b37;
  font-weight: 500;
`
