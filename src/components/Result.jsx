import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Result = ({ profit, profitRatio }) => {
  
  return (
    <Paper
      sx={{
        color: 'primary.contrastText',
        bgcolor: profit < 0 ? 'error.main': 'primary.main',
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Typography variant='h6' component='h2'>
            利益
          </Typography>
        </Grid>
        <Grid item xs={8} >
          <Typography variant='h5' component='h3' align='right'>
            {profit}
            <Typography variant='h6' component='span'>&nbsp;円</Typography>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h6' component='h2'>
            利益率
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h5' component='h3' align='right'>
            {profitRatio}
            <Typography variant='h6' component='span'>&nbsp;％</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Result
