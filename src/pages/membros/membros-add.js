import { useEffect,useState } from 'react';
import { getAPIClient } from '../../services/axiosClient';
import { parseCookies } from 'nookies';
import Layout from '../../layout/layoutDefault';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Paper from '@mui/material/Paper';
import CardContainer from '../../components/CardContainer';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function InserirMembro() {

//   useEffect(() => setListMembros([...membros.membros]), [membros]);


  return (
    <Layout>
      <CardContainer title="Inserir membro" icon={<PeopleAltIcon/>} icon_button_action={<ArrowBackOutlinedIcon/>} route_component="/membros/membros-list">

      <Paper sx={{ width: '100%' }}>
        
     
    </Paper>

      </CardContainer>
    </Layout> 

  );
}

export async function getServerSideProps(ctx) {
    // const apiClient = getAPIClient(ctx);
    // const { ['nextauth.token']: token } = parseCookies(ctx)
  
    // if (!token) {
    //   return {
    //     redirect: {
    //       destination: '/',
    //       permanent: false,
    //     }
    //   }
    // } 
    
    // const res = await apiClient.get('membros')
    // const membros =await res.data
    // console.log(membros)
    return {
      props: {}
    }
}
