import React from 'react';
import { Box, styled } from '@mui/system';

const BoxSection = styled(Box)(({ theme }) => ({
  minHeight: '50vh',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

function Footer() {
  return (
      <Box sx={{background: '#0c0524', color: 'white'}}>
    <BoxSection>
      <Box>
        <h1 className="heading">Important Links</h1>
          <p style={{padding: '10px'}}>Home</p>
          <p style={{padding: '10px'}}>About</p>
          <p style={{padding: '10px'}}>Contact Us</p>
          <p style={{padding: '10px'}}>Career</p>
      </Box>
      <Box>
        <h1  className="heading">Contact Us</h1>
        <h3 style={{padding: '5px'}}>Email</h3>
        <p style={{padding: '12px'}}>dipotechnologies@gmail.com</p>
        <h3 style={{padding: '12px'}}>Location</h3>
        <p style={{padding: '12px'}}>Jumbo Plaza Block 2, Parimentary Avenue</p>
      </Box>
      <Box>
        <h1 className="heading">Services We Offer</h1>
          <p style={{padding: '10px'}}>Mobile App Development</p>
          <p style={{padding: '10px'}}>Websites Development</p>
          <p style={{padding: '10px'}}>IT Consultancy</p>
          <p style={{padding: '10px'}}>Digital Marketing</p>
          <p style={{padding: '10px'}}>Teaching Software Development</p>
        
      </Box>
    </BoxSection>
      <Box sx={{borderTop: '1px solid grey', width: '100%', height: '50px'}}>
      <p style={{textAlign: 'center', marginTop: '20px'}}>&copy; DIPO TECHNOLOGIES 2021. All Rights Reserved</p>
      </Box>
    </Box>
  );
}

export default Footer;
