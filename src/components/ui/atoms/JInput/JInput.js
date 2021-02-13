import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import JIcon from '../JIcon';

import './JInput.scss';

function JInput({
  classes,
  classesContainer,
  icon,
  iconClicked,
  internalValue,
  valueChange,
  ...rest
}) {
  const [value, setValue] = useState('');
  const className = classNames(
    'j-input__input',
    icon && 'j-input__input--with-icon',
    classes
  );
  const classNameContainer = classNames('j-input', classesContainer);

  useEffect(() => {
    setValue(internalValue);
  }, [internalValue]);

  function handleChange({ target }) {
    setValue(target.value);
    valueChange();
  }

  function handleIconClick() {
    iconClicked();
  }

  return (
    <div className={classNameContainer}>
      <input
        className={className}
        value={value}
        {...rest}
        onChange={handleChange}
      />
      {icon && (
        <JIcon
          className="j-input__icon"
          icon={icon}
          onClick={handleIconClick}
        />
      )}
    </div>
  );
}

JInput.defaultProps = {
  icon: '',
  iconClicked: () => {},
  internalValue: '',
  valueChange: () => {},
};

JInput.propTypes = {
  classes: PropTypes.string,
  classesContainer: PropTypes.string,
  icon: PropTypes.string,
  iconClicked: PropTypes.func,
  internalValue: PropTypes.string,
  valueChange: PropTypes.func,
};

export default JInput;
