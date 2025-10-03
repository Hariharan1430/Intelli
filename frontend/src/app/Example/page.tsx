'use client'
import React from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import styles from './targetpage.module.css';

const KeywordForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.heading}>
        Enter keywords/key phrases
      </Typography>
      <Typography variant="body1" className={styles.subheading}>
        Enter brand, competitor or hashtag to monitor
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="e.g. Yamaha, Modi, #2024Election"
            className={styles.input}
          />
          <Typography variant="body2" className={styles.helperText}>
            Type comma separated phrases to monitor.
          </Typography>
          <Button variant="contained" className={styles.submitButton}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default KeywordForm;
