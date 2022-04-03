import { useEffect,useState } from 'react';
import { getAPIClient } from '../../services/axiosClient';
import { parseCookies } from 'nookies';
import Layout from '../../layout/layoutDefault';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Paper from '@mui/material/Paper';
import CardContainer, { CardObjectContainer } from '../../components/CardContainer';

import { DataGrid } from '@mui/x-data-grid';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const columns = [
  {
    field: 'nome_completo',
    headerName: 'Nome Completo',
    width: 200 ,
  },
  { field : 'email', 
    headerName: 'Email', 
    width: 250,
},
  {
    field : 'ebd',
    headerName: 'EBD',
    with: 30,
    valueFormatter: (params) => {
      const valueFormatted = Boolean(params.value)==false?'Não' : 'Sim'
      return valueFormatted;
    },
  },
  {
    field : 'membro',
    headerName: 'Membro',
    minWith: 30,
    valueFormatter: (params) => {
      const valueFormatted = Boolean(params.value)==false?'Não' : 'Sim'
      return valueFormatted;
    },
  },
  {
    field : 'data_de_nascimento',
    headerName: 'Nascimento',
    with: 170,
  },
];

export default function Membros({membros}) {

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [listMembros,setListMembros] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => setListMembros([...membros.membros]), [membros]);


  return (
    <Layout>
      <CardContainer title="Membros" icon={<PeopleAltIcon/>} icon_button_action={<AddOutlinedIcon/>} route_component="/membros/membros-add">

      <Paper sx={{ width: '100%' }}>
        
     
      <DataGrid
        rows={listMembros}
        columns={columns}
        pageSize={5}
        key={(row) => row._id}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row._id}
        checkboxSelection
        disableSelectionOnClick
        // autoPageSize={true} 
        autoHeight={true}
      />
    </Paper>

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
    
    const res = await apiClient.get('membros')
    const membros =await res.data
    // console.log(membros)
    return {
      props: {membros:membros}
    }
}
