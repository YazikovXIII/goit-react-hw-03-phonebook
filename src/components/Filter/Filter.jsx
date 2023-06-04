import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  const id = 'search-input';

  return (
    <div className="filterwrapper">
      <label htmlFor={id}>Search by name</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
