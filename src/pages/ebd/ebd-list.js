import * as React from 'react';
import Box from '@mui/material/Box';
import { getAPIClient } from '../../services/axiosClient';
import { parseCookies } from 'nookies';
import Layout from '../../layout/layoutDefault';
import Avatar from '@mui/material/Avatar';
import { blue} from '@mui/material/colors';
// import { Card,CardHeader,CardContent } from '@material-ui/core';
import CardContainer from '../../components/CardContainer';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
const steps = [
  {
    label: 'Vanniery Fernandes',
    img: `https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60`,
  },
  {
    label: 'Henrique',
    img:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Paula',
    img: `https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80`,
  },
];



export default function EBD() {

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
      
        <Layout>
          <CardContainer icon={<MenuBookIcon/>} title="Frequência EBD">
         
    
      
      <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', m: 1 }}> {steps[activeStep].label}</Typography>
        </Paper>
        <Box justifyContent='center' sx={{ height: 280, maxWidth: 1000, width: '100%', p: 2,display:'center' }}>
            <Avatar
            alt={steps[activeStep].label}
            src={steps[activeStep].img}
            sx={{ width: 200, height: 200,display:'center' }}
          />
          
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <>
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              variant="outlined" 
              color="error"
            >
              Falta
             
            </Button>
           
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              variant="contained" 
              color="success"
            >
              Presente
           
            </Button>
            
            </>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
 
            <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>
           {/* <h1>Teste</h1> */}
           </CardContainer>
        </Layout> 
    );



  

}



export async function getServerSideProps(ctx) {
    const apiClient = getAPIClient(ctx);
    const { ['nextauth.token']: token } = parseCookies(ctx)
  
    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  
    // await apiClient.get('v1/usuarios')
  
    return {
      props: {}
    }
}
