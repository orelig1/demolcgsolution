import * as React from 'react';
import { Grid, Card, Typography, Button, Divider, Box, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import box_background1 from '../images/box_background1.jpg';
import { withTranslation } from 'react-i18next';

function Accueil({t, i18n}) {
  const isFrench = i18n.language === 'fr'; // Check if the current language is French

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: isFrench ? '80%' : '80%', 
      minHeight: '80vh',
      maxHeight: '400vh',
      margin: '0 auto',
      padding: '20px',
      marginBottom: "30px"
    }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* Conseil Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3}>
            <Card sx={{
              padding: 2,
              textAlign: 'center',
              color: 'black',
              backgroundImage: `url(${box_background1})`,
              backgroundPosition: "50%",
              backgroundSize: "cover"
            }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                {t('Accueil.Conseil.titre')}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t('Accueil.Conseil.sous-titre')}
              </Typography>
              <Divider sx={{marginBottom:"10px"}}/>
              <Typography variant="body2" sx={{minHeight: "70px"}}>
                {t('Accueil.Conseil.description')}
              </Typography>
              <Button
                component={RouterLink}
                to="/services/conseil"
                sx={{
                  marginTop: "15px",
                  color: "white !important",
                  '&:hover': { backgroundColor: "#AB0C18" },
                  '&:active': { color: "white" },
                  '&:focus': { color: "white" },
                  backgroundColor: "#313131",
                  width: "100%"
                }}
              >
                {t('Accueil.Conseil.bouton')}
              </Button>
            </Card>
          </Paper>
        </Grid>

        {/* Academie Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3}>
            <Card sx={{
              padding: 2,
              textAlign: 'center',
              color: 'black',
              backgroundImage: `url(${box_background1})`,
              backgroundPosition: "50%",
              backgroundSize: "cover"
            }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                {t('Accueil.Academie.titre')}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t('Accueil.Academie.sous-titre')}
              </Typography>
              <Divider sx={{marginBottom:"10px"}}/>
              <Typography variant="body2" sx={{minHeight: "70px"}}>
                {t('Accueil.Academie.description')}
              </Typography>
              <Button
                component={RouterLink}
                to="/services/academie"
                sx={{
                  marginTop: "15px",
                  color: "white !important",
                  '&:hover': { backgroundColor: "#AB0C18" },
                  '&:active': { color: "white" },
                  '&:focus': { color: "white" },
                  backgroundColor: "#313131",
                  width: "100%"
                }}
              >
                {t('Accueil.Academie.bouton')}
              </Button>
            </Card>
          </Paper>
        </Grid>

        {/* Performance Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3}>
            <Card sx={{
              padding: 2,
              textAlign: 'center',
              color: 'black',
              backgroundImage: `url(${box_background1})`,
              backgroundPosition: "50%",
              backgroundSize: "cover"
            }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                {t('Accueil.Performance.titre')}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t('Accueil.Performance.sous-titre')}
              </Typography>
              <Divider sx={{marginBottom:"10px"}}/>
              <Typography variant="body2" sx={{minHeight: "70px"}}>
                {t('Accueil.Performance.description')}
              </Typography>
              <Button
                component={RouterLink}
                to="/services/performance"
                sx={{
                  marginTop: "15px",
                  color: "white !important",
                  '&:hover': { backgroundColor: "#AB0C18" },
                  '&:active': { color: "white" },
                  '&:focus': { color: "white" },
                  backgroundColor: "#313131",
                  width: "100%"
                }}
              >
                {t('Accueil.Performance.bouton')}
              </Button>
            </Card>
          </Paper>
        </Grid>

        {/* Technologie Section */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3}>
            <Card sx={{
              padding: 2,
              textAlign: 'center',
              color: 'black',
              backgroundImage: `url(${box_background1})`,
              backgroundPosition: "50%",
              backgroundSize: "cover"
            }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                {t('Accueil.Technologie.titre')}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {t('Accueil.Technologie.sous-titre')}
              </Typography>
              <Divider sx={{marginBottom:"10px"}}/>
              <Typography variant="body2" sx={{minHeight: "70px"}}>
                {t('Accueil.Technologie.description')}
              </Typography>
              <Button
                component={RouterLink}
                to="/services/technologie"
                sx={{
                  marginTop: "15px",
                  color: "white !important",
                  '&:hover': { backgroundColor: "#AB0C18" },
                  '&:active': { color: "white" },
                  '&:focus': { color: "white" },
                  backgroundColor: "#313131",
                  width: "100%"
                }}
              >
                {t('Accueil.Technologie.bouton')}
              </Button>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withTranslation()(Accueil);
