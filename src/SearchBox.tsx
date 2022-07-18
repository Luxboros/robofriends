import { Input } from '@nextui-org/react'
import { atom, useAtom } from 'jotai'


export const keywordAtom = atom('')

export function SearchBox () {
  const [_, setKeyword] = useAtom(keywordAtom)
  return (<Input
    clearable
    bordered
    placeholder="Looking for someone ?"
    width={ '40%' }
    color="secondary"
    css={ {
      padding: '3rem',
    } }
    onChange={ (event) => setKeyword(event.target.value) }
  />)
}
