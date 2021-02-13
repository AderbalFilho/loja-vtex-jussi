import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JLink.scss';

function JLink({ children, classes, ...rest }) {
  const className = classNames('j-link', classes);

  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}

JLink.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default JLink;
