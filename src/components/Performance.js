import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';
import upskills from '../images/upskills.jpg'
import { withTranslation } from 'react-i18next';

function Performance({t}) {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      {t('Breadcrumbs.service')}
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        {t('Breadcrumbs.performance')}
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>{t('Performance.titre')}</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>

          <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography sx={{marginBottom: "20px"}}>{t('Performance.description1')}</Typography>
          <Box sx={{display: "flex", marginBottom: "50px"}}>
            <img src={upskills} style={{marginRight: "15px", height: "100px", marginTop: "20px"}}/>
            <Typography sx={{marginTop: "15px"}}>{t('Performance.description2')}</Typography>
          </Box>

          <Typography sx={{ marginBottom: "20px"}}>{t('Performance.description3.titre')}</Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Performance.description3.bullet1')}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Performance.description3.bullet2')}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Performance.description3.bullet3')}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Performance.description3.bullet4')}
          </Typography>
          
          
          </Box>
    </Grid>
  );
}

export default withTranslation()(Performance);