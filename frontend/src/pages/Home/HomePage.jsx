import React from 'react'
import { FooterComponent, HeaderComponent, HeroComponent } from '../../components'
import { Box } from '@mui/material'

export const HomePage = () => {
  return (
    <Box>
    <HeaderComponent/>
    <HeroComponent/>
    <FooterComponent/>
    </Box>
  )
}
