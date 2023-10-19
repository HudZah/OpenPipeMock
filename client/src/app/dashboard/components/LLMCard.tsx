'use client';
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';

interface LLMCardProps {
  title: string;
  description: string;
  downloads: number;
  likes: number;
  moreContent: string;
}

export function LLMCard({
  title,
  description,
  downloads,
  likes,
  moreContent,
}: LLMCardProps) {
  return (
    <Card variant="outlined">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            flexGrow={1}
          >
            <Typography variant="h6">{title}</Typography>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="body1">{description}</Typography>
              <IconButton aria-label="downloads">
                <ArrowDownwardIcon />
                <Typography variant="body2">{downloads}</Typography>
              </IconButton>
              <IconButton aria-label="likes">
                <FavoriteIcon />
                <Typography variant="body2">{likes}</Typography>
              </IconButton>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{moreContent}</Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
