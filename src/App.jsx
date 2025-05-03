import React from 'react'
import "./App.css";

export const App = () => {
  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
            className='tw-followCard-avatar'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwHGbBun5jLcARrAqEug83OeGrSmECj4pEg&s" alt="El avatar" />
            <div className='tw-followCard-info'>
                <strong>Rodrigo Pavez</strong>
                <span
                    className='tw-followCard-info'>
                    @rpavezreyes
                </span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
  )
}
