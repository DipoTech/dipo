import React from 'react';
import { Box, styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GppGoodIcon from '@mui/icons-material/GppGood';

const Wrappr = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#0d0c57',
  color: '#fff',
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
  // maxWidth: '80vw',
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 'inherit',
}));

const ContactWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
}));

const IcoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

function Contact() {
  return (
    <div id="contact">

    <Wrappr >
      <BoxWrapper>
        <h1>CONTACT</h1>
        <hr />
        <p style={{fontSize: '2rem'}}>
          We'd <span style={{fontSize: '2rem'}}>&#10084;</span> to help!
        </p>
        <p style={{fontSize: '1.3rem', paddingBottom: '1rem'}}>
          We like to create thing with fun, open minded people. Feel free to say
          hello
        </p>
      </BoxWrapper>

      <ContactWrapper>
        <Box>
          <Box
            component="form"
            // sx={{
            //   '& .MuiTextField-root': { m: 1, width: '50ch' },
            // }}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="standard"
              sx={{ width: 350,m:1, background: 'white'}}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="standard"
              sx={{ width: 350,m:1, background: 'white' }}
            />
            <br />
            <TextField
              id="outlined-textarea"
              label="Message"
              sx={{ width: 350,m:1, background: 'white' }}
              rows={4}
              placeholder="Placeholder"
              variant="standard"
              multiline
            />
            <br />
            <Button>Submit</Button>
          </Box>
        </Box>
        <Box>
          <IconWrapper>
            <LocationOnIcon />
            <p>Jumbo Plaza Block 2 Parimentary Avenue</p>
          </IconWrapper>
          <IconWrapper>
            <AddIcCallIcon />
            <p>+256-777-7777-7777</p>
          </IconWrapper>
          <IconWrapper>
            <EmailIcon />
            <p>dipotechnologies@gmail.com</p>
          </IconWrapper>
          <hr />
          <IcoWrapper>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <GppGoodIcon />
          </IcoWrapper>
        </Box>
      </ContactWrapper>
    </Wrappr>
    </div>
  );
}

export default Contact;
