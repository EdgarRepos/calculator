import React from "react";
import { useDispatch } from "react-redux";

function EqualSymbol(props) {
  const dispatch = useDispatch();

  function handleOperatorClick(e) {
    dispatch({
      type: "@calculate/equal",
      isEqualSymbol: true
    })
  }

  return (
    <div className="box operators equal" onClick={handleOperatorClick} data-test="equalSymbol">
      <span>{props.operator}</span>
    </div>
  )
}

export default EqualSymbol;