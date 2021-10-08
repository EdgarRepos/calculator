import React from "react";
import { useDispatch } from "react-redux";

function Operators(props) {
  const dispatch = useDispatch();

  function handleOperatorClick() {
    dispatch({
      type: "@calculate/operator",
      operator: props.operator
    })
  }

  return (
    <div className="box operators symbols" onClick={handleOperatorClick}>
      <span>{props.operator}</span>
    </div>
  )
}

export default Operators;