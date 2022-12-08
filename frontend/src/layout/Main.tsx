import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default function Main(): JSX.Element {
  return (
    <MainContent>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </MainContent>
  )
}
