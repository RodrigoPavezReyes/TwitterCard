import React from 'react'
import "./App.css";
import { TwitterFollowCard } from './TwitterFollowCard';


const users = [
    {
        userName: "ferrari",
        name:"Rodrigo Pavez",
        isFollowing: true
    },
    {
        userName:"mercedez",
        name:"Mercedez Benito",
        isFollowing: false
    },
    {
        userName:"messi",
        name: "Lionel Messi",
        isFollowing:true
    }
]

export const App = () => {
  return (
    <section className='App'>
    
       { users.map(user => {
            const {userName, name, isFollowing}=user
            return(
                <TwitterFollowCard
                key={userName}
                    userName={userName}>

                    {name}
                    </TwitterFollowCard>
                    
            )
        })}
    </section>
    )
}
