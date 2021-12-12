import React from 'react';
import Box from '@mui/material/Box';
import './nav.css';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { Link, animateScroll } from 'react-scroll'

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
  animateScroll.scrollToTop()
  return (
    <Box>
      <AppBar position='fixed'>
        <NavWrapper>
          <Box>LOGO</Box>
          <NavLinks>
            <div>
              <p className='nav_link'><Link to='home' spy={true} smooth={true}>Home</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link to='service' spy={true} smooth={true}>Services</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link to='about' spy={true} smooth={true}>About Us</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link to='contact' spy={true} smooth={true}>Contact Us</Link></p> 
            </div>
            <div>
              <p className='nav_link'><Link to='career' spy={true} smooth={true}>Career</Link></p> 
            </div>
          </NavLinks>
        </NavWrapper>
      </AppBar>
    </Box>
  );
}

export default Nav;
