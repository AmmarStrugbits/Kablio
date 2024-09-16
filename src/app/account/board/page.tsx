"use client"

/*
| Developed by Reskue
| Filename: page.tsx
| Author: eric@reskue.art
*/

import Board from '@/components/board/Board'
import { BoardProvider } from '@/components/board/BoardContext'
import { withAuth } from '@/hoc/WithAuth'
import React from 'react'
//import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Page: React.FC = () => {

    // Render
    //--------------------------------------------------------------------------
    return (
        <BoardProvider>
            <Board />
        </BoardProvider>)
}

export default withAuth(Page)
