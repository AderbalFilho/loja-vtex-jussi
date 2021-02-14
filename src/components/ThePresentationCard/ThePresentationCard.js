import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { JButton, JCard } from '@ui';

import './ThePresentationCard.scss';

function ThePresentationCard({ classes, offer }) {
  const className = classNames('the-presentation-card', classes);
  const tag = offer.action ? 'button' : 'a';
  const rest = offer.action
    ? { onClick: offer.action }
    : {
        href: offer.link,
        rel: 'noreferrer noopener',
        target: '_blank',
      };

  return (
    <JCard size="small" shadow="black" classes={className}>
      <div className="the-presentation-card__img-container">
        <img
          src={offer.img}
          alt={offer.imgAlt}
          className="the-presentation-card__img"
        />
      </div>
      <JButton
        tag={tag}
        radius="circle"
        color="pink"
        border="pink"
        classes="the-presentation-card__button"
        {...rest}
      >
        {offer.buttonText}
      </JButton>
    </JCard>
  );
}

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.link && !props.action) {
    return new Error(
      `One of 'link' or 'action' is required by '${componentName}' component.`
    );
  }
};

ThePresentationCard.propTypes = {
  classes: PropTypes.string,
  offer: PropTypes.shape({
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: requiredPropsCheck,
    action: requiredPropsCheck,
  }).isRequired,
};

export default ThePresentationCard;
