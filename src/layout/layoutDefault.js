import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { parseCookies } from 'nookies';

import Link from 'next/link';
import UserMenu from './userMenu';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listSidebar = [
      {name:'Dashboard',icon: <AutoGraphIcon />,link:'/dashboard'},
      {name:'Membros',icon:<PeopleOutlineOutlinedIcon />,link:'/membros'},
      {name:'EBD',icon:<MenuBookIcon />,link:'/ebd'},
      {name:'Usuários',icon:<PeopleOutlineIcon />,link:'/users'}];

  const reportSide = [
    {name:'Relatório Membros',icon: <SupervisedUserCircleIcon />,link:'/membros'},
    {name:'Relatório EBD',icon:<MenuBookIcon />,link:'/ebd'},
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} style={{backgroundColor:"#2196f3"}}>
        <Toolbar  sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuRoundedIcon fontSize="large" style={{color:"#fff"}}/>
          </IconButton>
          <Typography 
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          color="#fff"
          sx={{ flex: 1 }}>
            Dominical
          </Typography>
          {/* <Box color="inherit" sx={{align: 'right', textAlign: 'right' }}> */}
          <nav>
          <Typography color="inherit" align='right' >
            <UserMenu />
          </Typography>
          </nav>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listSidebar.map((obj) => (
        <Link href={obj.link}>
            <ListItem button key={obj.name}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
        </Link>
          ))}
        </List>
        <Divider />
        <List>
          {reportSide.map((obj) => (
            <ListItem button key={obj.name}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <DrawerHeader/>
      {props.children}
    </Box>
  );
}

export async function getServerSideProps(ctx) {
    const apiClient = getAPIClientt(ctx);
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