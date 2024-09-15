import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='header'>
        <a href="" className='logo'>
            <h2>Uni List</h2>
        </a>

        <nav className='navbar'>
            <input type="checkbox" id='sidebar'/>
            <label htmlFor="sidebar" className='menu'>
                <span className="material-symbols-outlined">
                    menu_open
                </span>
            </label>

            <ul className='navList'>
                <label htmlFor="sidebar">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </label>


                <li className='navItem'>
                    <a href="#" className='navLink'>
                        <span className="material-symbols-outlined">
                            roofing
                        </span>

                        <p>Home</p>
                    </a>
                </li>

                <li className='navItem'>
                    <a href="#about" className='navLink'>
                        <span className="material-symbols-outlined">
                            psychology_alt
                        </span>

                        <p>About</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header