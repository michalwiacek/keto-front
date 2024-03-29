import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import Link from '../ActiveLink';

import { DrawerContext } from '../../common/src/contexts/DrawerContext';

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  // Add all classs to an array
  const addAllClasses = ['scrollspy__menu'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Close drawer when click on menu item
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <Scrollspy items={scrollItems} className={addAllClasses.join(' ')} drawerClose={drawerClose} {...props}>
      {menuItems.map(menu => (
        <li key={`menu-item-${menu.id}`}>
          {menu.staticLink ? (
            <a href={menu.path}>{menu.label}</a>
          ) : (
            <>
              {drawerClose ? (
                <Link href={menu.path} activeClassName="is-current">
                  <a>{menu.label}</a>
                </Link>
              ) : (
                <Link href={menu.path} onClick={toggleHandler} activeClassName="is-current" offset={menu.offset}>
                  <a>{menu.label}</a>
                </Link>
              )}
            </>
          )}
        </li>
      ))}
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  drawerClose: PropTypes.bool,
  /** className of the ScrollSpyMenu. */
  className: PropTypes.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: PropTypes.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: PropTypes.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: PropTypes.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: PropTypes.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: PropTypes.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: PropTypes.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  // onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
  drawerClose: true,
  offset: 0,
  rootEl: '',
  style: {},
  className: '',
  scrolledPastClassName: '',
  componentTag: 'ul',
  currentClassName: 'is-active',
};

export default ScrollSpyMenu;
