import { Container } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'

const Layout = ({ pageTitle, children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bgcolor: grey[200]
      }}
    >
      <Header pageTitle={pageTitle} />

      <Container
        component='main'
        sx={{
          maxWidth: 640,
          mt: 0,
          mb: 2,
          mx: { xs: 1, sm: 3, lg: 25 },
        }}>
      {children}
      </Container>
    </Box>
  );
};

export default Layout
