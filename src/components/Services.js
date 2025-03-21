import * as React from 'react';
import { Grid, Box, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomDivider from './CustomDivider';
import consulting from '../images/consulting.png';
import academy from '../images/academy.png';
import performance from '../images/performance.png';
import technology from '../images/technology.png';
import { withTranslation } from 'react-i18next';

function Services({ t }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction="column"
      sx={{
        minHeight: isMobile ? "120vh" : "70vh", 
        justifyContent: isMobile ? 'flex-start' : 'center', 
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "45%" },
          marginTop: isMobile ? "20px" : "50px", 
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18" }}>
          {t('Services.title')}
        </Typography>
        <CustomDivider sx={{ marginBottom: "20px" }} />
      </Box>

      <Grid
        container
        spacing={isMobile ? 2 : 4}
        sx={{
          width: { xs: "90%", md: "45%" },
          paddingTop: { xs: "5%", md: "12%" },
          paddingBottom: { xs: "0", md: "10%" },
          justifyContent: 'center',
        }}
      >
        {[
          { to: "/services/conseil", img: consulting, title: t('Services.conseil.titre'), desc: t('Services.conseil.description') },
          { to: "/services/academie", img: academy, title: t('Services.academie.titre'), desc: t('Services.academie.description') },
          { to: "/services/performance", img: performance, title: t('Services.performance.titre'), desc: t('Services.performance.description') },
          { to: "/services/technologie", img: technology, title: t('Services.techno.titre'), desc: t('Services.techno.description') },
        ].map((service, index) => (
          <Grid item xs={6} sm={6} md={3} key={index} sx={{ textAlign: "center" }}>
            <Link to={service.to}>
              <Box sx={{ border: "solid black 3px", padding: "25px", display: "inline-block" }}>
                <img src={service.img} alt={service.title} />
              </Box>
            </Link>
            <Box sx={{ marginTop: "5px" }}>
              <Typography sx={{ fontWeight: "bold", color: "#AB0C18" }}>{service.title}</Typography>
              <Divider variant="middle" color="#AB0C18" sx={{ marginTop: "5px", marginBottom: "5px" }} />
              <Typography sx={{ color: "#808080", fontSize: "12px", textAlign: "center" }}>
                {service.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default withTranslation()(Services);
