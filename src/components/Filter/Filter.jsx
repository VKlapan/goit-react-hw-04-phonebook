import PropTypes from 'prop-types';
import { React } from 'react';
import { FilterForm } from './Filter.styled';

const Filter = ({ value, onSearch }) => {
  const handleSearch = event => {
    onSearch(event.currentTarget.value);
  };
  return (
    <FilterForm>
      <label>
        Find contact by Name <br />
        <input
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
        ></input>
      </label>
    </FilterForm>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
