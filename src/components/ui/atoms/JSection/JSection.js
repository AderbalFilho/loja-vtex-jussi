import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JSection.scss';

function JSection({ children, classes, color, ...rest }) {
  const className = classNames('j-section', `j-section--${color}`, classes);

  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
}

JSection.defaultProps = {
  color: 'white',
};

JSection.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  color: PropTypes.oneOf(['white', 'black', 'pink', 'green']),
};

export default JSection;
