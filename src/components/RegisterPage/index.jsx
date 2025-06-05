import styled from 'styled-components'

export const RegisterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
` 

export const RegisterFormBox = styled.div`
  width: 768px;
  margin: 100px auto 0px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`
export const RegisterGreeting  = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`

export const RegisterGuide = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const RegisterLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
`

export const RegisterInputBox = styled.div`
  display: flex; 
`

export const RegisterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`

export const RegisterIdCheckButton = styled.button`
  height: 3rem;
  font-size: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1.5rem;
  border: none;
  outline: none;
  font-weight: bold;
  background: #12B886;
  color: #FFFFFF;
  transition: 0.125s ease-in;
  cursor: pointer;
  white-space: nowrap;
  margin-left: 1rem;

  &:hover {
    background: #20C997;;
  } 

  &:disabled {
    background: #DEE2E6;
    color: #212529;
    cursor: not-allowed;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2rem;
  gap: 1rem;
`

export const CancelButton = styled.button`
    height: 3rem;
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #DEE2E6;
    color: #212529;
    transition: 0.125s ease-in;
    cursor: pointer;

    &:hover {
      background: #E9ECEF;
    } 
`

export const RegisterButton = styled.button`
    height: 3rem;
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #12B886;
    color: #FFFFFF;
    transition: 0.125s ease-in;
    cursor: pointer;

    &:hover {
      background: #20C997;;
    } 
`

