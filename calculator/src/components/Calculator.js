import React from "react";
import Display from "./Display";
import Operands from "./buttons/Operands";
import Operators from "./buttons/Operators";
import EqualSymbol from "./buttons/EqualSymbol";
import Memory from "./buttons/Memory";

function Calculator() {

  return (
    <div id="calculator">
      <Display />
      <div className="row four-columns">
        <Memory operator="C" />
        <Memory operator="M+" />
        <Memory operator="M-" />
        <Operators operator="/" />
      </div>
      <div className="row four-columns">
        <Operands operand="7" />
        <Operands operand="8" />
        <Operands operand="9" />
        <Operators operator="X" />  
      </div>
      <div className="row four-columns">
        <Operands operand="4" />
        <Operands operand="5" />
        <Operands operand="6" />
        <Operators operator="-" />
      </div>
      <div className="row four-columns">
        <Operands operand="1" />
        <Operands operand="2" />
        <Operands operand="3" />
        <Operators operator="+" />
      </div>
      <div className="row three-columns bottom">
        <Operands operand="0" />
        <Memory operator="MR" />
        <EqualSymbol operator="=" />
      </div>
      
    </div>
  )
}

export default Calculator;