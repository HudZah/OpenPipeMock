'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { LLMCard } from './components/LLMCard';

export default function Home() {
  const [llm, setLlm] = useState('Google');

  return (
    <Box display="flex">
      <Box ml="240px" width="calc(100% - 240px)">
        <Box display="flex" flexDirection="row">
            <Typography variant="h1" fontSize={24}>Models</Typography>
        </Box>
        <LLMCard
          title="OpenAI GPT-3.502"
          description="Text Generation"
          downloads={26600}
          likes={597}
          moreContent="Here's more detailed content about this card that will be shown when expanded."
        />
        <LLMCard
          title="Google Bard 1.0"
          description="Text Generation"
          downloads={26600}
          likes={597}
          moreContent="Here's more detailed content about this card that will be shown when expanded."
        />
        <LLMCard
          title="OpenAI GPT-4.016"
          description="Text Generation"
          downloads={26600}
          likes={597}
          moreContent="Here's more detailed content about this card that will be shown when expanded."
        />
      </Box>
    </Box>
  );
}
