import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import styles from '../Trendingboxes/Trendingboxes.module.css';

const trendingHashtags = [
    { hashtag: '#shorts', mentions: 78 },
    { hashtag: '#ragul', mentions: 500 },
    { hashtag: '#song', mentions: 706 },
    { hashtag: '#love', mentions: 350 },
    { hashtag: '#trending', mentions: 456 },
    { hashtag: '#viral', mentions: 987 },
    { hashtag: '#my', mentions: 186 },
    { hashtag: '#swatantraparty', mentions: 354 },
    { hashtag: '#modi', mentions: 258 },
    { hashtag: '#gitatv', mentions: 789 },
];

const trendingNews = [
    { news: '#shorts', mentions: 78 },
    { news: '#ragul', mentions: 500 },
    { news: '#song', mentions: 706 },
    { news: '#love', mentions: 350 },
    { news: '#trending', mentions: 456 },
    { news: '#viral', mentions: 987 },
    { news: '#my', mentions: 186 },
    { news: '#swatantraparty', mentions: 354 },
    { news: '#modi', mentions: 258 },
    { news: '#gitatv', mentions: 789 },
];

const TrendingBoxes: React.FC = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Paper className={styles.paper}>
                    <Typography variant="h6" className={styles.header}>
                        Trending Hashtags
                    </Typography>
                    <ul className={styles.list}>
                        {trendingHashtags.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <span className={styles.index}>{index + 1}</span>
                                <span className={styles.item}>{item.hashtag}</span>
                                <span className={styles.mentions}>{item.mentions} Mentions</span>
                            </li>
                        ))}
                    </ul>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={styles.paper}>
                    <Typography variant="h6" className={styles.header}>
                        Trending News
                    </Typography>
                    <ul className={styles.list}>
                        {trendingNews.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <span className={styles.index}>{index + 1}</span>
                                <span className={styles.item}>{item.news}</span>
                                <span className={styles.mentions}>{item.mentions} Mentions</span>
                            </li>
                        ))}
                    </ul>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default TrendingBoxes;
