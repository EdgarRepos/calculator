import React from "react";
import { useDispatch } from "react-redux";

function Operators(props) {
  const dispatch = useDispatch();

  function handleOperatorClick(e) {
    dispatch({
      type: "@calculate/operator",
      operator: props.operator
    })
  }

  return (
    <div className="operators">
      <span onClick={() => handleOperatorClick()}>{props.operator}</span>
    </div>
  )
}

export default Operators;