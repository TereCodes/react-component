import React from 'react'
import NavList from './NavList'
import AppLauncher from './AppLauncher'
import Profile from './Profile'
import '../styles/header.css'

const Header = () => {
    return (
        <div className='menu'>
            <div className='menu-items'>
                <NavList lists={"Gmail"} />
                <NavList lists={"Images"} />
                <AppLauncher />
                <Profile />
            </div>
        </div>
    )
}

export default Header