import React from "react";
import { useDispatch } from "react-redux";

function Memory(props) {
  const dispatch = useDispatch();

  function handleOperatorClick() {
    dispatch({
      type: "@calculate/memory",
      memory: props.operator
    })
  }

  return (
    <div className="operators">
      <span onClick={handleOperatorClick} name={props.operand}>{props.operator}</span>
    </div>
  )
}

export default Memory;