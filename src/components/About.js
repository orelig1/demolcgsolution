import * as React from 'react';
import { Grid, Typography, Box, Divider, useMediaQuery } from '@mui/material';
import CustomDivider from './CustomDivider';
import NosClients from './NosClients';
import NotreEquipe from './NotreEquipe';
import { withTranslation } from 'react-i18next';

function About({ t }) {
  const isMobile = useMediaQuery('(max-width:900px)'); 

  return (
    <Grid container direction="column" sx={{ marginBottom: isMobile ? "20px" : "50px", marginTop: "50px", display: 'flex', justifyContent: 'center', alignItems: 'center', px: 0, maxHeight: '600vh'}}>
      <Box sx={{ width: isMobile ? "90%" : "45%" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18" }}>{t('About.title')}</Typography>
        <CustomDivider sx={{ marginBottom: "20px" }} />
        <Typography sx={{ marginBottom: "20px" }}> {t('About.description')} </Typography>
        <Typography sx={{ marginBottom: "20px" }}> {t('About.description1')} </Typography>
        <Typography sx={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: 'bold', color: '#AB0C18' }}> {t('About.academie')} </span> {t('About.academie.description')}
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
        <Divider sx={{ marginTop: isMobile ? "30px" : "50px" }} />
      </Box>
      <Box sx={{ width: isMobile ? "90%" : "45%", marginTop: isMobile ? "30px" : "50px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18" }}>
          {t('About.clients')}
        </Typography>
        <CustomDivider />
        <NosClients />
        <Divider sx={{ marginTop: isMobile ? "30px" : "50px" }} />
      </Box>
      <Box sx={{ width: isMobile ? "80%" : "45%", marginTop: isMobile ? "30px" : "50px", textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18", textAlign: 'left' }}>
          {t('About.equipe')}
        </Typography>
        <CustomDivider />
        <NotreEquipe />
      </Box>
    </Grid>
  );
}

export default withTranslation()(About);
