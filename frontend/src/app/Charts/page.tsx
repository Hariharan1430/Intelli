'use client'
import React from 'react';
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import styles from '../Charts/chat.module.css'; 
import Charticon1 from '../../../public/icon/Group 33927.svg';
import Charticon2 from '../../../public/icon/Group 33928.svg';
import SimpleLineChart from "../Charts/Linechartcomponent"; 

function ThreeBoxLayout() {
  return (
    <Box sx={{ width: '100%', padding: '24px' }}>
    
      <Grid container spacing={2} gap={1} className={styles.fullbox}>
  <Grid item xs={4}>
    <Grid container direction="column" gap={5}>
      <Grid item xs={12} className={styles.card}>
        <h3>MENTIONS</h3>
        <h1>300 K</h1>
        <div className={styles.graph}>
          <Image src={Charticon1} alt="Mentions graph" />
        </div>
      </Grid>
      <Grid item xs={12} className={styles.card}>
        <h3>SM REACH</h3>
        <h1>110 M</h1>
        <div className={styles.graph}>
          <Image src={Charticon2} alt="Reach graph" />
        </div>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={7.5} className={styles.card1}>
    <SimpleLineChart />
  </Grid>
</Grid>
    </Box>
  );
}

export default ThreeBoxLayout;
