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
import DoneIcon from '@mui/icons-material/Done';
import Tilt from 'react-parallax-tilt';

import './service.css';

const BoxSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  // background: '#FC997C'
}));

const BoxSectio = styled(Box)(({ theme }) => ({
  // minHeight: '100vh',
  background: '#C2FFF9',
}));

const BoxGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  borderRadius: '0 10px 10px 10px',
  boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2)',
  background: '#328ced',
  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(5px)',
  // transition: '200ms transform ease-in-out',
  // '&:hover': {
  //   transform: 'translateY(0px)',
  //   opacity: '1',
  // },
}));

function Services() {
  return (
    <BoxSectio>
      <Container>
        <div id="service">
          <BoxSection sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={6}
              columnSpacing={3}
              style={{ paddingTop: '60px', paddingBottom: '30px' }}
            >
              <Grid item xs={12} sm={4}>
              <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                <BoxGrid>
                  <PersonalVideoIcon
                    sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }}
                  />
                  <h2 style={{color: '#FFE652'}}>ICT CONSULTANCY</h2>
                  <div style={{ justifyContent: 'flex-start' }} className='hello'>
                    <div
                        className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Strategy Planning</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Assessment</p>
                    </div>
                    <div
                     className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Procument</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Re-engeering Solutions</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Planning And Auditing</p>
                    </div>
                  </div>
                </BoxGrid>
                </Tilt>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                  <BoxGrid>
                    <LaptopIcon
                      sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }}
                    />
                    <h2 style={{color: '#FFE652'}}>SOFTWARE DEVELOPMENT</h2>
                    <div
                      style={{ justifyContent: 'flex-start' }}
                      className="hello"
                    >
                      <div className="content">
                        <DoneIcon
                          sx={{
                            marginLeft: '30px',
                            marginRight: '10px',
                            color: 'green',
                            fontSize: '20px',
                          }}
                        />
                        <p>Web Development</p>
                      </div>
                      <div className="content">
                        <DoneIcon
                          sx={{
                            marginLeft: '30px',
                            marginRight: '10px',
                            color: 'green',
                            fontSize: '20px',
                          }}
                        />
                        <p>Application Development</p>
                      </div>
                      <div className="content">
                        <DoneIcon
                          sx={{
                            marginLeft: '30px',
                            marginRight: '10px',
                            color: 'green',
                            fontSize: '20px',
                          }}
                        />
                        <p>Application Support</p>
                      </div>
                      <div className="content">
                        <DoneIcon
                          sx={{
                            marginLeft: '30px',
                            marginRight: '10px',
                            color: 'green',
                            fontSize: '20px',
                          }}
                        />
                        <p>Application Intergration</p>
                      </div>
                      <div className="content">
                        <DoneIcon
                          sx={{
                            marginLeft: '30px',
                            marginRight: '10px',
                            color: 'green',
                            fontSize: '20px',
                          }}
                        />
                        <p>Application Migration</p>
                      </div>
                    </div>
                  </BoxGrid>
                </Tilt>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                <BoxGrid>
                  <PixIcon sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }} />
                  <h2 style={{color: '#FFE652'}}>HARDWARE SALES & SUPPORT SERVICES</h2>
                  <div style={{ justifyContent: 'flex-start' }} className='hello'>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Web Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Support</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Intergration</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Migration</p>
                    </div>
                  </div>
                </BoxGrid>
                </Tilt>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                <BoxGrid>
                  <PhoneIphoneIcon
                    sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }}
                  />
                  <h2 style={{color: '#FFE652'}}>SECURE COMMUNICATIONS DESIGN</h2>
                  <div style={{ justifyContent: 'flex-start' }} className='hello'>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Web Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Support</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Intergration</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Migration</p>
                    </div>
                  </div>
                </BoxGrid>
                </Tilt>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                <BoxGrid>
                  <MemoryIcon sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }} />
                  <h2 style={{color: '#FFE652'}}>MANAGED SERVICES</h2>
                  <div style={{ justifyContent: 'flex-start' }} className='hello'>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Web Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Support</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Intergration</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Migration</p>
                    </div>
                  </div>
                </BoxGrid>
                </Tilt>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Tilt
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.01}
                  gyroscope={true}
                >
                <BoxGrid>
                  <CloudIcon sx={{ fontSize: '3rem', alignSelf: 'center',color: 'white' }} />
                  <h2 style={{color: '#FFE652'}}>NETWORK & INFRASTRUCTURE SERVICES</h2>
                  <div style={{ justifyContent: 'flex-start' }} className='hello'>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Web Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Development</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Support</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Intergration</p>
                    </div>
                    <div
                      className="content"
                    >
                      <DoneIcon
                        sx={{
                          marginLeft: '30px',
                          marginRight: '10px',
                          color: 'green',
                          fontSize: '20px',
                        }}
                      />
                      <p>Application Migration</p>
                    </div>
                  </div>
                </BoxGrid>
                </Tilt>
              </Grid>
            </Grid>
          </BoxSection>
        </div>
      </Container>
    </BoxSectio>
  );
}

export default Services;
