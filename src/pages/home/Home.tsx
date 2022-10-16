import { Avatar, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

const Home = () => {
  const theme = useTheme()
  return (
    <Stack spacing={2}>
      <Stack justifyContent="center" direction="row" pt={4} spacing={2}>
        <Avatar
          sx={{
            '&.MuiAvatar-root': {
              width: 128,
              height: 128,
            },
          }}
          src={`${process.env.PUBLIC_URL}/petch_avatar.jpg`}
        >
          Weerachai Plodkaew
        </Avatar>
      </Stack>
      <Stack justifyContent="center" direction="row">
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.getContrastText(
              theme.customPalete.background.paper
            ),
          }}
        >
          Weerachai Plodkaew
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Home
