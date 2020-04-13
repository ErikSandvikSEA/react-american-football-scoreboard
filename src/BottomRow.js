import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1)
  const [down, setDown] = useState(1)
  const [yards, setYards] = useState(0)
  const [ballOn, setBallOn] = useState(50)

  const increaseQuarter = event => {
    console.log(`end of ${quarter - 1}`)
    if(quarter >= 4){
      setQuarter('F')
    } else if (
      quarter < 4
    ) {
    setQuarter(quarter + 1)
  }
  }

  const increaseDown = event => {
    console.log(`Down: ${down}`)
    if(down >= 4){
      setDown('T/O')
    } else if (
      down < 4
    ) {
    setDown(down + 1)
  }
}

  const increaseYards = event => {
    console.log(`Down: ${down}`)
     if (
      yards < 45
    ) {
    setYards(yards + 5)
    setBallOn(ballOn - 5)
  } else {
    alert('TOUCHDOWN!!')
    setYards(0)
    setBallOn(50)
  }
  }

  const decreaseYards = event => {
    console.log(`Down: ${down}`)
    setYards(yards - 5)
    setBallOn(ballOn + 5)
  
  }


  return (
    <div>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
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
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <div className="quarterButton">
          <button onClick={increaseQuarter}>Quarter ⇧</button>
        </div>
      </div>
    </div>
    <div className='gainYards'>
      <h3 className="toGo__title">Yards Gained</h3>
      <div className="toGo__value">{yards}</div>
      <div className="yardButtons">
      <button onClick={increaseYards}>5 Yards ⇧</button>
      <button onClick={decreaseYards}>5 Yards ⇩</button>
      
          
        </div>
    </div>
    </div>
  );
};

export default BottomRow;
