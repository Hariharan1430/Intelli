import { Grid, Box, Typography, Avatar, IconButton } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { TrendingUp, TrendingDown, Equalizer, ChatBubbleOutline, ArrowDropDown } from '@mui/icons-material';
import styles from '../Recentsearch/recentsearch.module.css';


 
const pieData = [
  { value: 30, color: '#4CAF50' },
  { value: 10, color: '#00BCD4' },
  { value: 60, color: '#F44336' },
];

const handles = [
  { name: 'roubaiXCC', username: '@roubaiXCC', followers: '671 followers', count: 6, avatar: 'path_to_avatar1' },
  { name: 'zack', username: '@zack', followers: '671 followers', count: 6, avatar: 'path_to_avatar2' },
  { name: 'dsf', username: '@dsf', followers: '671 followers', count: 6, avatar: 'path_to_avatar3' },
  { name: 'dsf', username: '@dsf', followers: '671 followers', count: 6, avatar: 'path_to_avatar3' },
  { name: 'asd', username: '@asd', followers: '671 followers', count: 6, avatar: 'path_to_avatar4' },
  { name: 'asd', username: '@asd', followers: '671 followers', count: 6, avatar: 'path_to_avatar4' },
  { name: 'dsf', username: '@dsf', followers: '671 followers', count: 6, avatar: 'path_to_avatar3' },
];

export default function Home() {
  return (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        {/* Main Content */}
        <Grid item xs={12}>
          <Box className={styles.mainContent}>
            {/* Left Box */}
            <Box className={styles.leftBox}>
              <Box className={`${styles.commonHeader} ${styles.header}`}>
                <Typography variant="h6" className={styles.title}>
                  Recent searches
                </Typography>
              </Box>
              <Typography variant="h5" className={styles.subtitle}>
                Yamaha
              </Typography>
              <Box className={styles.chartAndSentiment}>
                <PieChart width={250} height={250} series={[{ data: pieData }]} />
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
              <Box >
                <Box className={styles.headers}>
                  <Typography className={styles.sourceHeader}>Sources</Typography>
                  <Typography className={styles.sourceHeader}>Stat.</Typography>
                  <Typography className={styles.sourceHeader}>Mentions</Typography>
                  <Typography className={styles.sourceHeader}>Pos.</Typography>
                  <Typography className={styles.sourceHeader}>Neg.</Typography>
                  <Typography className={styles.sourceHeader}>Neu.</Typography>
                </Box>
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
            {/* Right Box */}
            <Box className={styles.rightBox}>
              <Box className={`${styles.commonHeader} ${styles.header}`}>
                <Typography variant="h6" className={styles.title}>
                  Top Handles
                </Typography>
                <IconButton className={styles.iconButton}>
                  <ArrowDropDown />
                </IconButton>
              </Box>
              {handles.map((handle, index) => (
                <Box key={index} className={styles.handle}>
                  <Avatar className={styles.avatar} src={handle.avatar}>
                    {handle.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Box className={styles.handleInfo}>
                    <Typography className={styles.handleName}>{handle.name}</Typography>
                    <Typography className={styles.handleFollowers}>
                      {handle.username} {handle.followers}
                    </Typography>
                  </Box>
                  <Box className={styles.handleCount}>
                    <Typography className={styles.count}>{handle.count}</Typography>
                    <ChatBubbleOutline className={styles.chatIcon} />
                  </Box>
                </Box>
              ))}
              <Box className={styles.viewMore}>
                <Typography className={styles.viewMoreText}>View more</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
