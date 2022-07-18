import { Container, Text } from '@nextui-org/react'
import { atom, useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { CardList } from './CardList'
import { SearchBox } from './SearchBox'


export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const usersAtom = atom([] as User[])

function App () {
  const [users, setUsers] = useAtom(usersAtom)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => data.map(({
        id,
        name,
        email,
        username,
      }: User) => ({
        id,
        name,
        email,
        username,
      })))
      .then((data: User[]) => {
        setUsers(data)
      })
  }, [])

  return (<Container
    display="flex"
    direction="column"
    alignContent="center"
    alignItems="center"
    justify="flex-start"
    wrap="nowrap"
    css={ {
      textAlign: 'center',
      backgroundColor: ' $purple50 ',
      height: '100%',
      minHeight: '100vh',
      padding: '0',
      margin: 'auto',
    } }>
    <Text h1 size={ 60 }
          css={ {
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
            padding: '3rem',
          } }
          weight="bold"> Robofriends </Text>
    <SearchBox/>
    <CardList/>
  </Container>)

}

export default App
