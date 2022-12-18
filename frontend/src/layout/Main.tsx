import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import UsersConnected from '../components/UsersConnected'

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
  height: 100%;
`

const UsersButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  :active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export default function Main(): JSX.Element {
  const [showUsers, setShowUsers] = useState(false)

  return (
    <MainContent>
      <Header />
      {showUsers && <UsersConnected />}
      <Container>
        <Outlet />
      </Container>
      <UsersButton onClick={() => setShowUsers(!showUsers)}>U</UsersButton>
    </MainContent>
  )
}
