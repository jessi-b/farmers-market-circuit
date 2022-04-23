import React from 'react';
import PropTypes from "prop-types";

function MarketDetails(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>Hours: {props.hours}</p>
      <p>Location: {props.location}</p>
      <p>Booth: {props.booth}</p>
    </React.Fragment>
  );
}

MarketDetails.propTypes = {
  location: PropTypes.string,
  day: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}; 

export default MarketDetails;