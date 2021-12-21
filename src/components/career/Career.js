import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

import './career.css'

const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Career = () => {
  return (
    <div className="career" id="career" >
      <div style={{ paddingTop: '100px',marginBottom:'20px' }}>
        <h1 style={{color: '#FFE652',fontSize:'35px'}}>Current Openings</h1>
      </div>
      <BoxWrapper>
        <h2 style={{color: '#FFE652', fontSize:'22px'}}>Internship Opportunity</h2>
        <button className='btn' onClick={() => window.open('https://forms.gle/t88ohkqf8mEoX7hr5')}>Apply Now</button><br />
        <h2 style={{color: '#FFE652', fontSize:'22px'}}>Jobs Opportunities</h2>
        <button className='btn' onClick={() => window.open('https://forms.gle/ufLbvtbasdKaDVmo6')}>Apply Now</button>
      </BoxWrapper>
    </div>
  );
};

export default Career;
