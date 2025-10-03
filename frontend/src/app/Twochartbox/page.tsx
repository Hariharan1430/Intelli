'use client'
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from './example.module.css';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const dataPositive = {
  labels: [
    
    'MANITHA JENMAM (Youtube)',
    'Gudiyatham Ragul (Youtube)',
    'ItzKeshu (K/Twitter)',
    'JacksonDura135 (K/Twitter)',
    'punching_naman (K/Twitter)',
    'Massey creation (Youtube)',
    'Hohite Sarma (Youtube)',
    'AVR volleyball club (Youtube)',
    'Ulloor_Volleyball (Youtube)',
    'Surya birds farm (Youtube)',
    '_sports (K/Twitter)',
    '24x7_TamilNews_Anti corrupt (Youtube)'
  ],
  datasets: [
    {
      label: 'Positive',
      data: [ 3.6, 3.8, 4.5, 4.5, 4.5, 4.9, 6.1, 7.5, 7.5, 11.7, 14.6, 15.0],
      backgroundColor: function(context: any) {
        const index = context.dataIndex;
        const colors = [
          'rgba(118, 199, 192, 1)',
          'rgba(118, 199, 192, 0.9)',
          'rgba(118, 199, 192, 0.8)',
          'rgba(118, 199, 192, 0.7)',
          'rgba(118, 199, 192, 0.6)',
          'rgba(118, 199, 192, 0.5)',
          'rgba(118, 199, 192, 0.4)',
          'rgba(118, 199, 192, 0.3)',
          'rgba(118, 199, 192, 0.2)',
          'rgba(118, 199, 192, 0.1)'
        ];
        return colors[index % colors.length];
      },
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverBorderColor: '#000000'
    },
  ],
};

const dataNegative = {
  labels: [
    'Hi_Nambaa (K/Twitter)',
    'ThongchuJohnnyy (K/Twitter)',
    'Dr.g@p@di.Politica.Social.Ju (Youtube)',
    'Raki Vijay (Youtube)',
    'Ilakiasatmiya (K/Twitter)',
    'punching_naman (K/Twitter)',
    
  ],
  datasets: [
    {
      label: 'Negative',
      data: [52.4, 15.4, 7.7, 3.8, 3.8, 2.8,],
      backgroundColor: function(context: any) {
        const index = context.dataIndex;
        const colors = [
          'rgba(229, 115, 115, 1)',
          'rgba(229, 115, 115, 0.9)',
          'rgba(229, 115, 115, 0.8)',
          'rgba(229, 115, 115, 0.7)',
          'rgba(229, 115, 115, 0.6)',
          'rgba(229, 115, 115, 0.5)',
          'rgba(229, 115, 115, 0.4)',
        
        ];
        return colors[index % colors.length];
      },
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverBorderColor: '#000000'
    },
  ],
};

const options: any = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      formatter: (value: any, context: any) => {
        return context.chart.data.labels[context.dataIndex];
      },
      color: '#000',
      align: 'end',
      anchor: 'end',
      clamp: true,
      display: true,
    }
  },
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  },
};

const Home: React.FC = () => {
  return (
    <Grid container spacing={2} className={styles.container}>
      <Grid item xs={12} md={6}>
        <Box className={styles.chartBox}>
          <Typography className={styles.header}>Positive</Typography>
          <Typography sx={{fontSize:'20px'}}>Participation of positively speaking authors</Typography>
          <Box className={styles.chartContainer}>
            <Pie data={dataPositive} options={options} width={500} height={500} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className={styles.chartBox}>
          <Typography className={styles.header}>Negative</Typography>
          <Typography sx={{fontSize:'20px'}}>Participation of negatively speaking authors</Typography>
          <Box className={styles.chartContainer}>
            <Pie data={dataNegative} options={options} width={500} height={500} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
