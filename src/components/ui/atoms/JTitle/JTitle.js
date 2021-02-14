import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JTitle.scss';

function JTitle({ children, classes, color, tag, ...rest }) {
  const fontDictionary = {
    h1: 'extra-large',
    h2: 'large',
  };
  const className = classNames(
    'j-title',
    `j-title--${color}`,
    `j-title--${fontDictionary[tag]}`,
    classes
  );
  const HtmlTag = tag;

  return (
    <HtmlTag className={className} {...rest}>
      {children}
    </HtmlTag>
  );
}

JTitle.defaultProps = {
  color: 'black',
};

JTitle.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white', 'green']),
  tag: PropTypes.oneOf(['h1', 'h2']).isRequired,
};

export default JTitle;
