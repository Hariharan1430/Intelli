'use client'
import React from 'react';
import { Grid, Box, IconButton, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import dashboardicon from "../../../public/icon/Category.svg"
import vectoricon1 from "../../../public/icon/Vector.svg"
import vectoricon2 from "../../../public/icon/Vector (1).svg"
import usericon from "../../../public/icon/3 User.svg"
import vectoricon3 from "../../../public/icon/Vector (2).svg"
import vectoricon4 from "../../../public/icon/settingsicon.svg"
import Image from 'next/image';



const icons = [
  {
    icon: (
      <Link href="/Fulldashboard">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={dashboardicon} alt="Home" />
        </Box>
      </Link>
    ),
    label: 'Dashboard',
  },
  {
    icon: (
      <Link href="/Results">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={vectoricon1} alt="Search" />
        </Box>
      </Link>
    ),
    label: 'Results',
  },
  {
    icon: (
      <Link href="/Keywordcomponent">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={vectoricon2} alt="Keywords" />
        </Box>
      </Link>
    ),
    label: 'Keywords',
  },
  {
    icon: (
      <Link href="/TargetArea">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={usericon} alt="Messages" />
        </Box>
      </Link>
    ),
    label: 'Target Area',
  },
  {
    icon: (
      <Link href="/Reports">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={vectoricon3} alt="Settings" />
        </Box>
      </Link>
    ),
    label: 'Reports',
  },
  {
    icon: (
      <Link href="/Example">
        <Box sx={{ fontSize: '36px', color: '#D3E7EC' }}>
          <Image src={vectoricon4} alt="Settings" />
        </Box>
      </Link>
    ),
    label: 'Settings',
  },
];
  
const VerticalNavbar: React.FC = () => {
  return (
    <Box
    sx={{
      width: '100px',
      backgroundColor: '#7F989A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      minHeight: '100vh',
      flexShrink: 0,
    }}
  >
    <Box>
      <Typography
        sx={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal',
          marginBottom: '30px',
        }}
      >
        intelli
      </Typography>
    </Box>
    <Grid container direction="column" alignItems="center">
      {icons.map((item, index) => (
        <Box
          key={index}
          sx={{
            margin: '8px 0',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: '#2A4343',
              transition: 'background-color 0.3s',
            },
          }}
        >
          <Tooltip title={item.label} placement="right">
            <IconButton sx={{ color: '#D3E7EC' }}>{item.icon}</IconButton>
          </Tooltip>
        </Box>
      ))}
    </Grid>
  </Box>
  );
};

export default VerticalNavbar;
