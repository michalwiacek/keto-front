import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../../components/elements/Navbar';
import Box from '../../../components/elements/Box';
import Container from '../../../components/Container';
import ScrollSpyMenu from '../../../components/ScrollSpyMenu';
import { DrawerContext } from '../../../common/src/contexts/DrawerContext';

const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'Ride',
    path: '#ride_section',
    offset: '70',
  },
  {
    label: 'Fare Estimate',
    path: '#fare_section',
    offset: '70',
  },
  {
    label: 'Features',
    path: '#feature_section',
    offset: '70',
  },
  {
    label: 'News',
    path: '#news_section',
    offset: '70',
  },
];

const LowerMenu = ({ navbarStyle, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...menuWrapper}>
            <ScrollSpyMenu className="lower_nav_menu" menuItems={MENU_ITEMS} offset={0} />
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

LowerMenu.propTypes = {
  navbarStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

LowerMenu.defaultProps = {
  navbarStyle: {
    className: 'lower_menu',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
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
    justifyContent: 'space-evenly',
  },
};

export default LowerMenu;
