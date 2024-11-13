import React, { useReducer, useState, useEffect } from 'react';
import { Chess, ChessInstance } from 'chess.js';
import { Typography, Box, Button, Grid } from '@mui/material';
import Piece from './Piece'; // Assume this renders each piece icon

const chess: ChessInstance = new Chess();

type ActionType = { type: 'MOVE_PIECE'; from: string; to: string } | { type: 'RESET' };

const boardReducer = (state: ChessInstance, action: ActionType) => {
  switch (action.type) {
    case 'MOVE_PIECE':
      state.move({ from: action.from, to: action.to });
      return { ...state };
    case 'RESET':
      return new Chess();
    default:
      return state;
  }
};

const GameBoard: React.FC = () => {
  const [gameState, dispatch] = useReducer(boardReducer, chess);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const handleSquareClick = (square: string) => {
    if (selectedSquare) {
      dispatch({ type: 'MOVE_PIECE', from: selectedSquare, to: square });
      setSelectedSquare(null);
    } else {
      setSelectedSquare(square);
    }
  };

  useEffect(() => {
    if (gameState.in_checkmate()) setStatus('Checkmate!');
    else if (gameState.in_draw()) setStatus('Draw');
    else setStatus(gameState.turn() === 'w' ? 'White\'s turn' : 'Black\'s turn');
  }, [gameState]);

  return (
    <Box className="p-4 bg-white rounded shadow">
      <Typography variant="h6" className="text-gray-700 mb-4">{status}</Typography>
      <Grid container spacing={1}>
        {gameState.board().map((row, rowIndex) => (
          <Grid container key={rowIndex} direction="row">
            {row.map((square, colIndex) => (
              <Box
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleSquareClick(square.square)}
                className={`w-12 h-12 flex justify-center items-center border ${
                  (rowIndex + colIndex) % 2 === 0 ? 'bg-gray-300' : 'bg-gray-700'
                }`}
              >
                {square.type && <Piece piece={square} />}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" color="secondary" onClick={() => dispatch({ type: 'RESET' })}>
        Reset Game
      </Button>
    </Box>
  );
};

export default GameBoard;
