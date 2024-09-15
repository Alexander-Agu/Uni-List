import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero'>
        <div className="heroInfo">
            <h1 className='title'>University Lists</h1>

            <div className="contacts">
                <a href="">About</a>
                <a href="">Get Contact</a>
            </div>
        </div>

        <div className="description">
            <p>Students these days forget to apply to as many <span>Universities</span> as they can. Many students are just not aware of all the great university options they have. Our goal is to give students a lot of options to continue their higher education</p>
        </div>
    </section>
  )
}

export default Hero