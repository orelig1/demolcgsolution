import * as React from 'react';
import CustomDivider from './CustomDivider';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Grid, Typography, Box, Stack, Breadcrumbs, useMediaQuery } from '@mui/material';
import Coriolis from '../images/Coriolis_Logo.jpg';
import { withTranslation } from 'react-i18next';

function Academie({ t }) {
  const isMobile = useMediaQuery('(max-width: 600px)'); 

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" component={RouterLink} to="/Services">
      {t('Breadcrumbs.service')}
    </Link>,
    <Typography key="3" color="text.primary" sx={{ color: "#AB0C18" }}>
      {t('Breadcrumbs.academie')}
    </Typography>,
  ];

  return (
    <Grid container direction="column" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{
        width: isMobile ? "90%" : "45%",
        paddingBottom: isMobile ? '80px' : '100px',
        paddingTop: isMobile ? '20px' : '50px',
        overflow: isMobile ? 'auto' : 'unset', 
        maxHeight: isMobile ? '110vh' : 'unset', 
      }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18", marginBottom: isMobile ? '10px' : '20px' }}>
          {t('Academie.titre')}
        </Typography>
        <CustomDivider sx={{ marginBottom: isMobile ? '10px' : '20px' }} />

        <Stack spacing={2} sx={{ marginBottom: isMobile ? '5px' : '10px' }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ color: "#AB0C18" }} />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>

        <Box sx={{ display: "flex", marginBottom: isMobile ? '20px' : '50px', alignItems: 'center' }}>
          <img 
            src={Coriolis} 
            alt="Coriolis Logo"
            style={{ 
              marginRight: "15px", 
              width: isMobile ? "50px" : "100px", 
              objectFit: "contain", 
              maxWidth: "100%", 
              height: "auto" 
            }} 
          />
          <Typography sx={{ marginTop: "15px" }}>{t('Academie.description')}</Typography>
        </Box>

        <Typography variant="h5" sx={{ marginBottom: "5px", color: "#AB0C18", fontSize: isMobile ? '18px' : '20px' }}>
          {t('Academie.sous-titre1.titre')}
        </Typography>
        <Typography sx={{ marginBottom: "10px", fontSize: isMobile ? '14px' : '16px' }}>{t('Academie.sous-titre1.description1')}</Typography>
        <Typography sx={{ marginBottom: "10px", fontSize: isMobile ? '14px' : '16px' }}>{t('Academie.sous-titre1.description2')}</Typography>

        <Typography variant="h5" sx={{ marginBottom: "5px", color: "#AB0C18", fontSize: isMobile ? '18px' : '20px' }}>
          {t('Academie.sous-titre2.titre')}
        </Typography>
        <Typography sx={{ marginBottom: "10px", fontSize: isMobile ? '14px' : '16px' }}>{t('Academie.sous-titre2.description')}</Typography>
      </Box>
    </Grid>
  );
}

export default withTranslation()(Academie);