// @jsxImportSource react-client

import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Stack } from '@mui/material';

export function Bar({ llm, setLlm }: any) {
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
        <Button
          color="inherit"
          href="https://www.google.com"
          sx={
            llm === 'Google'
              ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              : {}
          }
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            setLlm('Google');
          }}
        >
          Google
        </Button>
        <Button
          color="inherit"
          href="https://www.openai.com"
          sx={
            llm === 'OpenAI'
              ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
              : {}
          }
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            setLlm('OpenAI');
          }}
        >
          Open AI
        </Button>
        {/* Add more buttons as needed */}
      </Stack>
    </AppBar>
  );
}
