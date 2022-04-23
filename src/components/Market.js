import React from 'react';
import PropTypes from "prop-types";

function Market(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDayClicked(props.day)}>
        <h3>{props.day}</h3>
        <br/>
      </div>
    </React.Fragment>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  whenDayClicked: PropTypes.func
}; 

export default Market;