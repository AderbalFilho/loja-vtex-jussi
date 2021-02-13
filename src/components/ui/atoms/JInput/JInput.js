import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './JInput.scss';

function JInput({ classes, internalValue, valueChange, ...rest }) {
  const [value, setValue] = useState('');
  const className = classNames('j-input__input', classes);

  useEffect(() => {
    setValue(internalValue);
  }, [internalValue]);

  function handleChange({ target }) {
    setValue(target.value);
    valueChange();
  }

  return (
    <div className=".j-input">
      <input
        className={className}
        value={value}
        {...rest}
        onChange={handleChange}
      ></input>
    </div>
  );
}

JInput.defaultProps = {
  internalValue: '',
  valueChange: () => {},
};

JInput.propTypes = {
  classes: PropTypes.string,
  internalValue: PropTypes.string,
  valueChange: PropTypes.func,
};

export default JInput;
