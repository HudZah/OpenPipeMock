'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Bar from './components/LLMBar';
import { LLMCard } from './components/LLMCard';

export default function Home() {
  const [llm, setLlm] = useState('Google');

  return (
    <Box display="flex">
      <Bar llm={llm} setLlm={setLlm} />
      <Box ml="240px" width="calc(100% - 240px)"> {/* Assuming the Bar's width is 240px */}
        <LLMCard />
      </Box>
    </Box>
  );
}
