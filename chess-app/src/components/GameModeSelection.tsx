import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameModeSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={4} alignItems="center" className="p-4">
      <Typography variant="h5" color="textPrimary">
        Select Game Mode
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/board')}>
        Single Player
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/board')}>
        Multiplayer
      </Button>
    </Stack>
  );
};

export default GameModeSelection;
