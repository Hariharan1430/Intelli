'use client';
import React, { useEffect } from 'react';
import {
  Box, Grid, Typography, Button, TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, IconButton, Tooltip
} from '@mui/material';
import Head from 'next/head';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useKeywordContext } from '../Component/page';

const BACKEND_URL = 'http://192.168.1.19:8888';

const KeywordDashboard = () => {
  const [keywords, setKeywords] = React.useState([
    { name: 'Yamaha India', mentions: 100, score: 87, created: '2024-05-14' },
    { name: 'Lenovo', mentions: 80, score: 77, created: '2024-05-16' },
  ]);

  const {
    setShowForm,
    keywordInput,
    setKeywordInput,
    setSubmitKeyword,
  } = useKeywordContext();

  const handleAddKeyword = async () => {
    const cleanedKeyword = keywordInput.trim();
    if (!cleanedKeyword) {
      alert('Please enter a valid keyword');
      return;
    }

    try {
      const url = `${BACKEND_URL}/api/keyword-sentiment/sentiment/?keyword=${encodeURIComponent(cleanedKeyword)}&range_type=weekly`;
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const text = await response.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        alert('Server returned invalid data.');
        return;
      }

      const today = new Date();
      const createdDate = `${today.getFullYear()}-${(today.getMonth() + 1)
                    .toString()
          .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

      const score = Math.round((data.avg_positive_score || 0) * 100);
      const mentions = data.match_count;

      const newEntry = {
        name: data.keyword || cleanedKeyword,
        mentions,
        score,
        created: createdDate,
      };

      setKeywords((prev) => [...prev, newEntry]);
      setKeywordInput('');
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch keyword data from server.');
    }
  };

  useEffect(() => {
    setSubmitKeyword(() => handleAddKeyword);
  }, [keywordInput]);

  return (
    <Box sx={{ padding: '20px' }}>
      <Head>
        <title>Keyword Dashboard</title>
      </Head>

      <Typography sx={{ fontWeight: '600', marginBottom: '8px', fontSize: '28px' }}>
        Keywords
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'gray', marginBottom: '16px' }}>
        Choose a keyword and browse the sentiments
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#4caf50', marginBottom: '20px' }}
            onClick={() => setShowForm(true)}
          >
            + Create new keyword
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#D3E7EC' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: '600' }}>KEYWORD NAME</TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">NEW MENTIONS</TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">CURRENT SCORE</TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">CREATED</TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">KEYWORD SETTINGS</TableCell>
                </TableRow>
              </TableHead>
               <TableBody>
                {keywords.map((keyword, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: '600', color: '#333' }} align="left">{keyword.name}</TableCell>
                    <TableCell align="center">
                      {keyword.mentions} <span style={{ color: 'red' }}>+</span>
                    </TableCell>
                    <TableCell align="center">
                      <Box sx={{ position: 'relative', display: 'inline-block', width: '30px', height: '30px' }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: keyword.score > 0 ? 'green' : 'gray',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontWeight: 'bold',
                          }}
                        >
                          {keyword.score}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{keyword.created}</TableCell>
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Tooltip title="Edit" placement="top">
                          <IconButton sx={{ color: 'blue' }}>
                            <EditIcon sx={{ fontSize: '17px' }} />
                          </IconButton>
                        </Tooltip>
                        <Typography sx={{ color: 'gray', marginLeft: '4px' }}>Edit</Typography>
                        <Tooltip title="Delete" placement="top">
                          <IconButton sx={{ color: 'red', marginLeft: '16px' }}>
                            <DeleteIcon sx={{ fontSize: '17px' }} />
                          </IconButton>
                        </Tooltip>
                        <Typography sx={{ color: 'gray', marginLeft: '4px' }}>Delete</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default KeywordDashboard;
