import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const state = useSelector((state) => state);
  
  function renderNumber(state) {
    if (!state || !state.currentNumber) {
      return "0"
    }

    if (!state.isEqualSymbol && state.previousNumber) {
      return `${state.previousNumber} ${state.operator} ${state.currentNumber}`
    }
    return state.currentNumber;
  }
  

  return (
    <div className="row display-container top">
      <span>{renderNumber(state)}</span>
    </div>
  )
}

export default Display;