import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameOver: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5">Game Over</Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Back to Main Menu
      </Button>
    </Stack>
  );
};

export default GameOver;
