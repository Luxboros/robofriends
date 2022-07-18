import { Grid, Text } from '@nextui-org/react'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { usersAtom } from './App'
import { Card } from './Card'
import { keywordAtom } from './SearchBox'


export const CardList = () => {
  const [users] = useAtom(usersAtom)
  const [keyword] = useAtom(keywordAtom)
  const [filteredUsers, setFilteredUsers] = useState([] as JSX.Element[])

  useEffect(() => {
    setFilteredUsers(
      () => users.map((user) => (<Card key={ user.id } { ...user } />)))
  }, [users])
  useEffect(() => {
    const userCards = users.filter((user) => user.username.includes(keyword) ||
        user.name.includes(keyword) || user.email.includes(keyword))
      .map((user) => (<Card key={ user.id } { ...user } />))
    setFilteredUsers(userCards)
  }, [keyword])
  return (<Grid.Container
    justify={ 'center' }
    gap={ 2 }
  >
    { !!filteredUsers.length ? filteredUsers :
      <Text h3>Looks like there is no one...</Text> }
  </Grid.Container>)
}
