import React from 'react';
import PropTypes from "prop-types";

function Market(props) {
  return (
    <React.Fragment>
      <button>{props.day}</button>
      <br/>
    </React.Fragment>
  );
}

Market.propTypes = {
  day: PropTypes.string.isRequired
}; 

export default Market;