import * as React from 'react';
import locales from '../locales/fr.json';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs } from '@mui/material';
import { withTranslation } from 'react-i18next';


function Conseil({t}) {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
     {t('Breadcrumbs.service')}
    </Link>,
    <Typography key="3" color="text.primary" sx={{color:"#AB0C18"}}>
        {t('Breadcrumbs.conseil')}
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px"}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>{t('Conseil.titre')}</Typography>
          <CustomDivider sx={{marginBottom: "20px"}}/>

          <Stack spacing={2} sx={{marginBottom: "10px"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" sx={{color:"#AB0C18"}}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>{t('Conseil.sous-titre1.titre')}</Typography>
          <Typography sx={{marginBottom: "20px"}}>{t('Conseil.sous-titre1.description')}</Typography>

          <Typography sx={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Conseil.sous-titre1.bullet1')} 
          </Typography>
          <Typography sx={{ marginBottom: "15px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Conseil.sous-titre1.bullet2')} 
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: 'bold', color: '#AB0C18', fontSize:"20px" }}> • </span> 
            {t('Conseil.sous-titre1.bullet3')} 
          </Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>{t('Conseil.sous-titre2.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre2.description1')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre2.description2')}</Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>{t('Conseil.sous-titre3.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre3.description1')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre3.description2')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre3.description3')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre3.description4')}</Typography>

          <Typography sx={{ marginBottom: "5px", fontSize: "18px", color: '#AB0C18'}}>{t('Conseil.sous-titre4.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre4.description')}</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>{t('Conseil.sous-titre5.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre5.description')}</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>{t('Conseil.sous-titre6.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre6.description')}</Typography>

          <Typography variant="h5" sx={{marginBottom: "5px", color: "#AB0C18"}}>{t('Conseil.sous-titre7.titre')}</Typography>
          <Typography sx={{ marginBottom: "20px"}}>{t('Conseil.sous-titre7.description')}</Typography>
        </Box>
    </Grid>
  );
}

export default withTranslation()(Conseil);