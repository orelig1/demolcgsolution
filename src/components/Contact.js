import * as React from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Box, FormControl, TextField, Button, Typography } from '@mui/material';
import CustomDivider from './CustomDivider';
import { withTranslation } from 'react-i18next';

function Contact({ t }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm('service_cjh18l1', 'template_1uq3xjs', form, 'sHfVVbPaModtqrACK')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        paddingTop: "40px",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '80vh',
        paddingBottom: '20px',
      }}
    >
      <Box sx={{ 
        width: "90%", 
        maxWidth: "600px", 
        flexGrow: 1,
        paddingBottom: '20px', 
      }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#AB0C18" }}>
          {t('Contact.title')}
        </Typography>
        <CustomDivider />
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.name')} 
              variant="outlined" 
              required name="firstName"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.last name')}  
              variant="outlined" 
              required name="lastName"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.email')}  
              variant="outlined" 
              type="email" 
              required name="email"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.company')}  
              variant="outlined" 
              name="organization"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.phone')}  
              variant="outlined" 
              name="phoneNumber"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField 
              label={t('Contact.message')}  
              variant="outlined" 
              multiline rows={4} 
              required name="message"
              sx={{
                '& label.Mui-focused': { color: '#AB0C18' },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': { borderColor: '#AB0C18' },
                }
              }}
            />
          </FormControl>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              color: "white", 
              '&:hover': { backgroundColor: "#313131" }, 
              backgroundColor: "#AB0C18", 
              marginTop: "10px", 
              marginBottom: "25px" 
            }}
          >
            {t('Contact.button')}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default withTranslation()(Contact);
