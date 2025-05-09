import React from 'react';
import { useState } from "react";


export const TwitterFollowCard = ({children, userName}) => {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"

    const buttonClassName = isFollowing ?
                            "tw-followCard-button is-following"
                            :"tw-followCard-button"
                            
    const imageSrc = `https://unavatar.io/${userName}`

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src={imageSrc} />
            <div className='tw-followCard-info'> 
                <strong>{children}</strong>
                <span
                    className='tw-followCard-infoUserName'>
                    @{userName}
                </span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'> {text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}
