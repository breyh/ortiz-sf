import React from 'react';
import { alpha, styled, darken } from '@mui/material/styles';
import { TextFieldProps, TextField, OutlinedInputProps } from '@mui/material';

export const StyledInput = styled((props: TextFieldProps) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#fff' : '#2D3843',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: darken('#fff', 0.1),
      },
      '&.Mui-focused': {
        backgroundColor: '#fff',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));