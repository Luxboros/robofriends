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
  const src: string = `https://robohash.org/${ username }?set=set${ set }&size=180x180`

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
      '&:hover': {
        scale: 1.15,
      },
    } } showSkeleton alt="Provided by robohash.org"/>
    <Text css={ {
      '&:hover': {
        color: '$purple800',
        scale: 1.1,
      },
    } } size={ 30 } weight="bold">{ username }</Text>
    <Text css={ {
      '&:hover': {
        color: '$purple800',
        scale: 1.1,
      },
    } } size={ 25 } weight="semibold">{ name }</Text>
    <Text css={ {
      '&:hover': {
        color: '$purple800',
        scale: 1.1,
      },
    } } size={ 20 }>{ email }</Text>
  </Container>)
}
