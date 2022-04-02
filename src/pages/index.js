import React from 'react';
import Container from '@material-ui/core/Container';
import Login from '../pages/login';

export default function Index() {

  
  return (
    <div style={styles.loginBack}>
    <Container   maxWidth="sm">
      <Login />

    </Container>
    </div>
  );
}
const styles = {
  loginBack:{
    height: "100vh",
    marginTop:-32,
    with:'30px',
    backgroundSize:"cover",
    backgroundImage: `url(${"/images/login.jpg"})`
  }
}
