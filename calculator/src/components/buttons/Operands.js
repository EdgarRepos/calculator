import React from "react";
import { useDispatch } from "react-redux";

function Operands(props) {
  const dispatch = useDispatch();

  function handleOperandClick() {
    dispatch({
      type: "@calculate/operand",
      number: props.operand
    })
  }

  return (
    <div className="operands">
      <span onClick={handleOperandClick} name={props.operand}>{props.operand}</span>
    </div>
  )
}

export default Operands;