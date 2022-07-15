import React from "react";
import { User } from "./App";


export const Card: React.FC<User> = ( {
  name,
  id,
  username,
  email
}: User ) => {
  const set: number = Math.round( Math.random() * 6 + 1 );
  const src: string = `https://robohash.org/${ username }?set=set${ set }`;
  return (
    <div className="bg-purple-400 hover:bg-purple-500 min-w-min max-w-xs min-h-min max-h-xs text-center font-mono rounded-lg divide-y-px cursor-default m-0.5">
      <img { ...{ src } } alt="Random photo from robohash.org"/>
      <div>
        <h2 className="text-2xl font-bold">{ username }</h2>
        <h4 className="text-xl">{ name }</h4>
        <p className="text-lg font-light">{ email }</p>
      </div>
    </div>);
};