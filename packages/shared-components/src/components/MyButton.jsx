import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ label, sx }) => {
  return (
    <Button  sx={sx} variant="contained" color="primary" >
      {label}
    </Button>
  );
};

export default MyButton;
