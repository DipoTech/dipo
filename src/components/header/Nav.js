import React from 'react';
import Box from '@mui/material/Box';
import './nav.css';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';
import logo from '../images/logowhite.png';

const NavWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '450px',
}));

function Nav() {
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // React.useEffect(() => {
   
  // }, []);
  return (
    <Box>
      <AppBar position='fixed' style={{background:`${offSet > 40 ? '#71DFE7' : '#009DAE'}`}}>
        <NavWrapper>
          <Box><img src={logo} alt="logo" style={{height: 35}} /></Box>
          <NavLinks>
            <div>
              <p className='nav_link'><Link activeClass="active" to='home' spy={true} smooth={true}>Home</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link activeClass="active" to='service' spy={true} smooth={true}>Services</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link activeClass="active" to='about' spy={true} smooth={true}>About Us</Link></p>
            </div>
            <div>
              <p className='nav_link'><Link activeClass="active" to='career' spy={true} smooth={true}>Career</Link></p> 
            </div>
            <div>
              <p className='nav_link'><Link activeClass="active" to='contact' spy={true} smooth={true}>Contact Us</Link></p> 
            </div>
          </NavLinks>
        </NavWrapper>
      </AppBar>
    </Box>
  );
}

export default Nav;
