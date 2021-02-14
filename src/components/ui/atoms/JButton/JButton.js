import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JButton.scss';

function JButton({
  backgroundColor,
  border,
  children,
  classes,
  color,
  radius,
  tag,
  ...rest
}) {
  const className = classNames(
    'j-button',
    `j-button--back-${backgroundColor}`,
    `j-button--border-${border}`,
    `j-button--${color}`,
    `j-button--rad-${radius}`,
    tag === 'a' && `j-button--link`,
    classes
  );
  const HtmlTag = tag;

  return (
    <HtmlTag className={className} {...rest}>
      {children}
    </HtmlTag>
  );
}

JButton.defaultProps = {
  backgroundColor: 'transparent',
  border: 'black',
  color: 'black',
  radius: 'normal',
  tag: 'button',
};

JButton.propTypes = {
  backgroundColor: PropTypes.oneOf(['transparent', 'green']),
  border: PropTypes.oneOf(['black', 'pink', 'green']),
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['black', 'pink', 'green']),
  radius: PropTypes.oneOf(['normal', 'circle']),
  tag: PropTypes.oneOf(['button', 'a']),
};

export default JButton;
