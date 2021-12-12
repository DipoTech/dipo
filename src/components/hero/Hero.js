import React from 'react';
import { Box, styled } from '@mui/system';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${'http://anthillonline.com/wp-content/uploads/2016/08/future_technology1.jpg'})`,
  minHeight: '100vh',
  marginTop: '10px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

const HeroText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: '100vh',
  justifyContent: 'center',
  color: 'rgba(231, 214, 29, 1)'
}));

function Hero() {
  return (
    <>
      <HeroSection id='home'>
        <HeroText>
          <h1>DIPO TECHNOLOGIES</h1>
        </HeroText>
      </HeroSection>
    </>
  );
}

export default Hero;
