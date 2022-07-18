import { Grid, Text } from '@nextui-org/react'
import { useAtom } from 'jotai'
import { User, usersAtom } from './App'
import { Card } from './Card'
import { keywordAtom } from './SearchBox'


interface CardListProps {
  users: User[];
}

export const CardList = () => {
  const [users] = useAtom(usersAtom)
  const [keyword] = useAtom(keywordAtom)
  return (<Grid.Container
    justify={ 'center' }
    gap={ 2 }
  >
    { users.filter((user) => user.username.includes(keyword) ||
          user.name.includes(keyword) || user.email.includes(keyword))
        .map((user) => (<Card key={ user.id } { ...user } />)) ||
      <Text h3>Looks like there is no one...</Text> }
  </Grid.Container>)
}
