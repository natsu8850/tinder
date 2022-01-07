import React from 'react'
import './Header.css';
import { Person, Forum } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <Person fontSize='large' className='header__icon' />
            </IconButton>
            <img className='header__logo'
                src='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png'
                alt=''
            />
            <IconButton>
                <Forum fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header


