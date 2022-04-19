import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";
// import ProduceList from "./ProduceList";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <MarketControl />
      {/* <ProduceList /> */}
    </React.Fragment>
  );
}

export default App;