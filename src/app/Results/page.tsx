'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import styles from './result.module.css';
import smile1 from '../../../public/icon/smiley positive.svg';
import smile2 from '../../../public/icon/smiley Negative.svg';
import smile3 from '../../../public/icon/smiley Neutral.svg';
import reportboxicon4 from '../../../public/icon/mentions.svg';
import { useKeywordContext } from '../Component/page';
import Piechartgrapg from '../Sentimentpiechart/page';
import Lastbox from '../Twochartbox/page';

const BACKEND_URL = 'http://192.168.1.15:8000';

type KeywordItem = { id: number; name: string };

const GraphDashboard: React.FC = () => {
  const {
    keywordInput,
    setSubmitKeyword,
    setShowForm,
  } = useKeywordContext();

  const [keywordList, setKeywordList] = useState<KeywordItem[]>([]);

  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectedRange, setSelectedRange] = useState('weekly');
  const [selectedCategory] = useState('Tamilnadu'); // Fixed category

  const [positive, setPositive] = useState('Nil');
  const [negative, setNegative] = useState('Nil');
  const [neutral, setNeutral] = useState('Nil');
  const [mentions, setMentions] = useState('Nil');
  const [chartData, setChartData] = useState([]);

  // Populate keyword dropdown
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/keywords/`)
      .then((res) => res.json())
      .then(setKeywordList)
      .catch((err) => console.error('Failed to fetch keywords:', err));
  }, []);

  // Connect search bar to dropdown (do NOT fetch yet)
  useEffect(() => {
    setSubmitKeyword(() => {
      return () => {
        if (keywordInput.trim()) {
          setSelectedKeyword(keywordInput);
          setShowForm(false);
        }
      };
    });
  }, [keywordInput, setSubmitKeyword, setShowForm]);

  // Fetch sentiment data only when submit button is clicked
  const handleSubmit = async () => {
    if (!selectedKeyword || !selectedRange || !selectedCategory) return;

    const url = `${BACKEND_URL}/api/keyword-sentiment/sentiment/?keyword=${encodeURIComponent(
      selectedKeyword
    )}&range_type=${selectedRange}&category=${encodeURIComponent(selectedCategory)}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();

      setPositive(data.avg_positive_score !== undefined ? `${Math.round(data.avg_positive_score * 100)}%` : 'Nil');
      setNegative(data.avg_negative_score !== undefined ? `${Math.round(data.avg_negative_score * 100)}%` : 'Nil');
      setNeutral(data.avg_neutral_score !== undefined ? `${Math.round(data.avg_neutral_score * 100)}%` : 'Nil');
      setMentions(data.match_count || 'Nil');
      setChartData(data.chart || []);
    } catch (err) {
      console.error('Failed to fetch sentiment:', err);
      setPositive('Nil');
      setNegative('Nil');
      setNeutral('Nil');
      setMentions('Nil');
      setChartData([]);
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.headingBox}>
        <Typography sx={{ fontSize: '28px', fontWeight: '600', fontFamily: 'Inter', color: '#333' }}>
          Results for {selectedKeyword || 'Keyword'}
        </Typography>
      </Box>

      {/* Filters */}
      <Grid item xs={12}>
        <Box className={styles.filterBox}>
          {/* Dropdown 1: Keywords */}
          <Select
            value={selectedKeyword}
            onChange={(e) => setSelectedKeyword(e.target.value)}
            className={styles.select}
            displayEmpty
          >
            <MenuItem value="">Keyword</MenuItem>
            {keywordList.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>

          {/* Dropdown 2: Range */}
          <Select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            className={styles.select}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>

          {/* Dropdown 3: Category (Fixed) */}
          <Select value="Tamilnadu" className={styles.select} disabled>
            <MenuItem value="Tamilnadu">Tamil Nadu</MenuItem>
          </Select>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Grid>

      {/* Stats */}
      <Box className={styles.iconBox}>
        <Grid container spacing={2}>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
              <Image src={smile1} alt="Positive" className={styles.iconmarginbox} />
              <Typography>Positive Reach</Typography>
              <Typography>{positive}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
              <Image src={smile2} alt="Negative" className={styles.iconmarginbox} />
              <Typography>Negative Reach</Typography>
              <Typography>{negative}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
              <Image src={smile3} alt="Neutral" className={styles.iconmarginbox} />
              <Typography>Neutral Reach</Typography>
              <Typography>{neutral}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box className={styles.statBox}>
              <Image src={reportboxicon4} alt="Mentions" className={styles.iconmarginbox} />
              <Typography>Mentions</Typography>
              <Typography>{mentions}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Charts */}
      {/* Add Piechart or other components here */}
      
    </Box>
  );
};

export default GraphDashboard;
