'use client'
import React, { useState } from 'react';
import { Grid, Box, Button, TextField, Select, MenuItem, Typography, IconButton, Pagination } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './result.module.css';
import Image from 'next/image';
import smile1 from '../../../public/icon/smiley positive.svg'
import smile2 from '../../../public/icon/smiley Negative.svg'
import smile3 from '../../../public/icon/smiley Neutral.svg'
import reportboxicon4 from '../../../public/icon/mentions.svg'
import reachicon from '../../../public/icon/SM reach.svg'
import twittericon from "../../../public/icon/Vector (8).svg"
import newsimage1 from "../../../public/image/images 1.png"
import newsimage2 from "../../../public/image/image 32.png"
import Piechartgrapg from "../Sentimentpiechart/page"
import Lastbox from '../Twochartbox/page'

const initialData = [
  { name: '01 Apr', Positive: 4000, Neutral: 2400, Negative: 2400 },
  { name: '02 Apr', Positive: 3000, Neutral: 1398, Negative: 2210 },
  { name: '03 Apr', Positive: 2000, Neutral: 9800, Negative: 2290 },
  { name: '04 Apr', Positive: 2780, Neutral: 3908, Negative: 2000 },
  { name: '05 Apr', Positive: 1890, Neutral: 4800, Negative: 2181 },
  { name: '06 Apr', Positive: 2390, Neutral: 3800, Negative: 2500 },
  { name: '07 Apr', Positive: 3490, Neutral: 4300, Negative: 2100 },
  { name: '08 Apr', Positive: 2000, Neutral: 9800, Negative: 2290 },
  { name: '09 Apr', Positive: 2780, Neutral: 3908, Negative: 2000 },
  { name: '10 Apr', Positive: 1890, Neutral: 4800, Negative: 2181 },
  { name: '11 Apr', Positive: 2390, Neutral: 3800, Negative: 2500 },
  { name: '12 Apr', Positive: 3490, Neutral: 4300, Negative: 2100 },
  { name: '13 Apr', Positive: 4000, Neutral: 2400, Negative: 2400 },
  { name: '14 Apr', Positive: 3000, Neutral: 1398, Negative: 2210 },
  { name: '15 Apr', Positive: 2000, Neutral: 9800, Negative: 2290 },
];

const webData = [
  { name: '01 Apr', Positive: 3200, Neutral: 1400, Negative: 2400 },
  { name: '02 Apr', Positive: 2800, Neutral: 1000, Negative: 2000 },
  { name: '03 Apr', Positive: 2600, Neutral: 8000, Negative: 1900 },
  { name: '04 Apr', Positive: 2000, Neutral: 2908, Negative: 1800 },
  { name: '05 Apr', Positive: 1800, Neutral: 4300, Negative: 2100 },
  { name: '06 Apr', Positive: 2100, Neutral: 3500, Negative: 2200 },
  { name: '07 Apr', Positive: 3000, Neutral: 3900, Negative: 1900 },
  { name: '08 Apr', Positive: 1900, Neutral: 8700, Negative: 2200 },
  { name: '09 Apr', Positive: 2600, Neutral: 3208, Negative: 1800 },
  { name: '10 Apr', Positive: 1700, Neutral: 4200, Negative: 2000 },
  { name: '11 Apr', Positive: 2100, Neutral: 3400, Negative: 2300 },
  { name: '12 Apr', Positive: 3100, Neutral: 3700, Negative: 1800 },
  { name: '13 Apr', Positive: 3700, Neutral: 2000, Negative: 2000 },
  { name: '14 Apr', Positive: 2900, Neutral: 1100, Negative: 1900 },
  { name: '15 Apr', Positive: 1700, Neutral: 8500, Negative: 2000 },
];

const newsMedia = [
  { name: '01 Apr', Positive: 1000, Neutral: 1400, Negative: 400 },
  { name: '02 Apr', Positive: 800, Neutral: 1000, Negative: 2000 },
  { name: '03 Apr', Positive: 600, Neutral: 4000, Negative: 1900 },
  { name: '04 Apr', Positive: 4000, Neutral: 2908, Negative: 1800 },
  { name: '05 Apr', Positive: 2800, Neutral: 4300, Negative: 2100 },
  { name: '06 Apr', Positive: 4100, Neutral: 3500, Negative: 2200 },
  { name: '07 Apr', Positive: 1000, Neutral: 3900, Negative: 1900 },
  { name: '08 Apr', Positive: 3900, Neutral: 8700, Negative: 2200 },
  { name: '09 Apr', Positive: 600, Neutral: 3208, Negative: 1800 },
  { name: '10 Apr', Positive: 3700, Neutral: 4200, Negative: 2000 },
  { name: '11 Apr', Positive: 1100, Neutral: 3400, Negative: 2300 },
  { name: '12 Apr', Positive: 800, Neutral: 3700, Negative: 1800 },
  { name: '13 Apr', Positive: 3700, Neutral: 2000, Negative: 2000 },
  { name: '14 Apr', Positive: 2900, Neutral: 1100, Negative: 1900 },
  { name: '15 Apr', Positive: 1700, Neutral: 8500, Negative: 2000 },
];

const GraphDashboard: React.FC = () => {
  const [chartData, setChartData] = useState(initialData);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleButtonClick = (dataType: string) => {
    if (dataType === 'web') {
      setChartData(webData);
    } else if (dataType === 'Newsmedia') {
      setChartData(newsMedia);
    } else {
      setChartData(initialData);
    }
  };
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box className={styles.container}>
       <Box className={styles.headingBox}>
        <Typography sx={{ fontSize: '28px', fontWeight: '600', fontFamily: 'Inter', color: '#333' }}>Results for Yamaha India</Typography>
      </Box>
      <Grid item xs={12}>
          <Box className={styles.filterBox}>
            <Select defaultValue="Yamaha India" className={styles.select}>
              <MenuItem value="Yamaha India">Yamaha India</MenuItem>
            </Select>
            <Select defaultValue="All Mentions" className={styles.select}>
              <MenuItem value="All Mentions">All Mentions</MenuItem>
            </Select>
            <Select defaultValue="Data (since 15 APR 2024)" className={styles.select}>
              <MenuItem value="Data (since 15 APR 2024)">Data (since 15 APR 2024)</MenuItem>
            </Select>
            <Select defaultValue="Select State" className={styles.select}>
              <MenuItem value="Select State">Select State</MenuItem>
            </Select>
            <Select defaultValue="Filter (1)" className={styles.select}>
              <MenuItem value="Filter (1)">Filter (1)</MenuItem>
            </Select>
          </Box>
        </Grid>
      <Box className={styles.iconBox}>

        <Grid container spacing={2}>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
            <Image src={smile1} alt="Smilepositive"  className={styles.iconmarginbox}/>
              <Typography  sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'Inter' }}>Positive Reach</Typography>
              <Typography>15.4 K ↑</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>  
            <Image src={smile2} alt="Smilenegative"  className={styles.iconmarginbox} />          
                <Typography  sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'Inter' }}>Negative Reach</Typography>
              <Typography>15.4 K ↓</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
            <Image src={smile3} alt="Smilenetural"   className={styles.iconmarginbox}  />            
              <Typography  sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'Inter' }}>Neutral Reach</Typography>
              <Typography>7.2 K ↑</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
            <Image src={reportboxicon4} alt="mentionsicon"   className={styles.iconmarginbox}  />            
              <Typography  sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'Inter' }}>Mentions</Typography>
              <Typography>300 K</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
            <Image src={reachicon} alt="reachicon"   className={styles.iconmarginbox} />
                <Typography  sx={{ fontSize: '17px', fontWeight: '400', fontFamily: 'Inter' }}>SM Reach</Typography>
              <Typography>1 M</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> 

      <Grid container  className={styles.barchartcontainer}>
        <Grid item xs={12} className={styles.filterBox}>
          <Box className={styles.buttonsBox}>
            <button className={styles.filterButton} onClick={() => handleButtonClick('initial')}>All Mentions</button>
            <button className={styles.filterButton} onClick={() => handleButtonClick('web')}>Web</button>
            <button className={styles.filterButton} onClick={() => handleButtonClick('Newsmedia')}>News media</button>
            <button className={styles.filterButton} onClick={() => handleButtonClick('initial')}>Social</button>
            <button className={styles.filterButton} onClick={() => handleButtonClick('web')}>Reviews</button>
          </Box>
          <Box className={styles.selectBoxes}>
            {/* <TextField
              type="date"
              label="Select Date"
              value={startDate.toISOString().split('T')[0]}
              onChange={(event) => setStartDate(new Date(event.target.value))}
              className={styles.select}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="time"
              label="Select Time"
              value={time.toTimeString().split(' ')[0]}
              onChange={(event) => setTime(new Date(`1970-01-01T${event.target.value}`))}
              className={styles.select}
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            <Select defaultValue="Today" className={styles.select} >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Yesterday">Yesterday</MenuItem>
            </Select>
            <Select defaultValue="Past 1 Hour" className={styles.select}>
              <MenuItem value="Past 1 Hour">Past 1 Hour</MenuItem>
              <MenuItem value="Past 24 Hours">Past 24 Hours</MenuItem>
            </Select>
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.chartBox}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Positive" stackId="a" fill="#6BBF6B" />
              <Bar dataKey="Neutral" stackId="a" fill="#52D6CE" />
              <Bar dataKey="Negative" stackId="a" fill="#DB6161" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>

   
      <Box sx={{marginBottom:'20px'}}>
      <Grid container spacing={0} className={styles.gridContainer}>
        <Grid item xs={12}>
          <Box className={styles.tabs}>
            <Box
              className={`${styles.tab} ${tabIndex === 0 ? styles.activeTab : ''}`}
              onClick={() => setTabIndex(0)}
            >
              Latest mentions
            </Box>
            <Box
              className={`${styles.tab} ${tabIndex === 1 ? styles.activeTab : ''}`}
              onClick={() => setTabIndex(1)}
            >
              Top mentions
            </Box>
          </Box>
        </Grid>
        
        {tabIndex === 0 && (
          <>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <IconButton className={styles.iconButton}>
                  <Image src={twittericon} alt="twittericon" />
                </IconButton>
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>@YamahaLucknow</span>
                  Ride into GOOD DAYS with the all-new, the masculine Yamaha Motor India – Motorcycles' #FZS. <br></br>
                  Call Us: For service: 6389896783, 8887745449 <br></br>
                  For sales: 8948433111 <br></br>
                  For spare: 9670419111
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention1}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage1} alt="nwesicon1" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage2} alt="nwesicon2" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention1}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage1} alt="nwesicon1" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage2} alt="nwesicon2" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
          </>
        )}

        {tabIndex === 1 && (
          <>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <IconButton className={styles.iconButton}>
                  <Image src={twittericon} alt="twittericon" />
                </IconButton>
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>@YamahaLucknow</span>
                  Ride into GOOD DAYS with the all-new, the masculine Yamaha Motor India – Motorcycles' #FZS. 
                  Call Us: For service: 6389896783, 8887745449
                  For sales: 8948433111
                  For spare: 9670419111
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage1} alt="India Today" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage2} alt="The Hindu" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage1} alt="India Today" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} className={styles.mention}>
              <Box className={styles.mentionBox}>
                <Image src={newsimage2} alt="The Hindu" className={styles.logo} />
                <Typography className={styles.mentionText}>
                  <span className={styles.mentionTitle}>Prince Samuel</span>
                  No road is too long when you have good company
                </Typography>
              </Box>
            </Grid>
          </>
        )}

        <Grid item xs={12} className={styles.pagination}>
          <Pagination count={5} shape="rounded" />
        </Grid>
      </Grid>
    </Box>

    <Box sx={{marginBottom:'20px'}}>
        <Piechartgrapg />
    </Box>
     <Box>
          <Lastbox />
     </Box>

    </Box>
  );
};

export default GraphDashboard;

