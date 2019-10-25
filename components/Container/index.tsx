import React from 'react';
import ContainerWrapper from './style';
import PropTypes from "prop-types";

const Container = ({
                     children,
                     className,
                     fullWidth,
                     mobileGutter,
                     noGutter,
                     width,
                     id,
                   }) => {
  const addAllClasses = ['container'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ContainerWrapper
      id={id}
      className={addAllClasses.join(' ')}
      fullWidth={fullWidth}
      noGutter={noGutter}
      mobileGutter={mobileGutter}
      width={width}
    >
      {children}
    </ContainerWrapper>
  );
};
Container.propTypes = {
  children: PropTypes.object,
};

Container.defaultProps = {
    children: {},
    id: {},
    fullWidth: false,
};


export default Container;
