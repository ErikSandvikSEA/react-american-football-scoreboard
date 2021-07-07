import React, { useState } from "react";
import App from './App'
import BottomRow from "./BottomRow";

const GainYards = (props) => {

     const increaseYards = event => {
    
        if (
         props.yards < 45
       ) {
       props.setYards(props.yards + 5)
       props.setBallOn(props.ballOn - 5)
     } else {
       alert('TOUCHDOWN!!')
       props.setYards(0)
       props.setBallOn(50)
     }
     }
   
     const decreaseYards = event => {
       props.setYards(props.yards - 5)
       props.setBallOn(props.ballOn + 5)
     }
     return(
     <div className="scoreboard">
      <h3 className="toGo__title">Yards Gained</h3>
      <div className="toGo__value">{props.yards}</div>
      <div className="yardButtons">
      <button onClick={increaseYards}>5 Yards ⇧</button>
      <button onClick={decreaseYards}>5 Yards ⇩</button>
      
          
        </div>
    </div>
     );
};

export default GainYards;
