import React from 'react';
import vid from '../images/dipo.mp4'
import { Box, styled } from '@mui/system';

import './hero.css'

const HeroSection = styled(Box)(({ theme }) => ({
  // backgroundImage: `url(${'http://anthillonline.com/wp-content/uploads/2016/08/future_technology1.jpg'})`,
  // minHeight: '110vh',
  // marginTop: '10px',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // zIndex: '1',
}));

// const HeroText = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   minHeight: '100vh',
//   justifyContent: 'center',
//   color: 'rgba(231, 214, 29, 1)'
// }));

function Hero() {
  return (
    <>
      <HeroSection id='home'>
      <video src={vid} autoPlay loop muted/>
        {/* <HeroText>
          <h1>DIPO TECHNOLOGIES</h1>
        </HeroText> */}
      </HeroSection>
    </>
  );
}

export default Hero;
