import styled from 'styled-components'
import { useData } from '../hooks/use-data'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: row;
  align-items: end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

export const UserAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.047);

  ::before,
  ::after {
    box-sizing: border-box;
  }
`

export const UserAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export default function UsersConnected() {
  const { users } = useData()

  return (
    <div>
      <List>
        {users.map((user) => (
          <UserAvatar key={user}>
            <UserAvatarImage
              src={`https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80`}
              alt={user}
            />
          </UserAvatar>
        ))}
      </List>
    </div>
  )
}
