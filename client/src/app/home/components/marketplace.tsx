import React from 'react';
import { OpenAIModels } from '../data/openai-models';
import { ModelCard } from '@/app/home/components/model-card';
import { Grid } from '@mui/material';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import SearchIcon from '@mui/icons-material/Search';

export default function Marketplace() {
  return (
    <div>
      {/* <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <h1
          className="font-semibold tracking-tight"
          style={{ fontSize: '24px' }}
        >
          Models
        </h1>
      </Box> */}
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Your Fine Tunes</h2>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search fine tunes..."
            className="h-10 lg:w-[370px] pl-10 border rounded"
          />
        </div>
      </div>
      <Separator />
      <Grid container spacing={3} mt={0.1} sx={{ justifyContent: 'center' }}>
        {OpenAIModels.map((model, index) => (
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
    </div>
  );
}
