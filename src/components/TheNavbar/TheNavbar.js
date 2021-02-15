import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { JLink } from '@ui';

import './TheNavbar.scss';

function TheNavbar({ classes, links }) {
  const className = classNames('the-navbar', classes);

  return (
    <nav className={className}>
      {links &&
        links.map((link) => (
          <JLink
            key={link.label}
            href={link.url}
            rel="noreferrer noopener"
            target="_blank"
            classes="the-navbar__link"
          >
            {link.label}
          </JLink>
        ))}
    </nav>
  );
}

TheNavbar.propTypes = {
  classes: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default TheNavbar;
