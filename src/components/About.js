import * as React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import locales from '../locales/fr.json';
import CustomDivider from './CustomDivider';
import NosClients from './NosClients';
import NotreEquipe from './NotreEquipe';

function About() {
  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>À PROPOS DE NOUS</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>
          <Typography sx={{marginBottom: "20px"}}> {locales.About.description} </Typography>
          <Typography sx={{marginBottom: "20px"}}> {locales.About.description1} </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {locales.About.academie} </span> 
            {locales.About['academie.description']}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {locales.About.conseil} </span> 
            {locales.About['conseil.description']}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {locales.About.RH} </span> 
            {locales.About['RH.description']}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {locales.About.performance} </span> 
            {locales.About['performance.description']}
          </Typography>
          <Divider sx={{marginTop: "50px"}}/>
        </Box>
        <Box sx={{width: "45%", marginTop: "50px"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}> {locales.About.clients} </Typography>
          <CustomDivider/>
          <NosClients/>
          <Divider sx={{marginTop: "50px"}}/>
        </Box>
        <Box sx={{width: "45%", marginTop: "50px"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}> {locales.About.equipe} </Typography>
          <CustomDivider/>
          <NotreEquipe/>
        </Box>
    </Grid>
  );
}

export default About;