import React from "react";
import MarketList from './MarketList';
import MarketDetails from './MktDisplayDetails';

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null
    };
  }

  // event handler functions
  handleClick = () => {
    if (this.state.selectedDay != null) {
      this.setState({
        selectedDay: null
      });
    } // possibly need else prevState => ({selectedDay: !prevState.selectedDay
  }
  handleSelectedDay = (day) => {
    const selectedDay = this.state.marketSchedule.filter(market => market.day === day)[0];
    this.setState({selectedDay: selectedDay});
  }

  // render method
  render() {
    let currentlyVisibleState = null;
    if (this.state.selectedDay !== null) {
      currentlyVisibleState = <MarketDetails market = {this.state.selectedDay} />
      {/* <button onClick={this.handleClick}>{Return to Schedule}</button>  */}
      let buttonText = "Return to Market Schedule";
    }
    else {
      currentlyVisibleState = <MarketList marketSchedule={this.state.marketSchedule} onSelectedDay={this.handleSelectedDay} />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default MarketControl;