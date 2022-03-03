import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar } from '@material-ui/core';
import Link from '../src/components/core/Link';
import Copyright from '../src/components/core/Copyright';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox,Button,Grid,Card,CardContent } from '@material-ui/core';
import {LockOutlined} from '@mui/icons-material';
import { useContext } from 'react';
import { AuthContext } from '../src/contexts/AuthContext';



export default function Login(){
  
  const { signIn } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        signIn({email: data.get('email'), password: data.get('password')})
      };
    return(
        <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          
        </Typography>
        <Card variant="outlined">
        <CardContent>
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
              {/* <Link href="/membros" color="secondary"> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
                Entrar
            </Button>
            {/* </Link> */}

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        </CardContent>
        </Card>

        

        <Copyright />
      </Box>
    )
}