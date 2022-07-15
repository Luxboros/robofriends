import React, { useEffect, useState } from "react";
import { Card } from "./Card";


export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

function App() {
  const [ robots, setRobots ] = useState( [] as User[] );
  useEffect( () => {
    fetch( "https://jsonplaceholder.typicode.com/users" ).then( response => response.json() ).then( data => data.map( ( {
      id,
      name,
      email,
      username
    }: User ) => ({
      id,
      name,
      email,
      username
    }) ) ).then( ( data: User[] ) => setRobots( data ) );
  }, [] );


  return (robots.length ? <div> { robots.map( ( user: User ) => <Card key={ user.id } { ...user }/> ) }</div> : <div>Loading...</div>);
}

export default App;
