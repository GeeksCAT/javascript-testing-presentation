import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../hooks/use-auth'

const SigninContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function Signin() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login(username)
  }

  return (
    <SigninContent>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button disabled={!username}>Accedir</Button>
      </form>
    </SigninContent>
  )
}
