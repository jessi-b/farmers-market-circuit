import React from "react";
import Header from "./Header";
import MarketList from "./MarketList";
import ProduceList from "./ProduceList";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <MarketList />
      <ProduceList />
    </React.Fragment>
  );
}

export default App;