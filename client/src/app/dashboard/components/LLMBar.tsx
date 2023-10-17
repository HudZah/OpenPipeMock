import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Stack } from '@mui/material';

export default function VerticalNavbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: '240px',
        height: '100vh',
        top: 0,
        left: 0,
        flexDirection: 'column',
        backgroundColor: 'purple',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', overflowX: 'auto' }}>
        <Typography variant="h1" component="div">
          LLMs
        </Typography>
      </Toolbar>
      <Stack
        spacing={1}
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{ px: 2, py: 1 }}
      >
        <Button color="inherit" href="https://www.google.com">
          Google
        </Button>
        <Button color="inherit" href="https://www.openai.com">
          OpenAI
        </Button>
        {/* Add more buttons as needed */}
      </Stack>
    </AppBar>
  );
}
