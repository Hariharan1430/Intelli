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
import Avatorimage from '../../../public/image/Avatorimage.svg';
import { useKeywordContext } from '../Component/page';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  // [Switch style here unchanged...]
}));

const HeaderWithToggleAndForm: React.FC = () => {
  const [isDay, setIsDay] = useState(true);
  const { showForm, setShowForm, keywordInput, setKeywordInput, submitKeyword } = useKeywordContext();

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
  value={keywordInput}
  onChange={(e) => setKeywordInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents form submission default behavior
      submitKeyword();
    }
  }}
/>
              <Typography variant="body2" className={styles.helperText}>
                Type comma separated phrases to monitor.
              </Typography>
              <Button variant="contained" className={styles.submitButton} onClick={submitKeyword}>
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
