import React from 'react'
import { Close, Favorite, FlashOn, Replay, Star } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <Replay fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <Close fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <Star fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <Favorite fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <FlashOn fontSize='large' />
            </IconButton>

        </div>
    )
}

export default SwipeButtons
