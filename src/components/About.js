import * as React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import CustomDivider from './CustomDivider';
import NosClients from './NosClients';
import NotreEquipe from './NotreEquipe';
import { withTranslation } from 'react-i18next';

function About({t}) {
  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>{t('About.title')}</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>
          <Typography sx={{marginBottom: "20px"}}> {t('About.description')} </Typography>
          <Typography sx={{marginBottom: "20px"}}> {t('About.description1')} </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {t('About.academie')} </span> 
            {t('About.academie.description')}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {t('About.conseil')} </span> 
            {t('About.conseil.description')}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {t('About.RH')} </span> 
            {t('About.RH.description')}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {t('About.performance')} </span> 
            {t('About.performance.description')}
          </Typography>
          <Divider sx={{marginTop: "50px"}}/>
        </Box>
        <Box sx={{width: "45%", marginTop: "50px"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}> {t('About.clients')} </Typography>
          <CustomDivider/>
          <NosClients/>
          <Divider sx={{marginTop: "50px"}}/>
        </Box>
        <Box sx={{width: "45%", marginTop: "50px"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}> {t('About.equipe')} </Typography>
          <CustomDivider/>
          <NotreEquipe/>
        </Box>
    </Grid>
  );
}

export default withTranslation()(About);