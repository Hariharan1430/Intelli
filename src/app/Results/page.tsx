'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Image from 'next/image';
import styles from './result.module.css';

import smile1 from '../../../public/icon/smiley positive.svg';
import smile2 from '../../../public/icon/smiley Negative.svg';
import smile3 from '../../../public/icon/smiley Neutral.svg';
import reportboxicon4 from '../../../public/icon/mentions.svg';

const BACKEND_URL = 'http://192.168.1.19:8888';

type KeywordItem = { id: number; name: string };

const GraphDashboard: React.FC = () => {
  const [keywordList, setKeywordList] = useState<KeywordItem[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectedRange, setSelectedRange] = useState('daily');

  const [positive, setPositive] = useState('Nil');
  const [negative, setNegative] = useState('Nil');
  const [neutral, setNeutral] = useState('Nil');
  const [mentions, setMentions] = useState('Nil');

  // Fetch keyword list
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/keywords/`)
      .then((res) => res.json())
      .then(setKeywordList)
      .catch((err) => console.error('Failed to fetch keywords:', err));
  }, []);

  const handleSubmit = async () => {
    if (!selectedKeyword || !selectedRange) return;

    const url = `${BACKEND_URL}/api/keyword-sentiment/sentiment/?keyword=${encodeURIComponent(
      selectedKeyword
    )}&range_type=${selectedRange}&category=Tamilnadu`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();

      setPositive(data.avg_positive_score !== undefined ? `${Math.round(data.avg_positive_score * 100)}%` : 'Nil');
      setNegative(data.avg_negative_score !== undefined ? `${Math.round(data.avg_negative_score * 100)}%` : 'Nil');
      setNeutral(data.avg_neutral_score !== undefined ? `${Math.round(data.avg_neutral_score * 100)}%` : 'Nil');
      setMentions(data.match_count || 'Nil');
    } catch (err) {
      console.error('Failed to fetch sentiment:', err);
      setPositive('Nil');
      setNegative('Nil');
      setNeutral('Nil');
      setMentions('Nil');
    }
  };

  const ranges = ['15 minutes','30 minutes','1hour','daily', 'weekly', 'monthly'];

  return (
    <Box className={styles.container}>
      <Box className={styles.headingBox}>
        <Typography variant="h1" className={styles.mainHeading}>
          Results for <span className={styles.keywordHighlight}>{selectedKeyword || 'Keyword'}</span>
        </Typography>
      </Box>

      {/* Enhanced Keyword and Range Table */}
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label="keyword and range selection" className={styles.selectionTable}>
          <TableHead>
            <TableRow className={styles.tableHeaderRow}>
              <TableCell align="left" className={styles.tableHeaderCell}>
                <strong>Select Keyword</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={styles.tableBodyCell}>
                <Box className={styles.buttonGroup}>
                  {keywordList.map((keyword) => (
                    <Button
                      key={keyword.id}
                      className={`${styles.selectionButton} ${styles.keywordButton} ${
                        selectedKeyword === keyword.name ? styles.selectedKeyword : ''
                      }`}
                      onClick={() => setSelectedKeyword(keyword.name)}
                    >
                      {keyword.name}
                    </Button>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" className={styles.tableHeaderCell}>
                <strong>Select Time Range</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.tableBodyCell}>
                <Box className={styles.buttonGroup}>
                  {ranges.map((range) => (
                    <Button
                      key={range}
                      className={`${styles.selectionButton} ${styles.rangeButton} ${
                        selectedRange === range ? styles.selectedRange : ''
                      }`}
                      onClick={() => setSelectedRange(range)}
                    >
                      {range.charAt(0).toUpperCase() + range.slice(1)}
                    </Button>
                  ))}
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={styles.submitButtonWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className={styles.submitButton}
          disabled={!selectedKeyword || !selectedRange}
        >
          Analyze Sentiment
        </Button>
      </Box>

      {/* Enhanced Sentiment Result Boxes */}
      <Box className={styles.iconBox}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box className={`${styles.statBox} ${styles.positive}`}>
                            <Typography className={styles.statValue}>{positive}</Typography>
                              <Typography className={styles.statTitle}>Positive Reach</Typography>

              <Box className={styles.iconWrapper}>
                <Image src={smile1} alt="Positive" className={styles.iconmarginbox} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className={`${styles.statBox} ${styles.negative}`}>
                            <Typography className={styles.statValue}>{negative}</Typography>
                                    <Typography className={styles.statTitle}>Negative Reach</Typography>

              <Box className={styles.iconWrapper}>
                <Image src={smile1} alt="Negative" className={styles.iconmarginbox} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className={`${styles.statBox} ${styles.neutral}`}>
               <Typography className={styles.statValue}>{neutral}</Typography>

              <Typography className={styles.statTitle}>Neutral Reach</Typography>
              <Box className={styles.iconWrapper}>
                <Image src={smile1} alt="Neutral" className={styles.iconmarginbox} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box className={`${styles.statBox} ${styles.mentions}`}>
                            <Typography className={styles.statValue}>{mentions}</Typography>
                                      <Typography className={styles.statTitle}>Total Mentions</Typography>

              <Box className={styles.iconWrapper}>
                <Image src={reportboxicon4} alt="Mentions" className={styles.iconmarginbox} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GraphDashboard;