
import { Card, CardHeader,CardContent, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { blue} from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Link from "next/link";
export default function CardContainer(props){
  
  
  return(

<Box component="main" sx={{ flexGrow: 1, marginTop:10,p:1 }}>
        
        <Typography>       
         
       
       <Card>
        <CardHeader
        avatar={
            <Avatar sx={{ background: "linear-gradient(80deg, #d0aa5d, #2196f3)" }}>
            {props.icon}
           </Avatar>
         
        }
     
        title={<h2>{props.title}</h2>}
        
        action={props.route_component ? (
          <>
          
            <Link href={props.route_component}>
            <IconButton sx={{margin:2.1, bgcolor: blue[500]}} aria-label="add">
             {props.icon_button_action}
            </IconButton>
            </Link>
          </>
          // subheader="September 14, 2016"
        
        ):""}
        />
            <CardContent>
                {props.children}
           </CardContent>
      </Card> 
       </Typography> 
     </Box>

    );

}