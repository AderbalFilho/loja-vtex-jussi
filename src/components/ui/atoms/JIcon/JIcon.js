import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import searchIcon from '@assets/icons/search.svg';
import shoppingCartIcon from '@assets/icons/shopping-cart.svg';

function JIcon({ classes, icon, ...rest }) {
  const className = classNames('j-icon', classes);
  const iconsDictionary = {
    search: {
      accessibilityText: 'buscar',
      icon: searchIcon,
    },
    shoppingCart: {
      accessibilityText: 'carrinho de compras',
      icon: shoppingCartIcon,
    },
  };

  return (
    <img
      className={className}
      src={icon && iconsDictionary[icon].icon}
      alt={icon && iconsDictionary[icon].accessibilityText}
      {...rest}
    />
  );
}

JIcon.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.oneOf(['search', 'shoppingCart']).isRequired,
};

export default JIcon;
