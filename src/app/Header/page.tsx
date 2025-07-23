'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Typography, Avatar, TextField, Button } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Notifyicon from "../../../public/icon/Notifi.svg";
import Arrowicon from "../../../public/icon/Vector (5).svg";
import searchicon from "../../../public/icon/Vector (6).svg";
import styles from './header.module.css';
import Avatorimage from '../../../public/image/Avatorimage.svg'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#FCF55F',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const HeaderWithToggleAndForm: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const toggleTheme = () => {
    setIsDay(!isDay);
    if (!isDay) {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    } else {
      document.body.classList.add('night');
      document.body.classList.remove('day');
    }
  };

  const handleSearchClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <div className={styles.formContainer}>
          <div className={styles.closeButton} onClick={handleCloseForm}>
            &#x2716;
          </div>
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
      ) : (
        <AppBar position="static" sx={{ backgroundColor: 'whitesmoke' }}>
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <div className={styles.searchBar} onClick={handleSearchClick}>
                  <div className={styles.searchIconWrapper}>
                    <Image src={searchicon} alt="searchicon" width={24} height={24} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Keywords (mentions, authors & domains…)"
                    className={`${styles.inputBase} ${styles.placeholderText}`}
                    readOnly
                  />
                </div>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
                  <Grid item>
                    <div className={styles.toggleContainer} onClick={toggleTheme}>
                      <MaterialUISwitch checked={!isDay} />
                    </div>
                  </Grid>
                  <Grid item>
                    <Image src={Notifyicon} alt="Notification Icon" width={27} height={27} />
                  </Grid>
                  <Grid item>
                    <div className={styles.line}></div>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontWeight: '300', color: '#424141' }}>Hello ,</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" className={styles.userName}>
                      Mag namas
                    </Typography>
                  </Grid>
                  <Grid item>
                  <Image src={Avatorimage} alt="Profile Picture" width={45} height={45} style={{ borderRadius: '50%' }} />
                  </Grid>
                  <Grid item>
                    <Image src={Arrowicon} alt="Arrow Icon" width={15} height={15} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default HeaderWithToggleAndForm;
