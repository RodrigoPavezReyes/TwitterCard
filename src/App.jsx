import React from 'react'
import "./App.css";
import { TwitterFollowCard } from './TwitterFollowCard';

export const App = () => {
  return (
    <section className='App'>
    
    <TwitterFollowCard  isFollowing={true} userName={"ferrari"} name={"Rodrigo Pavez"}/>
    <TwitterFollowCard  isFollowing={false} userName={"elonmusk"} name={"Elon Musk"}/>
    <TwitterFollowCard  isFollowing userName={"ford"} name={"Henry Ford"}/>
    <TwitterFollowCard  isFollowing userName={"messi"} name={"Lionel Messi"}/>

    </section>
    )
}
