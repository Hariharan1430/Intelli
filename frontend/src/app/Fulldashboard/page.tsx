'use client'
import React from 'react';
import Head from 'next/head';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
import { Grid, Box, Typography, Paper } from '@mui/material';
import SimpleLineChart from '../Charts/Linechartcomponent'; 
import Thirdbox from "../Recentsearch/page"
import  Lastbox from "../Trendingboxes/page"
import TinyAreaChartMentions from '../Charts/TinyMentionsChart'
import TinyAreaChartReach from '../Charts/TinyReachChart'
import styles from "../Fulldashboard/FullDashboard.module.css"


const data = [
  { month: 'January', positive: 400, negative: 300 },
  { month: 'February', positive: 320, negative: 250 },
  { month: 'March', positive: 100, negative: 200 },
  { month: 'April', positive: 300, negative: 250 },
  { month: 'May', positive: 200, negative: 400 },
  { month: 'June', positive: 150, negative: 100 },
  { month: 'July', positive: 150, negative: 100 },
  { month: 'August', positive: 200, negative: 200 },
  { month: 'September', positive: 250, negative: 400 },
  { month: 'October', positive: 300, negative: 250 },
  { month: 'November', positive: 500, negative: 100 },
  { month: 'December', positive: 300, negative: 100 },
];


const Dashboard: React.FC = () => {
 
  // const styles = {
  //   container: {
  //     padding: '20px',
  //     fontFamily: 'Arial, sans-serif',
  //   } as React.CSSProperties,
  //   header: {
  //     fontSize: '1.5em',
  //     fontWeight: 'bold',
  //     marginBottom: '20px',
  //     color: '#333',
  //     textAlign: 'start', 
  //   } as React.CSSProperties,
  //   sentimentGraph: {
  //     background: '#fff',
  //     padding: '20px',
  //     borderRadius: '8px',
  //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  //     borderColor: '#2A4343',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     overflow: 'hidden',
  //     height: '500px',
  //   } as React.CSSProperties,
  //   sentimentTitle: {
  //     fontSize: '1.2em',
  //     fontWeight: 'bold',
  //     marginBottom: '10px',
  //     color: '#333',
  //   } as React.CSSProperties,
  //   chartWrapper: {
  //     flex: 1,
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     height: '100%',
  //   } as React.CSSProperties,
  // };

  return (
    <Box className={styles.container}>
      
      <Head>
        <title>Dashboard</title>
      </Head>
      <Typography
       
        sx={{
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#333',
          fontFamily: 'Inter' 
        }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        {/* Sentiment Analysis Graph */}
        <Grid item xs={12}>
          <Box
            sx={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              borderColor: '#2A4343',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              height: '500px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.2em',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333',
              }}
            >
              Sentiment Analysis
            </Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="positive" stroke="green" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="negative" stroke="orange" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
      
        {/* Mentions and Reach */}
           <Grid item xs={12}>
      <Box className={styles.mentionsReachContainer}>
        <Grid container >
          <Grid item xs={12} lg={3}>
            <Box className={styles.mentionsBox}>
              <div className={styles.mentionsTitle}>Mentions</div>
              <div className={styles.mentionsValue}>300 K</div>
              <div className={styles.graph}>
                <TinyAreaChartMentions />
              </div>
            </Box>
            <Box className={styles.reachBox}>
              <div className={styles.reachTitle}>SM Reach</div>
              <div className={styles.reachValue}>110 M</div>
              <div className={styles.graph}>
                <TinyAreaChartReach />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box className={styles.graphBox}>
              <SimpleLineChart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>  

        {/* React Reach and Top Handles */}
         <Grid item xs={12}> 
        <Thirdbox />
        </Grid>  

        {/* Trending Hashtags and Trending News */}
            <Grid item xs={12}>
          
          <Lastbox />
        </Grid>    
      </Grid> 
    </Box>



   
  );
};

export default Dashboard;
