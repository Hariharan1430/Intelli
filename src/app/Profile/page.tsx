'use client';
import React from 'react';
import {  Grid, Box, Typography, Button, IconButton, } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import Avatorimage from '../../../public/image/Avatorimage.svg';

const Profile = () => {
  return (
    <Box style={{ padding: '20px' }}>
      <Typography style={{ color: '#333', fontFamily: 'Inter', fontSize: '28px', fontStyle: 'normal', fontWeight: 600, marginBottom: '20px' }}>
        My Profile
      </Typography>
      <Grid container spacing={3}>

        {/* First Box */}
        <Grid item xs={7.5}>
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1.5px solid #D3E7EC', borderRadius: '8px', position: 'relative' }}>
            <Box style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginRight: '1rem' }}>
              <Image src={Avatorimage} alt="Profile Picture" width={80} height={80} style={{ borderRadius: '50%' }} />
            </Box>
            <Box style={{ flex: 1, marginLeft: '1rem' }}>
              <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px' }}>Mag namas</Typography>
              <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px' }}>Chemical Engineer</Typography>
              <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px' }}>Mumbai, Maharashtra, India</Typography>
            </Box>
            <IconButton style={{ display: 'flex', alignItems: 'center', padding: '5px 15.5px 5px 9px', border: '1px solid #D3E7EC', borderRadius: '4px' }}>
              <EditIcon sx={{ fontSize: '17px' }} />
              <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '29px', marginLeft: '7.5px' }}>Edit</Typography>
            </IconButton>
          </Box>
        </Grid>
        
        {/* Second Box */}
        <Grid item xs={7.5}>
          <Box style={{ border: '1.5px solid #D3E7EC', padding: '16px', borderRadius: '8px' }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, lineHeight: '26px' }}>
              <Typography variant="h6">Personal Information</Typography>
              <IconButton style={{ display: 'flex', alignItems: 'center', padding: '5px 15.5px 5px 9px', border: '1px solid #D3E7EC', borderRadius: '4px' }}>
                <EditIcon sx={{ fontSize: '17px' }} />
                <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '29px', marginLeft: '7.5px' }}>Edit</Typography>
              </IconButton>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box style={{ padding: '8px', lineHeight: '100px' }}>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>First Name</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Last Name</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Email address</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Phone</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Bio</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box style={{ padding: '8px', lineHeight: '100px' }}>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Mag</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>namas</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>test@gmail.com</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>(213) 555-1234</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Product Designer</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Third Box */}
        <Grid item xs={7.5}>
          <Box style={{ border: '1.5px solid #D3E7EC', padding: '16px', borderRadius: '8px' }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, lineHeight: '26px' }}>
              <Typography variant="h6">Address</Typography>
              <IconButton style={{ display: 'flex', alignItems: 'center', padding: '5px 15.5px 5px 9px', border: '1px solid #D3E7EC', borderRadius: '4px' }}>
                <EditIcon sx={{ fontSize: '17px' }} />
                <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '29px', marginLeft: '7.5px' }}>Edit</Typography>
              </IconButton>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box style={{ padding: '8px', lineHeight: '100px' }}>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Country</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>City/State</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Postal Code</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Contact number</Typography>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box style={{ padding: '8px', lineHeight: '100px' }}>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>India</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>Maharashtra</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>707001</Typography>
                  <Typography style={{ color: '#2A4343', fontFamily: 'Inter', fontSize: '15px', fontStyle: 'normal', fontWeight: 400, lineHeight: 2 }}>89889 66766</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
