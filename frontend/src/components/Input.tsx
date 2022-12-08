import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: 0px 8px 16px hsla(0, 0%, 0%, 0.2);

  &:focus {
    outline: none;
  }
`

export default Input
