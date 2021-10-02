import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = ({ pageTitle }) => {
  return (
    <>
      <AppBar position='fixed' sx={{ p: 0 }}>
        <Toolbar>
          <Typography variant='h6' component='h1'>
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* 高さ調節のため（AppBarの高さ可変に対応） */}
      <Toolbar />
    </>
  );
};

export default Header
