import styled from 'styled-components'

const Button = styled.button`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 16px;
  background-color: #151515;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #151515cf;
  }

  &:active {
    background-color: #151515cf;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export default Button
