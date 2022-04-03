import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Container } from '@material-ui/core';
import Link from '../../components/core/Link';
import Copyright from '../../components/core/Copyright';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox,Button,Grid,Card,CardContent } from '@material-ui/core';
import {LockOutlined} from '@mui/icons-material';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Router from 'next/router'
import { style } from '@mui/system';


const validationSchema = yup.object({
  email: yup
    .string('Insira seu email')
    .email('Insira um email valido')
    .required('Email é obrigátorio'),
  password: yup
    .string('Insira sua senha')
    .min(5, 'Senha deve conter no mínimo 5 caracteres')
    .required('Password é obrigátório'),
});

export default function Login(){
  
  const [state,setState] = useState({
    loading:false,
    payload : null
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setState({loading:true})
      signIn({email: values.email, password: values.password}).then(result=>{
        if(result.access_token){
          setState({loading:false,payload:result})
          console.log(state.loading)
          Router.push('dashboards/dashboard-ebd');

      }else{
        setState({loading:false,payload:result})
      }
    })

  }
})

  

  const { signIn } = useContext(AuthContext)

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
        
    //     signIn({email: data.get('email'), password: data.get('password')})
    //   };
    return(
      // <Container>
        <Box my={4} style={{paddingTop: 50,}}>
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
            Entrar
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
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

      // </Container>
    )
}
