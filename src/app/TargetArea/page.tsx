'use client'
import React from 'react';
import { Grid, Typography, Box, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import Indiamap from '../../../public/image/India map.svg';
import ArrowUpward from '../../../public/icon/greenpositive.svg';
import ArrowDownward from '../../../public/icon/rednegative.svg';
import ChatBubbleOutline from '../../../public/icon/mentions (2).svg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Karnataka from '../../../public/image/Karnataka (2).svg';

const Home = () => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ marginBottom: '40px' }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '28px',
                fontWeight: 600,
                color:'#333',
                marginBottom: '7px',
              }}
            >
              Target Area
            </Typography>
            <Typography
              sx={{
                color: '#C5C5C5',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
                marginBottom: '10px',
              }}
            >
              Get the statewise result
            </Typography>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <Grid item xs={12} md={2.35}>
                <Select defaultValue="choose keyword" sx={{ width: '100%', padding: '10px', height: '37px' }}>
                  <MenuItem value="choose keyword">choose keyword</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={2.35}>
                <Select defaultValue="India" sx={{ width: '100%', padding: '10px', height: '37px' }}>
                  <MenuItem value="India">India</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={2.35}>
                <Select defaultValue="select a state" sx={{ width: '100%', padding: '10px', height: '37px' }}>
                  <MenuItem value="select a state">Select the State</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Typography
              sx={{
                color: '#C5C5C5',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
                marginTop: '10px',
              }}
            >
              Select keyword to view Target area sentiments
            </Typography>
          </Box>

          <Grid container spacing={2}>                                                                                                                                                                                                                        

            
            <Grid item xs={12} md={5.5}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px' }}>
                <Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center',  }}>
                  <Grid item xs={4}>
                    <Box sx={{ display: 'flex', height: '200px', border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)' }}>
                      <Image src={ArrowUpward} alt="Positive" style={{ margin: '20px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                        <Typography variant="h6" sx={{ margin: '30px 10px 5px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                          1M
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', marginBottom: '50px' }}>Positive</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ display: 'flex', height: '200px', border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)' }}>
                      <Image src={ArrowDownward} alt="Negative" style={{ margin: '20px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                        <Typography variant="h6" sx={{ margin: '30px 10px 5px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                          50K
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', marginBottom: '50px' }}>Negative</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ display: 'flex', height: '200px', border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)' }}>
                      <Image src={ChatBubbleOutline} alt="Mentions" style={{ margin: '20px' }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '10px' }}>
                        <Typography variant="h6" sx={{ margin: '30px 10px 5px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                          50K
                        </Typography>
                        <Typography sx={{ fontSize: '1rem', marginBottom: '50px' }}>Mentions</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: 'var(--Primary-TEXT-100, #2A4343)',
                    fontFamily: 'Inter',
                    fontSize: '30px',
                    fontWeight: 400,
                    marginBottom: '15px',
                  }}
                >
                  State Sentiments
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--Grey-70, #B2B2B2)',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: 400,
                    marginBottom: '15px',
                  }}
                >
                  Results for Karnataka
                </Typography>

                <Box>
                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          background: 'linear-gradient(0deg, rgba(211, 231, 236, 0.20) 0%, rgba(211, 231, 236, 0.20) 100%), var(--White, #FFF)',
                          padding: '8px',
                          border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Positive <ArrowUpwardIcon sx={{ color: 'green', marginLeft: '8px' }} />
                      </Box>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          padding: '16px',
                          borderBottom: '2px solid var(--Primary-TEXT-70, #D3E7EC)',
                        }}
                      >
                        50K
                      </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          background: 'linear-gradient(0deg, rgba(211, 231, 236, 0.20) 0%, rgba(211, 231, 236, 0.20) 100%), var(--White, #FFF)',
                          padding: '8px',
                          border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Negative <ArrowDownwardIcon sx={{ color: 'red', marginLeft: '8px' }} />
                      </Box>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          padding: '16px',
                          borderBottom: '2px solid var(--Primary-TEXT-70, #D3E7EC)',
                        }}
                      >
                        10K
                      </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          background: 'linear-gradient(0deg, rgba(211, 231, 236, 0.20) 0%, rgba(211, 231, 236, 0.20) 100%), var(--White, #FFF)',
                          padding: '8px',
                          border: '1.2px solid var(--Primary-TEXT-70, #D3E7EC)',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        Mentions
                      </Box>
                      <Box
                        sx={{
                          color: 'var(--Primary-TEXT-100, #2A4343)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontWeight: '400',
                          padding: '16px',
                          borderBottom: '2px solid var(--Primary-TEXT-70, #D3E7EC)',
                        }}
                      >
                        5K
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Box
                  sx={{
                    padding: '30px',
                    border: '1px solid var(--Primary-TEXT-70, #D3E7EC)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Image src={Indiamap} alt="India Map" />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={9}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                <Box
                  sx={{
                    padding: '30px',
                    border: '1px solid var(--Primary-TEXT-70, #D3E7EC)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'var(--Grey-70, #B2B2B2)',
                      fontFamily: 'Inter',
                      fontSize: '26px',
                      fontWeight: 400,
                      marginBottom: '10px',
                    }}
                  >
                    Karnataka
                  </Typography>
                  <Image src={Karnataka} alt="Karnataka Map" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
