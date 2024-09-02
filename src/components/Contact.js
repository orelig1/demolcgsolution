import * as React from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Box, FormControl, TextField, Button, Typography } from '@mui/material';
import CustomDivider from './CustomDivider';

function Contact() {

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
    <Grid container direction="column" sx={{marginTop:"50px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: "45%"}}>
          <Typography variant="h6" sx={{fontWeight: "bold", color:"#AB0C18" }}>NOUS JOINDRE</Typography>
          <CustomDivider/>
          <Box component="form" onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <TextField label="Prénom" variant="outlined" required name="firstName"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Nom" variant="outlined" required name="lastName"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Adresse courriel" variant="outlined" type="email" required name="email"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Compagnie/Organisation" variant="outlined" name="organization"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Numéro de téléphone" variant="outlined" name="phoneNumber"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Message" variant="outlined" multiline rows={4} required name="message"
                         sx={{ '& label.Mui-focused': { color: '#AB0C18' }, '& .MuiOutlinedInput-root': { '&.Mui-focused fieldset': { borderColor: '#AB0C18' } }}}
              />
            </FormControl>
            <Button type="submit" variant="contained" sx={{ color: "white !important", '&:hover': { backgroundColor: "#313131" }, backgroundColor: "#AB0C18" }}>
              Envoyer
            </Button>
          </Box>
        </Box>
    </Grid>
  );
}

export default Contact;
