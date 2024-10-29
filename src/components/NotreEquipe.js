import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Box, Avatar } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { withTranslation } from 'react-i18next';
import LC from '../images/LC.png';
import JV from '../images/JV.png'
import AG from '../images/AG.jpg'
import PA from '../images/PA.png'

function NotreEquipe({t}) {

  return (
    <Carousel style={{ height: "700px", minWidth: "500px"}}>
      <Carousel.Item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 500, minWidth: 500, marginTop: "20px", marginBottom: "20px"}}>
                <CardHeader sx={{marginLeft: "170px"}}
                    avatar={<Avatar sx={{width: "120px", height: "120px",}} src={LC}/>}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center'}}>
                        {t('Equipe.LC.nom')}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 1.5, textAlign: 'center', fontSize: "0.8em"}}>
                        {t('Equipe.LC.role')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: "20px" }}>
                        {t('Equipe.LC.description')}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/louischarlesgauthier/" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon color='primary'/>
                        </IconButton>
                    </a>
                </CardActions>
            </Card>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345, minWidth: "345px", marginTop: "20px", marginBottom: "20px"}}>
                <CardHeader sx={{marginLeft: "100px"}}
                    avatar={<Avatar sx={{width: "120px", height: "120px",}} src={JV}/>}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center'}}>
                        {t('Equipe.JV.nom')}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 1.5, textAlign: 'center', fontSize: "0.8em"}}>
                        {t('Equipe.JV.role')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: "20px" }}>
                        {t('Equipe.JV.description')}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/vaillancourtjean/" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon color='primary'/>
                        </IconButton>
                    </a>
                </CardActions>
            </Card>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345, minWidth: "345px", marginTop: "70px", marginBottom: "20px"}}>
                <CardHeader sx={{marginLeft: "100px"}}
                    avatar={<Avatar sx={{width: "120px", height: "120px",}} src={PA}/>}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center'}}>
                        {t('Equipe.PA.nom')}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 1.5, textAlign: 'center', fontSize: "0.8em"}}>
                        {t('Equipe.PA.role')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: "20px" }}>
                        {t('Equipe.PA.description')}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/audetpascale/" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon color='primary'/>
                        </IconButton>
                    </a>
                </CardActions>
            </Card>
        </Box>
      </Carousel.Item>
      <Carousel.Item>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345, minWidth: "345px", marginTop: "50px", marginBottom: "20px"}}>
                <CardHeader sx={{marginLeft: "100px"}}
                    avatar={<Avatar sx={{width: "120px", height: "120px",}} src={AG}/>}
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center'}}>
                        {t('Equipe.AG.nom')}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 1.5, textAlign: 'center', fontSize: "0.8em"}}>
                        {t('Equipe.AG.role')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: "20px" }}>
                        {t('Equipe.AG.description')}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/aur%C3%A9lie-gauthier-54002429b/" target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon color='primary'/>
                        </IconButton>
                    </a>
                </CardActions>
            </Card>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
}

export default withTranslation()(NotreEquipe);