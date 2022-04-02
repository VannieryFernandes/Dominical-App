
import { Card, CardHeader,CardContent, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { blue} from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function CardContainer(props){
  
  
  return(

<Box component="main" sx={{ flexGrow: 1, marginTop:10,p:1 }}>
        
        <Typography>       
         
       
       <Card>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: blue[500] }}>
            {props.icon}
           </Avatar>
         
        }
     
        title={<h2>{props.title}</h2>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // subheader="September 14, 2016"
      />
       
            <CardContent>
                {props.children}
           </CardContent>
      </Card> 
       </Typography> 
     </Box>

    );

}