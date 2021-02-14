import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { JButton, JCard, JText } from '@ui';

import './OurSolutionsCard.scss';

function OurSolutionsCard({ classes, solution }) {
  const className = classNames('our-solutions-card', classes);

  return (
    <JCard classes={className}>
      <img
        src={solution.img}
        alt={solution.imgAlt}
        className="our-solutions-card__img"
      />
      <div>
        <JText color="black" classes="our-solutions-card__name">
          {solution.name}
        </JText>
        <JText
          size="small"
          color="pink"
          classes="our-solutions-card__description"
        >
          {solution.description}
        </JText>
        {solution.features && (
          <ul className="our-solutions-card__list">
            {solution.features.map((feature) => {
              return (
                <li key={feature}>
                  <JText color="dark-grey" size="small">
                    {feature}
                  </JText>
                </li>
              );
            })}
          </ul>
        )}
        <JButton
          tag="a"
          href={solution.link}
          rel="noreferrer noopener"
          target="_blank"
          color="black"
          border="green"
          backgroundColor="green"
          classes="our-solutions-card__button"
        >
          Ver solução
        </JButton>
      </div>
    </JCard>
  );
}

OurSolutionsCard.propTypes = {
  classes: PropTypes.string,
  solution: PropTypes.shape({
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurSolutionsCard;
