import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddressLink = ({ address, children }) => (
  <NavLink to={`${address}`}>
    {children}
  </NavLink>
);

AddressLink.propTypes = {
  address: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired
};

export default AddressLink;
