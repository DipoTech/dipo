import React from 'react';
import Box from '@mui/material/Box';
import './nav.css';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

const NavWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '450px',
}));

function Nav() {
  return (
    <Box>
      <AppBar position='fixed'>
        <NavWrapper>
          <Box>LOGO</Box>
          <NavLinks>
            <div>
              <p>Home</p>
            </div>
            <div>
              <p>Services</p>
            </div>
            <div>
              <p>About Us</p>
            </div>
            <div>
              <p>Contact Us</p> 
            </div>
          </NavLinks>
        </NavWrapper>
      </AppBar>
    </Box>
  );
}

export default Nav;
