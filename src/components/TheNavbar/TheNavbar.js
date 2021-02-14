import React from 'react';
import PropTypes from 'prop-types';

import { JLink } from '@ui';

import './TheNavbar.scss';

function TheNavbar({ links }) {
  return (
    <nav className="the-navbar">
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default TheNavbar;
