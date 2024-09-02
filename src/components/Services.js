import * as React from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDivider from './CustomDivider';
import consulting from '../images/consulting.png';
import academy from '../images/academy.png';
import performance from '../images/performance.png';
import technology from '../images/technology.png';

function Services() {
  return (
    <Grid container direction="column" sx={{ marginTop: "50px", justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{width: "45%"}}>
        <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>SERVICES</Typography>
        <CustomDivider sx={{marginBottom: "20px"}}/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', width: "45%"}}>
        <Box sx={{ marginRight: "50px" }}>
          <Link to="/conseil">
            <Box sx={{ border: "solid black 3px", padding: "25px"}}>
              <img src={consulting} alt="Consulting" />
            </Box>
          </Link>
          <Box sx={{marginTop: "5px"}}>
            <Typography sx={{ fontWeight: "bold", color: "#AB0C18", textAlign:"center" }}>CONSEIL</Typography>
            <Divider variant="middle" color='#AB0C18' sx={{marginTop: "5px", marginBottom: "5px"}}/>
            <Typography sx={{color:"#808080", fontSize: "12px", textAlign:"center"}}>Conseil stratégique</Typography>
          </Box>
        </Box>

        <Box sx={{ marginRight: "50px" }}>
          <Link to="/academie">
            <Box sx={{ border: "solid black 3px", padding: "25px"}}>
              <img src={academy} alt="Academy" />
            </Box>
          </Link>
          <Box sx={{marginTop: "5px", textAlign:"center" }}>
            <Typography sx={{ fontWeight: "bold", color: "#AB0C18", textAlign:"center" }}>ACADÉMIE</Typography>
            <Divider variant="middle" color='#AB0C18' sx={{marginTop: "5px", marginBottom: "5px"}}/>
            <Typography sx={{color:"#808080", fontSize: "12px", textAlign:"center"}}>Formation</Typography>
          </Box>
        </Box>

        <Box sx={{ marginRight: "50px", marginTop: "18px"}}>
          <Link to="/performance">
            <Box sx={{ border: "solid black 3px", padding: "25px"}}>
              <img src={performance} alt="Performance" />
            </Box>
          </Link>
          <Box sx={{marginTop: "5px" }}>
            <Typography sx={{ fontWeight: "bold", color: "#AB0C18", marginLeft:"-3px", marginRight: "-5px"}}>PERFORMANCE</Typography>
            <Divider variant="middle" color='#AB0C18' sx={{marginTop: "5px", marginBottom: "5px"}}/>
            <Typography sx={{color:"#808080", fontSize: "12px", textAlign:"center", width: "120px"}}>Évaluation de la performance</Typography>
          </Box>
        </Box>

        <Box sx={{marginTop: "18px"}}>
          <Link to="/technologie">
            <Box sx={{ border: "solid black 3px", padding: "25px" }}>
              <img src={technology} alt="Technology" />
            </Box>
          </Link>
          <Box sx={{ marginTop: "5px" }}>
            <Typography sx={{ fontWeight: "bold", color: "#AB0C18", textAlign:"center" }}>TECHNOLOGIE</Typography>
            <Divider variant="middle" color='#AB0C18' sx={{marginTop: "5px", marginBottom: "5px"}}/>
            <Typography sx={{color:"#808080", fontSize: "12px", textAlign:"center", width: "120px"}}>Notre équipe technologique</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Services;
