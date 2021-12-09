import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/system';
import { Container } from '@mui/material';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import LaptopIcon from '@mui/icons-material/Laptop';
import PixIcon from '@mui/icons-material/Pix';
import MemoryIcon from '@mui/icons-material/Memory';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudIcon from '@mui/icons-material/Cloud';

import './service.css'

const BoxSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
}));

const BoxGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

function Services() {
  return (
    <Container>
      <BoxSection sx={{ width: '100%', paddingTop: '60px' }}>
        <Grid container rowSpacing={6} columnSpacing={3}>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <PersonalVideoIcon sx={{fontSize: '3rem'}}/>
              <h2>ICT CONSULTANCY</h2>
              <p className="para">
                We consult for high-end technology implementation at clients’
                site or implementation of new technology according to the
                clients’ requirement or upgrading, enhancing the existing
                facilities in the clients end with the new technology integrated
                with the existing one.
              </p>
            </BoxGrid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <LaptopIcon sx={{fontSize: '3rem'}}/>
              <h2>SOFTWARE DEVELOPMENT</h2>
              <p className="para">
                DIPO TECHNOLOGIES offers scalable end-to-end application
                development and management solutions from requirement analysis
                for deployment and rollout.
              </p>
            </BoxGrid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <PixIcon sx={{fontSize: '3rem'}}/>
              <h2>HARDWARE SALES & SUPPORT SERVICES</h2>
              <p className="para">
                We offer servers, computers, computer accessories and services
                by sourcing from local market and from international market as
                well. Our team of experts is ready to serve you when you are
                worried due to lack of confidence in “commitment of service”.
              </p>
            </BoxGrid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <PhoneIphoneIcon sx={{fontSize: '3rem'}}/>
              <h2>SECURE COMMUNICATIONS DESIGN</h2>
              <p className="para">
                Through the vast experiences by our directors, we provide design
                and optimization services for public and private mobile network
                operators throughout the Asia Pacific region. Our main expertise
                involves design of RF cellular 2G/3G/4G/LTe networks as well as
                Secure Tetra Networks for Public Security
              </p>
            </BoxGrid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <MemoryIcon sx={{fontSize: '3rem'}}/>
              <h2>MANAGED SERVICES</h2>
              <p className="para">
                DIPO TECHNOLOGIES has the expertise and experience to manage
                an enabling infrastructure and applications and run outsourced
                operations for large telecom operators smoothly. DIPO
                TECHNOLOGIES's Managed Services offerings cover the entire array
                of IT outsourcing services including networks, IT
                infrastructure, applications and business processes. This
                provides our customers the best of both worlds - control and
                flexibility over their information systems without either the
                pain or cost of running them.
              </p>
            </BoxGrid>
          </Grid>
          <Grid item xs={6} sm={4}>
            <BoxGrid>
              <CloudIcon sx={{fontSize: '3rem'}}/>
              <h2>NETWORK & INFRASTRUCTURE SERVICES</h2>
              <p className="para">
                DIPO TECHNOLOGIES's services enable clients to identify,
                develop, and implement the best-fit solutions that are equipped
                to meet their changing business requirements
              </p>
            </BoxGrid>
          </Grid>
        </Grid>
      </BoxSection>
    </Container>
  );
}

export default Services;
