import styled from 'styled-components'
import { UserAvatar, UserAvatarImage } from '../components/UsersConnected'

const RankingTitleContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid black;
  background-color: #ffc900;
`

const RankingTitle = styled.h2`
  text-align: center;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
`

const UserName = styled.h3`
  margin: 0px 10px;
  flex: 1;
`

const Points = styled.h2``

export default function Ranking() {
  const users = Array(30).fill({
    name: 'lol',
    points: 4,
  })

  return (
    <>
      <RankingTitleContainer>
        <RankingTitle>Ranking</RankingTitle>
      </RankingTitleContainer>
      <List>
        {users.map((user) => (
          <Item key={user.name}>
            <UserAvatar>
              <UserAvatarImage
                src={`https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80`}
                alt={user.name}
              />
            </UserAvatar>
            <UserName>{user.name}</UserName>
            <Points>{user.points}</Points>
          </Item>
        ))}
      </List>
    </>
  )
}
