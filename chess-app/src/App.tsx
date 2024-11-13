import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameModeSelection from './components/GameModeSelection';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';

import { Container, Typography } from '@mui/material';

const App: React.FC = () => (
  <Router>
    <Container maxWidth="md" className="p-6 bg-gray-100 rounded-md shadow-lg">
      <Typography variant="h3" align="center" className="text-blue-600 font-semibold">
        Chess Game
      </Typography>
      <Routes>
        <Route path="/" element={<GameModeSelection />} />
        <Route path="/board" element={<GameBoard />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
