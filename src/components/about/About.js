import React from 'react';
import img from '../images/1.jpg';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';

import './about.css';

function About() {

  return (
    <div id="about" style={{ paddingTop: '60px' }}>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className="about-tag"
      >
        <img src={img} alt="hello" width="650px" />
        <div className="slide-right">
          <h3 className="about-title">About DIPO</h3>
          <p>
            DIPO Technologies is a technology and digital marketing agency with
            a focus in building custom software solutions like Web Applications,
            Mobile Applications and Desktop applications
          </p>
          <br />
          <p>
            We nurture ideas by providing the necessary technical expertise for
            them to grow into great brands for solo-entrepreneurs, early stage
            start-ups and small-to-medium enterprise (SMEs).
          </p>
          <br />
          <p>
            With our latest campaign to take all businesses online, thousands of
            customers rely on our digital solutions to get their ideas online.
            We offer everything you need to create an effective and memorable
            presence online. We are an all in one solution to get you online
            with professionals experienced in all felids of digital presence.
          </p>
          <br />
          <p>
            We take time to understand critical business needs and processes for
            our start up clientele to develop customized software solutions
            which aid in our clients capacity building
          </p>
        </div>
      </div>
      <section className="sec">
        <h3>What We Stand For</h3>
        <div className="vis">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <RemoveRedEyeOutlinedIcon style={{ fontSize: '3rem' }} />
                <h4>Our Vision</h4>
              </div>
              <div class="flip-card-back">
                <p>
                  To provide tailored growth experience for solo-entrepreneurs,
                  early stage start up and SMEs
                </p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <ModeStandbyOutlinedIcon style={{ fontSize: '3rem' }} />
                <h4>Our Mission</h4>
              </div>
              <div class="flip-card-back">
                <p>
                  To see businesses embrace technology in their day to day
                  activities and business processes
                </p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <OnlinePredictionOutlinedIcon style={{ fontSize: '3rem' }} />
                <h4>The big Idea</h4>
              </div>
              <div class="flip-card-back">
                <p>
                  To have all major sectors by 2025 use technology to negotiate
                  their activities and improve business performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
