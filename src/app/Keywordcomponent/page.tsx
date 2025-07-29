'use client';
import React, { useState } from 'react';
import {
  Box, Grid, Typography, Button, TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, IconButton, Tooltip, TextField
} from '@mui/material';
import Head from 'next/head';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BACKEND_URL = 'http://192.168.1.11:8000';

const KeywordDashboard = () => {
  const [keywords, setKeywords] = useState([
    { name: 'Yamaha India', mentions: 100, score: 87, created: '2024-05-14' },
    { name: 'Lenovo', mentions: 80, score: 77, created: '2024-05-16' },
    { name: 'Modi', mentions: 90, score: 88, created: '2024-05-18' },
    { name: 'Rahul Gandhi', mentions: 78, score: 67, created: '2024-05-20' },
    { name: 'India 2024', mentions: 55, score: 50, created: '2024-05-25' },
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');

  const handleAddKeyword = async () => {
    const cleanedKeyword = newKeyword.trim();
    if (!cleanedKeyword) {
      alert('Please enter a valid keyword');
      return;
    }

    try {
      const url = `${BACKEND_URL}/api/keyword-sentiment/sentiment/?keyword=${encodeURIComponent(cleanedKeyword)}&range_type=weekly`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const text = await response.text();
      console.log('Raw response:', text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error('Error parsing response as JSON:', err);
        alert('Server returned invalid data.');
        return;
      }

      const today = new Date();
      const createdDate = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}`;

      const score = Math.round((data.average_score || 0) * 100); // 0 to 100 scale
      const score1=data.total_matches;

      const newEntry = {
        name: data.keyword || cleanedKeyword,
        mentions: score1, // as per your request
        score: score,
        created: createdDate
      };

      setKeywords(prev => [...prev, newEntry]);
      setNewKeyword('');
      setShowInput(false);
    } catch (err) {
      console.error('Network or API error:', err);
      alert('Failed to fetch keyword data from server.');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Head>
        <title>Keyword Dashboard</title>
        <meta name="description" content="Keyword management dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography sx={{ fontWeight: '600', marginBottom: '8px', fontFamily: 'Inter', color: '#333', fontSize: '28px' }}>
        Keywords
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'gray', marginBottom: '16px' }}>
        Choose a keyword and browse the sentiments
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          {!showInput ? (
            <Button
              variant="contained"
              sx={{ backgroundColor: '#4caf50', marginBottom: '20px' }}
              onClick={() => setShowInput(true)}
            >
              + Create new keyword
            </Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', marginBottom: '20px' }}>
              <TextField
                label="Enter keyword"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                size="small"
              />
              <Button variant="contained" onClick={handleAddKeyword}>Submit</Button>
              <Button variant="outlined" onClick={() => { setShowInput(false); setNewKeyword(''); }}>Cancel</Button>
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#D3E7EC' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: '600', color: '#333', borderTopLeftRadius: '8px', borderBottom: 'none' }}>KEYWORD NAME</TableCell>
                  <TableCell sx={{ fontWeight: '600', color: '#333', borderBottom: 'none' }} align="center">NEW MENTIONS</TableCell>
                  <TableCell sx={{ fontWeight: '600', color: '#333', borderBottom: 'none' }} align="center">CURRENT SCORE</TableCell>
                  <TableCell sx={{ fontWeight: '600', color: '#333', borderBottom: 'none' }} align="center">CREATED</TableCell>
                  <TableCell sx={{ fontWeight: '600', color: '#333', borderTopRightRadius: '8px', borderBottom: 'none' }} align="center">KEYWORD SETTINGS</TableCell>
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
