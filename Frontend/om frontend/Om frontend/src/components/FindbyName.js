import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function FindById() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

  const [name, setName] = useState('');
  const [student, setStudent] = useState(null);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/student/findbyname/${name}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}>
          <u>Add Student Name for Search</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>

      {student && (
        <Paper elevation={3} style={paperStyle}>
          <h1>Student Details</h1>
       
          <p>Name: {student.name}</p>
          <p>ID: {student.id}</p>
          <p>Address: {student.address}</p>
        
        </Paper>
      )}
    </Container>
  );
}
