import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'
import { User } from './App'


export const Card: React.FC<User> = ({
  name,
  id,
  username,
  email,
}: User) => {
  const set: number = Math.round(Math.random() * 6 + 1)
  const src: string = `https://robohash.org/${ username }?set=set${ set }`

  const width: number = 200
  const height: number = 200
  return (<Container justify="center"
                     alignContent="center"
                     alignItems="center"
                     css={ {
                       linearGradient: '45deg, $red600 -20%, $pink600 100%',
                       borderRadius: '20px',
                       margin: '$xs',
                       width: 300,
                     } }
  >

    <Image { ...{
      src,
      width,
      height,
    } } css={ {
      padding: 5,
    } } showSkeleton alt="Provided by robohash.org"/>
    <Text size={ 30 } weight="bold">{ username }</Text>
    <Text size={ 25 } weight="semibold">{ name }</Text>
    <Text size={ 20 }>{ email }</Text>
  </Container>)
}
