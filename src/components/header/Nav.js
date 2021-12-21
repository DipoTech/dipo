import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './nav.css';
import {
  AppBar,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';
import logo from '../images/logowhite.png';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

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
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  // React.useEffect(() => {

  // }, []);
  //#71DFE7
  return (
    <Box>
      <AppBar
        position="fixed"
        style={{ background: `${offSet > 40 ? '#009DAE' : 'transparent'}` }}
      >
        <NavWrapper>
          <Box>
            <img src={logo} alt="logo" style={{ height: 35 }} />
          </Box>
          <Hidden smDown>
            <NavLinks>
              <div>
                <p className="nav_link">
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </p>
              </div>
              <div>
                <p className="nav_link">
                  <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                  >
                    Services
                  </Link>
                </p>
              </div>
              <div>
                <p className="nav_link">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                  >
                    About Us
                  </Link>
                </p>
              </div>
              <div>
                <p className="nav_link">
                  <Link
                    activeClass="active"
                    to="career"
                    spy={true}
                    smooth={true}
                  >
                    Career
                  </Link>
                </p>
              </div>
              <div>
                <p className="nav_link">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </NavLinks>
          </Hidden>
          <Hidden smUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 4 }}
            >
              <MenuIcon onClick={() => setOpen(true)}/>
            </IconButton>
          </Hidden>
        </NavWrapper>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)}/>
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Home', 'Service', 'About', 'Career', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
               <Link to={text.toLowerCase()}>{text}</Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
}

export default Nav;
