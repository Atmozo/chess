import React, { useEffect } from 'react';
import { ChessInstance } from 'chess.js';
const AIEngine: React.FC<{ game: ChessInstance }> = ({ game }) => {
  useEffect(() => {
    if (game.turn() === 'b') {
      const moves = game.moves();
      if (moves.length > 0) {
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        game.move(randomMove);
      }
    }
  }, [game]);

  return <div>AI Engine</div>;
};

export default AIEngine;
