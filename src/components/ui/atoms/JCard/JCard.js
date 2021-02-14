import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JCard.scss';

function JCard({ children, classes, radius, shadow, size, ...rest }) {
  const className = classNames(
    'j-card',
    `j-card--rad-${radius}`,
    shadow === 'black' && 'j-card--shadow',
    `j-card--size-${size}`,
    classes
  );

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

JCard.defaultProps = {
  radius: 'normal',
  shadow: 'none',
  size: 'normal',
};

JCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  radius: PropTypes.oneOf(['normal', 'small']),
  shadow: PropTypes.oneOf(['none', 'black']),
  size: PropTypes.oneOf(['normal', 'small']),
};

export default JCard;
