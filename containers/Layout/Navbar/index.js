import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'components/elements/Navbar';
import Drawer from 'components/elements/Drawer';
import Logo from 'components/elements/Logo';
import Box from 'components/elements/Box';
import HamburgMenu from 'components/HamburgMenu';
import Container from 'components/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import {MENU_ITEMS, MENU_LEFT_ITEMS, SOCIAL_PROFILES} from 'common/src/data';
import ScrollSpyMenu from 'components/ScrollSpyMenu';

import LogoImage from 'common/src/assets/images/1.svg';
import SocialProfile from "../SocialProfile";

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu menuLeft"
              menuItems={MENU_LEFT_ITEMS}
              offset={-70}
            />
            <SocialProfile
              className="navbar_social"
              items={SOCIAL_PROFILES}
              iconSize={18}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <SocialProfile
                style={'visibility: hidden'}
                items={SOCIAL_PROFILES}
                iconSize={18}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '200px'],
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
  },
};

export default Navbar;
