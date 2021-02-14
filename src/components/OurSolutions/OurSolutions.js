import React from 'react';
import PropTypes from 'prop-types';

import OurSolutionsCard from '@components/OurSolutionsCard';

import { JSection, JTitle } from '@ui';

import './OurSolutions.scss';

function OurSolutions({ solutions }) {
  return (
    <JSection classes="our-solutions">
      <div className="our-solutions__container">
        <div className="our-solutions__titles">
          <JTitle tag="h2" color="green">
            &#47;&#47;
          </JTitle>
          <JTitle tag="h2">Nossas soluções</JTitle>
        </div>
        <div className="our-solutions__cards">
          {solutions.map((solution) => {
            return <OurSolutionsCard key={solution.name} solution={solution} />;
          })}
        </div>
      </div>
    </JSection>
  );
}

OurSolutions.propTypes = {
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      img: PropTypes.string.isRequired,
      imgAlt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OurSolutions;
