import React from "react";
import { useDispatch } from "react-redux";

function EqualSymbol(props) {
  const dispatch = useDispatch();

  function handleOperatorClick() {
    dispatch({
      type: "@calculate/equal",
      isEqualSymbol: true
    })
  }

  return (
    <div className="operators">
      <span onClick={handleOperatorClick} name={props.operand}>{props.operator}</span>
    </div>
  )
}

export default EqualSymbol;