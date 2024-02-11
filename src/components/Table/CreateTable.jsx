import React, { useEffect, useState } from 'react';
import './CreateTable.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const CreateTable = () => {
  
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/top-players')
    .then(res => res.json())
    .then(data => setTableData(data));
  }, []);

  return (
    tableData.length && 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200, maxWidth: 400, margin: '10px auto', border: '1px solid grey' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{border: '1px solid grey'}}>
            <TableCell sx={{fontWeight: 700, border: '1px solid grey'}}>ID</TableCell>
            <TableCell sx={{fontWeight: 700, border: '1px solid grey'}} align="left">Username</TableCell>
            <TableCell sx={{fontWeight: 700, border: '1px solid grey'}} align="left">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, ind) => (
            <TableRow sx={{border: '1px solid grey'}}
              key={row.username}
            >
              <TableCell sx={{border: '1px solid grey'}}>
                {ind+1}
              </TableCell>
              <TableCell align="left" sx={{border: '1px solid grey'}}>{row.username}</TableCell>
              <TableCell align="left" sx={{border: '1px solid grey'}}>{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CreateTable;
