import React from 'react';
import { ModelCard } from '@/app/home/components/ModelCard';
import { Grid, Typography, Box } from '@mui/material';

export function Marketplace() {
  const models = [
    {
      title: 'OpenAI GPT-3.502',
      shortDesc: 'Text Generation',
      longDesc: "OpenAI's flagship model for general-purpose text generation.",
      cost: '$0.01 per request',
      likes: '105k',
    },
    {
      title: 'OpenAI BERT-2.1',
      shortDesc: 'Text Analysis',
      longDesc: 'Specialized in sentiment analysis and other NLP tasks.',
      cost: '$0.02 per request',
      likes: '80k',
    },
    {
      title: 'OpenAI Vision-1.0',
      shortDesc: 'Image Processing',
      longDesc: 'Adept at image recognition and classification tasks.',
      cost: '$0.05 per request',
      likes: '70k',
    },
    {
      title: 'OpenAI Transformer-T',
      shortDesc: 'Translation',
      longDesc: 'Translates text across multiple languages efficiently.',
      cost: '$0.03 per request',
      likes: '65k',
    },
    {
      title: 'OpenAI Audio-Net',
      shortDesc: 'Audio Processing',
      longDesc: 'Best for audio recognition and sound classification.',
      cost: '$0.04 per request',
      likes: '60k',
    },
    {
      title: 'OpenAI DeepDream',
      shortDesc: 'Image Generation',
      longDesc: 'Creates unique and dreamlike images from any input.',
      cost: '$0.06 per request',
      likes: '55k',
    },
    {
      title: 'OpenAI ChatGPT',
      shortDesc: 'Conversational Agent',
      longDesc: 'Facilitates human-like text conversations.',
      cost: '$0.015 per request',
      likes: '50k',
    },
    {
      title: 'OpenAI Video-Analyzer',
      shortDesc: 'Video Analysis',
      longDesc: 'Recognizes patterns and scenes within videos.',
      cost: '$0.08 per request',
      likes: '45k',
    },
    {
      title: 'OpenAI MusicMixer',
      shortDesc: 'Music Creation',
      longDesc: 'Generates and modifies music tracks.',
      cost: '$0.07 per request',
      likes: '40k',
    },
  ];

  return (
    <Box>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <h1
          className="font-semibold tracking-tight"
          style={{ fontSize: '24px' }}
        >
          Models
        </h1>
      </Box>
      <Grid container spacing={3} mt={0.1} sx={{ justifyContent: 'center' }}>
        {models.map((model, index) => (
          <Grid item xs={3.85} key={index}>
            <ModelCard
              title={model.title}
              shortDesc={model.shortDesc}
              longDesc={model.longDesc}
              cost={model.cost}
              likes={model.likes}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
