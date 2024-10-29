import * as React from 'react';
import { Grid, Card, Typography, Button, Divider, Box, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import box_background1 from '../images/box_background1.jpg';
import background from '../images/background.jpg';
import { withTranslation } from 'react-i18next';

function Accueil({t}) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "88.2vh"
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3} sx={{ minHeight: "80vh"}}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
                  <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                    {t('Accueil.Conseil.titre')}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {t('Accueil.Conseil.sous-titre')}
                  </Typography>
                  <Divider sx={{marginBottom:"10px"}}/>
                  <Typography variant="body2">
                    {t('Accueil.Conseil.description')}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to="/conseil"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {t('Accueil.Conseil.bouton')}
                  </Button>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
              <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {t('Accueil.Academie.titre')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t('Accueil.Academie.sous-titre')}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {t('Accueil.Academie.description')}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/academie"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {t('Accueil.Academie.bouton')}
                  </Button>
              </Card>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} sx={{marginBottom: "20px"}}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: " 0%", backgroundSize: "100%", }}>
                <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {t('Accueil.Performance.titre')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t('Accueil.Performance.sous-titre')}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {t('Accueil.Performance.description')}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/performance"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {t('Accueil.Performance.bouton')}
                  </Button>
              </Card>
              </Paper>
            </Grid>
            
            <Grid item xs={4}>
            <Paper elevation={3}>
            <Card sx={{ padding: 2, textAlign: 'center', color: 'black', backgroundImage: `url(${box_background1})`, backgroundPosition: "50%", backgroundSize: "100%", }}>
                <Typography variant="h5" component="div" sx={{color: "#AB0C18", fontWeight: "700"}}>
                  {t('Accueil.Technologie.titre')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {t('Accueil.Technologie.sous-titre')}
                </Typography>
                <Divider sx={{marginBottom:"10px"}}/>
                <Typography variant="body2">
                  {t('Accueil.Technologie.description')}
                </Typography>
                <Button
                    component={RouterLink}
                    to="/technologie"
                    sx={{ 
                      marginTop: "15px", 
                      color: "white !important", 
                      '&:hover': { backgroundColor: "#AB0C18" },
                      '&:active': { color: "white" },
                      '&:focus': { color: "white" },
                      backgroundColor: "#313131"
                    }}
                  >
                    {t('Accueil.Technologie.bouton')}
                  </Button>
              </Card>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withTranslation()(Accueil);