import React from 'react';
import { Typography } from '@mui/material';

type PieceProps = {
  piece: { type: string; color: 'b' | 'w' };
};

const Piece: React.FC<PieceProps> = ({ piece }) => (
  <Typography variant="h4" color={piece.color === 'w' ? 'textPrimary' : 'textSecondary'}>
    {piece.type.toUpperCase()}
  </Typography>
);

export default Piece;
