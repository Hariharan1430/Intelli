'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Equalizer from '@mui/icons-material/Equalizer';
import styles from './sentiment.module.css';

const pieData = [
  { title: 'Negative', value: 60, color: '#e74c3c' },
  { title: 'Positive', value: 30, color: '#2ecc71' },
  { title: 'Neutral', value: 10, color: '#f1c40f' },
];

const Chart = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h6">
          Recent searches
        </Typography>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.leftBox}>
          
          <Box className={styles.chartAndSentiment}>
            <Box className={styles.chart}>
              <PieChart data={pieData} style={{ height: '200px' }} animate />
            </Box>
            <Box className={styles.sentiment}>
              <Box className={styles.sentimentItem}>
                <TrendingDown className={styles.iconNegative} />
                <Typography className={styles.sentimentText}>60% Negative</Typography>
              </Box>
              <Box className={styles.sentimentItem}>
                <TrendingUp className={styles.iconPositive} />
                <Typography className={styles.sentimentText}>30% Positive</Typography>
              </Box>
              <Box className={styles.sentimentItem}>
                <Equalizer className={styles.iconNeutral} />
                <Typography className={styles.sentimentText}>10% Neutral</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rightBox}>
          <Box className={styles.headers}>
            <Typography className={styles.sourceHeader}>Sources</Typography>
            <Typography className={styles.sourceHeader}>Stat.</Typography>
            <Typography className={styles.sourceHeader}>Mentions</Typography>
            <Typography className={styles.sourceHeader}>Pos.</Typography>
            <Typography className={styles.sourceHeader}>Neg.</Typography>
            <Typography className={styles.sourceHeader}>Neu.</Typography>
          </Box>
          {['Twitter', 'News', 'News'].map((source, index) => (
            <Box key={index} className={styles.source}>
              <Typography className={styles.sourceText}>{source}</Typography>
              <Box className={styles.stat}>
                <Box className={styles.bar} />
              </Box>
              <Typography className={styles.mentions}>59.9% - 354</Typography>
              <Typography className={styles.pos}>75%</Typography>
              <Typography className={styles.neg}>10%</Typography>
              <Typography className={styles.neu}>10%</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Chart;
