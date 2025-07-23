'use client'
import { Grid, Box, Typography, Select, MenuItem } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import reportboxicon1 from "../../../public/icon/Report.right.tick.svg";
import reportboxicon2 from "../../../public/icon/Report.negative.tick.svg";
import reportboxicon3 from "../../../public/icon/Report.Neutral.tick.svg";
import reportboxicon4 from "../../../public/icon/mentions.svg";
import reportboxicon5 from "../../../public/icon/report.twittericon.svg";
import reportboxicon6 from "../../../public/icon/report.newsicon.svg";
import selectboxnearicon from "../../../public/icon/Vector (7).svg";

const Report = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px' }}>
      <Head>
        <title>Reports</title>
      </Head>
      <Grid container style={{ width: '100%', maxWidth: '1200px' }}>
        <Grid item xs={12} style={{ textAlign: 'left', width: '100%', marginBottom: '20px' }}>
          <Typography sx={{ fontSize: '28px', fontWeight: '600', fontFamily: 'Inter',color:'#333' }}>Reports</Typography>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
          <Select defaultValue="Yamaha India" style={{ display: 'flex', width: '359px', height: '37px', padding: '14px 6px 14px 10px', justifyContent: 'center', alignItems: 'center', gap: '88px' }}>
            <MenuItem value="Yamaha India">Yamaha India</MenuItem>
          </Select>
          <Box style={{ padding: '2px', marginLeft: '10px', borderRadius: '4px', border: '1px solid var(--Primary-TEXT-80, #A9C2C6)', background: '#FFF', gap: '20px', cursor: 'pointer' }}>
            <Image src={selectboxnearicon} alt="Settings" />
          </Box>
        </Grid>
        <Grid item xs={12} style={{ width: '100%' }}>
          <Grid container columnGap={8} style={{ marginTop: '20px' }}>
            <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '16px', fontWeight: '400', lineHeight: 'normal', width: '100%', marginBottom: '10px' }}>Overview of the sentiment analysis results.</Typography>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#baf8ba"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon1} alt="Settings" />
                </Box>
                <Typography variant="h4">0%</Typography>
                <Typography variant="body1">Positive Sentiment</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = " #f8baba"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon2} alt="Settings" />
                </Box>
                <Typography variant="h4">0%</Typography>
                <Typography variant="body1">Negative Sentiment</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#D1E5F4"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon3} alt="Settings" />
                </Box>
                <Typography variant="h4">0%</Typography>
                <Typography variant="body1">Neutral Sentiment</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container columnGap={8} style={{ marginTop: '20px' }}>
            <Typography style={{ color: 'var(--Grey-70, #B2B2B2)', fontFamily: 'Inter', fontSize: '16px', fontWeight: '400', lineHeight: 'normal', width: '100%', marginBottom: '10px' }}>Summary of mentions</Typography>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#baf8ba"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon4} alt="Settings" />
                </Box>
                <Typography variant="h4">2M</Typography>
                <Typography variant="body1">Total Mentions</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = " #f8baba"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon5} alt="Settings" />
                </Box>
                <Typography variant="h4">1.5M</Typography>
                <Typography variant="body1">Social media</Typography>
              </Box>
            </Grid>
            <Grid item xs={2} style={{ border: '1px solid var(--Primary-TEXT-70, #D3E7EC)', padding: '20px', textAlign: 'center', transition: 'background-color 0.3s ease', height: '160px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#D1E5F4"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Image src={reportboxicon6} alt="Settings" />
                </Box>
                <Typography variant="h4">.5M</Typography>
                <Typography variant="body1">News Media</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Report;
