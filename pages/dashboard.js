import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getAPIClient } from '../src/services/axiosClient';
import { parseCookies } from 'nookies';
import Layout from '../src/layout/layoutDefault';
import Avatar from '@mui/material/Avatar';
import { blue} from '@mui/material/colors';
// import { Card,CardHeader,CardContent } from '@material-ui/core';
import CardContainer from '../src/components/CardContainer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
export default function Dashboard() {



  return (
    <Layout>
      <CardContainer icon={<AutoGraphIcon/>} title="Dashboard">
          {/* <h1>Teste</h1> */}
      </CardContainer>
    </Layout> 

  );

}

const styles = {  
    iconTitle: {
        zIndex:10,
        background: "linear-gradient(80deg, #43A047, #FFEB3B)",
        borderRadius: 10,
        padding: 17,
        marginRight: 10,
        fontSize: 22,
        color: "#ffffff",
        cursor: "pointer"
    }
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
