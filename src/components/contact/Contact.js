import React from 'react';
import { Box, styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GppGoodIcon from '@mui/icons-material/GppGood';


const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "red"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "purple"
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white"
  }
});

const Wrappr = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#009DAE',
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
      <Wrappr style={{ paddingTop: '60px' }}>
        <BoxWrapper>
          <h1>CONTACT</h1>
          <hr />
          <p style={{ fontSize: '2rem' }}>
            We'd <span style={{ fontSize: '2rem' }}>&#10084;</span> to help!
          </p>
          <p style={{ fontSize: '1.3rem', paddingBottom: '1rem' }}>
            We like to create thing with fun, open minded people. Feel free to
            say hello
          </p>
        </BoxWrapper>

        <ContactWrapper>
          <Box>
            <Box
              component="form"
              // sx={{
              //   '& .MuiTextField-root': { m: 1, width: '50ch' },
              // }}
              autoComplete="off"
              // border={'1px solid black'}
            >
              <StyledTextField
                id="outlined-basic"
                label="Name"
                variant="outlined" 
                sx={{ width: 350, m: 1 }}
              />
              <br />
              <StyledTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: 350, m: 1 }}
              />
              <br />
              <StyledTextField
                id="outlined-textarea"
                label="Message"
                sx={{ width: 350, m: 1 }}
                rows={4}
                placeholder="Placeholder"
                variant="outlined"
                multiline
              />
              <br />
              <Button variant="contained">Submit</Button>
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
