import React, { useState } from "react";
import GainYards from './GainYards'
import App from './App'
import "./App.css";



const BottomRow = (props) => {
console.log(props)

  const increaseQuarter = event => {
    console.log(`end of ${props.quarter - 1}`)
    if(props.quarter >= 4){
      props.setQuarter('F')
    } else if (
      props.quarter < 4
    ) {
    props.setQuarter(props.quarter + 1)
  }
  }

  const increaseDown = event => {
    console.log(`Down: ${props.down}`)
    if(props.down >= 4){
      props.setDown('T/O')
    } else if (
      props.down < 4
    ) {
    props.setDown(props.down + 1)
  }
}

  // const increaseYards = event => {
  //   console.log(`Down: ${down}`)
  //    if (
  //     yards < 45
  //   ) {
  //   setYards(yards + 5)
  //   setBallOn(ballOn - 5)
  // } else {
  //   alert('TOUCHDOWN!!')
  //   setYards(0)
  //   setBallOn(50)
  // }
  // }

  // const decreaseYards = event => {
  //   console.log(`Down: ${down}`)
  //   setYards(yards - 5)
  //   setBallOn(ballOn + 5)
  
  // }


  return (
    <div>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.down}</div>
        <div className="downButton">
          <button onClick={increaseDown}>Down ⇧</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball On</h3>
        <div className="ballOn__value">{props.ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quarter}</div>
        <div className="quarterButton">
          <button onClick={increaseQuarter}>Quarter ⇧</button>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default BottomRow;
