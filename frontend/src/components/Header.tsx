import styled from 'styled-components'
import { useAuth } from '../hooks/use-auth'

const HeaderContent = styled('header')`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

export default function Header(): JSX.Element {
  const { user } = useAuth()

  return (
    <HeaderContent>
      <h3>Js</h3>
      <h4>{user ?? 'anonymous'}</h4>
    </HeaderContent>
  )
}
