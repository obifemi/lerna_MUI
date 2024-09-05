import React from 'react';
import Button from '@mui/material/Button';
import styles from './MyButton.module.css';

const MyButton = ({ label, className }) => {
  return (
    <>
    <h1 className='bg-red-700'>tailwind</h1>
    {/* //tailwind css is not working as expected in the MUI component */}
    <Button className={styles.myButton}  variant="contained" > 
      {label}
    </Button>

    </>
  );
};

export default MyButton;
