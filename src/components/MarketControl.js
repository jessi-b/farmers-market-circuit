import React from "react";
import MarketList from './MarketList';
import MarketDetails from './MktDisplayDetails';

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // detailsDisplayed: false,
      sunDetails: false
      // monDetails: false,
      // tueDetails: false,
      // wedDetails: false,
      // thursDetails: false,
      // friDetails: false,
      // satDetails: false
    };
  }
 //handleChangeDisplay = (currentDay) - callback
  //handler method
  handleClick = () => {
    this.setState(prevState => ({
      // detailsDisplayed: !prevState.detailsDisplayed
      sunDetails: !prevState.sunDetails
      // (this.monDetails): !prevState.monDetails
      // tueDetails: !prevState.tueDetails
      // wedDetails: !prevState.
      // thursDetails: !prevState.
      // friDetails: !prevState.
      // satDetails: !prevState.
    }));
  }
  // render method
  render() {
    let currentState = null;
    // let button = null;
    if (this.state.sunDetails) {  // default: false
      currentState = <MarketDetails/>
      // button = "Return to Schedule";
    } else {
      currentState = <MarketList/>;
      //addTicketButton = <button onClick={this.handleClick}>Add ticket</button> // new code
      
      // button = "blah";
    }
    return (
      <React.Fragment>
        {currentState}
        <button onClick={this.handleClick}>{this.props.day}</button> 
      </React.Fragment>
    )
  }
}

export default MarketControl;