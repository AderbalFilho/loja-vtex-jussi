import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JText.scss';

function JText({ children, classes, color, size, ...rest }) {
  const className = classNames(
    'j-text',
    `j-text--${color}`,
    `j-text--${size}`,
    classes
  );

  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
}

JText.defaultProps = {
  size: 'normal',
  color: 'default',
};

JText.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small']),
  color: PropTypes.oneOf(['default', 'white', 'black', 'dark-grey', 'pink']),
};

export default JText;
