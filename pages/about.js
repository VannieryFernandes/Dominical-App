import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/components/core/Link';
import Copyright from '../src/components/core/Copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sobre
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Ir para home
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
