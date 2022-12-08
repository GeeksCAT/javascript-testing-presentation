import styled from 'styled-components'
import { useAuth } from '../hooks/use-auth'

const HeaderContent = styled('header')`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px gray;
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
